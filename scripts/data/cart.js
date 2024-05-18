export let cart;

loadFromStorage();

export function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem("cart"));

  if (!cart) {
    cart = [
      {
        dishId: "03080a0a-cea3-46c0-8069-0e66573cb727",
        quantity: 2,
      },
      {
        dishId: "8678ed17-02bc-4a68-914a-088527971c8b",
        quantity: 1,
      },
    ];
  }
}

function saveToStorage() {
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
    });
  }
  saveToStorage();
}