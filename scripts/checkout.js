import { activeHeaderMenu } from './utils/headerAndFooter.js';
import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { calculateCartQuantity } from './data/cart.js';

activeHeaderMenu();

export function updateCartLabel() {
  const cartLabel = document.querySelector(".grey");
  let quantity = calculateCartQuantity();

  cartLabel.innerHTML = `&#40;${quantity} dish${quantity > 1 ? "es" : ""}&#41;`;
}

updateCartLabel();
renderOrderSummary();
renderPaymentSummary();