import { activeHeaderMenu } from './utils/headerAndFooter.js';
import { cart } from './data/cart.js';
import { getDish } from './data/dishes.js';
import { formatCurrency } from './utils/money.js'

activeHeaderMenu();

// function counter(min, max, initial) {
//   let count = initial;
//   const input = document.querySelector(".counter-num");
//   const minusBtn = document.querySelector(".minus-btn");
//   const plusBtn = document.querySelector(".plus-btn");
//   input.value = initial;

//   minusBtn.addEventListener("click", () => {
//     count = count - 1 < min ? min : count - 1;
//     input.value = count;
//   });

//   plusBtn.addEventListener("click", () => {
//     count = count + 1 > max ? max : count + 1;
//     input.value = count;
//   });
// }

// counter(1, 10, 1);

let cartSummaryHTML = '';

cart.forEach(cartItem => {
  const dishId = cartItem.dishId;
  const matchingDish = getDish(cartItem.dishId);

  cartSummaryHTML += `
    <div class="cart-dish-container">
      <div class="cart-dish-top">
        <h3 class="dish-title">${matchingDish.name}</h3>

        <div class="counter-box">
          <button class="minus-btn">-</button>
          <input type="text" class="counter-num">
          <button class="plus-btn">+</button>
        </div>

        <div class="total-amount">$${formatCurrency(matchingDish.priceCents)}</div>
      </div>

      <div class="split-section">
        <div class="cart-dish-main">
          <div class="dish-img-wrapper">
            <img class="dish-img" src="${matchingDish.image}" alt="${matchingDish.imgName}">
          </div>

          <div class="delivery-detail">
            <h3 class="details-title">Detail</h3>

            <div class="details">
              <p class="delivery-status">In stock and ready to ship</p>
              <p class="shipping-standard">Shipping: <span>Standard</span></p>
              <p class="arrive-time">Arrive : 19h</p>
              <p class="zip-code"><i class="fa-solid fa-location-dot"></i> ZIP Code: 60540</p>
            </div>
          </div>

          <div class="delivery">
            <h3 class="delivery-title">Choose a delivery option</h3>

            <div class="options">
              <div class="delivery-option">
                <input checked name="delivery-option-${matchingDish.id}" type="radio">
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

document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;