import { getDish } from "../data/dishes.js";
import { calculateCartQuantity, cart } from "../data/cart.js";
import { getDeliveryOption } from "../data/deliveryOptions.js";
import { formatCurrency } from "../utils/money.js";

export function renderPaymentSummary() {
  let dishPriceCents = 0;
  let shippingPriceCents = 0;

  cart.forEach((cartItem) => {
    const dish = getDish(cartItem.dishId);
    dishPriceCents += dish.priceCents * cartItem.quantity;

    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shippingPriceCents += deliveryOption.priceCents;
  });

  const totalBeforeTaxCents = dishPriceCents + shippingPriceCents;
  const taxCents = totalBeforeTaxCents * 0.1;
  const totalCents = totalBeforeTaxCents + taxCents;

  let cartQuantity = calculateCartQuantity();

  const paymentSummaryHTML = `
    <div class="cart-summary"><i class="fa-solid fa-lock"></i> Cart Summary</div>

    <div class="payment-summary-top">
      <div class="payment-summary-row">
        <p>Dishes &#40;<span class="cart-total-money">${cartQuantity}</span>&#41;:</p>
        <p class="payment-summary-money">$${formatCurrency(dishPriceCents)}</p>
      </div>

      <div class="payment-summary-row">
        <p>Shipping & Handling:</p>
        <p class="payment-summary-money">$${formatCurrency(
          shippingPriceCents
        )}</p>
      </div>

      <div class="payment-summary-row sub-total-row">
        <p>Total before tax:</p>
        <p class="payment-summary-money">$${formatCurrency(
          totalBeforeTaxCents
        )}</p>
      </div>

      <div class="payment-summary-row">
        <p>Estimated tax (10%):</p>
        <p class="payment-summary-money">$${formatCurrency(taxCents)}</p>
      </div>

      <div class="payment-summary-row total-row">
        <p>Order total:</p>
        <p class="payment-summary-money">$${formatCurrency(totalCents)}</p>
      </div>
    </div>

    <div class="payment-summary-middle">
      <h4 class="promotion-title">Apply a Promotion Code</h4>
      <p class="promotion-note">Remove any spaces or dashes before hitting apply.</p>
      <div class="input-wrapper">
        <input id="promotion-input" type="text" class="promotion-input">
        <button class="promotion-apply-btn">Apply</button>
      </div>
      <div class="checkout-btn">
        <a href="order.html" class="checkout-now-btn">checkout now</a>
        <p class="agree-privacy">By continuing to Check out, you are agreeing to our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a></p>
      </div>
    </div>

    <div class="payment-summary-bottom">
      <p class="other-checkout">Or use other checkout methods:</p>
      <button class="paypal-btn"><img class="paypal" src="./images/paypal.png" alt="paypal-logo"></button>
      <button class="venmo-btn"><img class="venmo" src="./images/venmo.png" alt="venmo-logo"></button>
    </div>
  `;

  document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;
}