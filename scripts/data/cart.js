import { getDeliveryOption } from "./deliveryOptions.js";

export let cart;

loadFromStorage();

export function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem("cart"));

  if (!cart) {
    cart = [
      {
        dishId: "03080a0a-cea3-46c0-8069-0e66573cb727",
        quantity: 2,
        deliveryOptionId: "1",
      },
      {
        dishId: "8678ed17-02bc-4a68-914a-088527971c8b",
        quantity: 1,
        deliveryOptionId: "2",
      },
    ];
  }
}

export function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function calculateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach(cartItem => {
    cartQuantity += cartItem.quantity;
  });
  return cartQuantity;
}

export function addToCart(dishId) {
  const matchingItem = cart.find(cartItem => cartItem.dishId === dishId);

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      dishId,
      quantity: 1,
      deliveryOptionId: "1",
    });
  }
  saveToStorage();
}

export function updateCartQuantity(dishId, quantity) {
  const cartItem = cart.find((item) => item.dishId === dishId);

  if (cartItem) {
    cartItem.quantity = quantity;
  }
  saveToStorage();
}

export function removeFromCart(dishId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.dishId !== dishId) {
      newCart.push(cartItem);
    }
  });
  cart = newCart;
  saveToStorage();
}

export function updateDeliveryOption(dishId, deliveryOptionId) {
  const matchingItem = cart.find(cartItem => dishId === cartItem.dishId);

  if (!matchingItem) {
    return;
  }

  const deliveryOption = getDeliveryOption(deliveryOptionId);

  if (!deliveryOption) {
    return;
  }
  matchingItem.deliveryOptionId = deliveryOptionId;
  saveToStorage();
}