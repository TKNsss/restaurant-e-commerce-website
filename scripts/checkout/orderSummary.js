import { cart } from "../data/cart.js";
import { getDish } from "../data/dishes.js";
import { formatCurrency } from "../utils/money.js";
import { updateCartLabel } from "../checkout.js";

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
          <input type="number" min="1" value="${
            cartItem.quantity
          }" class="counter-num counter-num-${cartItem.dishId}" id="${matchingDish.id}">
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
              <div class="delivery-option">
                <input checked name="delivery-option-${
                  matchingDish.id
                }" type="radio">
                <div class="delivery-title">
                  FREE - Shipping
                </div>
              </div>

              <div class="delivery-option">
                <input name="delivery-option-${matchingDish.id}" type="radio">
                <div class="delivery-title">
                  $4.99 - Shipping
                </div>
              </div>

              <div class="delivery-option">
                <input name="delivery-option-${matchingDish.id}" type="radio">
                <div class="delivery-title">
                  $9.99 - Shipping
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="cart-dish-bottom">
          <div class="save-remove-btn">
            <button class="remove-btn"><i class="fa-solid fa-xmark"></i></button>
            <button class="save-btn"><i class="fa-solid fa-arrow-down"></i></button>
          </div>
        </div>
      </div>
    </div>
  `;
  });

  document.querySelector(".js-order-summary").innerHTML = cartSummaryHTML;
  attachCounterEvents();
}

function updateCartQuantity(dishId, quantity) {
  const cartItem = cart.find((item) => item.dishId === dishId);

  if (cartItem) {
    cartItem.quantity = quantity;
  }
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
      updateCartQuantity(dishId, count);
    });
  });

  document.querySelectorAll(".plus-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const dishId = btn.dataset.plusBtn;
      const input = document.querySelector(`.counter-num-${dishId}`);
      let count = parseInt(input.value) + 1;
      count = count > 10 ? 10 : count;
      input.value = count;
      updateCartQuantity(dishId, count);
    });
  });

  document.querySelectorAll(".counter-num").forEach((input) => {
    input.addEventListener("change", () => {
      const dishId = input.id;
      let count = parseInt(input.value);
      count = isNaN(count) || count < 1 ? 1 : count;
      input.value = count;
      updateCartQuantity(dishId, count);
    });
  });
}