import {
  cart,
  updateCartQuantity,
  removeFromCart,
  updateDeliveryOption,
} from "../data/cart.js";
import { getDish } from "../data/dishes.js";
import { formatCurrency } from "../utils/money.js";
import { updateCartLabel } from "../checkout.js";
import { deliveryOptions } from "../data/deliveryOptions.js";
import { renderPaymentSummary } from "./paymentSummary.js";

export function renderOrderSummary() {
  let cartSummaryHTML = "";

  cart.forEach((cartItem) => {
    const dishId = cartItem.dishId;
    const matchingDish = getDish(dishId);

    cartSummaryHTML += `
    <div class="cart-dish-container">
      <div class="cart-dish-top">
        <h3 class="dish-title">${matchingDish.name}</h3>

        <div class="counter-box">
          <button class="minus-btn" data-minus-btn="${
            cartItem.dishId
          }">-</button>
          <input type="number" value="${
            cartItem.quantity
          }" class="counter-num counter-num-${cartItem.dishId}" id="${
      matchingDish.id
    }">
          <button class="plus-btn" data-plus-btn="${cartItem.dishId}">+</button>
        </div>

        <div class="total-amount">$${formatCurrency(
          matchingDish.priceCents
        )}</div>
      </div>

      <div class="split-section">
        <div class="cart-dish-main">
          <div class="dish-img-wrapper">
            <img class="dish-img" src="${matchingDish.image}" alt="${
      matchingDish.imgName
    }">
          </div>

          <div class="delivery-detail">
            <h3 class="details-title">Detail</h3>

            <div class="details">
              <p class="delivery-status">In stock and ready to ship</p>
              <p class="shipping-standard">Shipping: <span>Standard</span></p>
              <p class="quantity">Quantity : ${cartItem.quantity}</p>
              <p class="destination"><i class="fa-solid fa-location-dot"></i> Location: Ha Noi</p>
            </div>
          </div>

          <div class="delivery">
            <h3 class="delivery-title">Choose a delivery option</h3>

            <div class="options">
              ${deliveryOptionHTML(matchingDish, cartItem)}
            </div>
          </div>
        </div>

        <div class="cart-dish-bottom">
          <div class="save-remove-btn">
            <button class="remove-btn js-remove-btn" data-dish-id="${
              matchingDish.id
            }"><i class="fa-solid fa-xmark"></i></button>
            <button class="save-btn"><i class="fa-solid fa-arrow-down"></i></button>
          </div>
        </div>
      </div>
    </div>
  `;
  });

  function deliveryOptionHTML(matchingDish, cartItem) {
    let html = "";

    deliveryOptions.forEach((deliveryOption) => {
      const priceString =
        deliveryOption.priceCents === 0
          ? "FREE"
          : `$${formatCurrency(deliveryOption.priceCents)} -`;

      const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

      html += `
        <div class="delivery-option js-delivery-option" data-dish-id="${matchingDish.id}" data-delivery-option-id="${deliveryOption.id}">
          <input ${isChecked ? "checked" : ""} name="delivery-option-${
            matchingDish.id
          }" type="radio">
          <div class="delivery-title">
            ${priceString} Shipping
          </div>
        </div>
      `;
    });
    return html;
  }

  document.querySelector(".js-order-summary").innerHTML = cartSummaryHTML;

  function updateQuantity(dishId, quantity) {
    updateCartQuantity(dishId, quantity);
    updateCartLabel();
    renderOrderSummary();
  }

  function attachCounterEvents() {
    document.querySelectorAll(".minus-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const dishId = btn.dataset.minusBtn;
        const input = document.querySelector(`.counter-num-${dishId}`);
        let count = parseInt(input.value) - 1;
        count = count < 1 ? 1 : count;
        input.value = count;
        updateQuantity(dishId, count);
        renderPaymentSummary();
      });
    });

    document.querySelectorAll(".plus-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const dishId = btn.dataset.plusBtn;
        const input = document.querySelector(`.counter-num-${dishId}`);
        let count = parseInt(input.value) + 1;
        count = count > 10 ? 10 : count;
        input.value = count;
        updateQuantity(dishId, count);
        renderPaymentSummary();
      });
    });
  }

  attachCounterEvents();
  updateCartLabel();

  document.querySelectorAll(".js-remove-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const { dishId } = btn.dataset;

      removeFromCart(dishId);
      renderOrderSummary();
      renderPaymentSummary();
    });
  });

  document.querySelectorAll(`.js-delivery-option`).forEach((element) => {
    element.addEventListener("click", () => {
      const { dishId, deliveryOptionId } = element.dataset;
      updateDeliveryOption(dishId, deliveryOptionId);
      renderOrderSummary(); 
      renderPaymentSummary();
    });
  });
}

