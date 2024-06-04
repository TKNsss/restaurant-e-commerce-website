import {
  activeHeaderMenu,
  activeFooterContent,
} from "./utils/headerAndFooter.js";
import { dishes } from "./data/dishes.js";
import { formatCurrency } from "./utils/money.js";
import { calculateCartQuantity, addToCart } from './data/cart.js';

activeHeaderMenu();
activeFooterContent();

const sections = {
  pizza: document.querySelector('.js-food-menu-row[id="pizza"]'),
  burger: document.querySelector('.js-food-menu-row[id="burger"]'),
  tradition: document.querySelector('.js-food-menu-row[id="tradition"]'),
  beverage: document.querySelector('.js-food-menu-row[id="beverage"]'),
  alcohol: document.querySelector('.js-food-menu-row[id="alcohol"]'),
  dessert: document.querySelector('.js-food-menu-row[id="dessert"]'),
  japan: document.querySelector('.js-food-menu-row[id="japan"]'),
};

dishes.forEach((dish) => {
  let span = document.createElement("span");
  let h4 = document.createElement("h4");

  if (dish.sale) {
    span.innerText = "15% off";
    span.classList.add("sale");
    h4.innerHTML = `
      <strike>$${formatCurrency(dish.oldPriceCents)}</strike>
    `;
    h4.classList.add("product-old-price");
  } 

  if (dish.new) {
    span.innerText = "new";
    span.classList.add("new");
  }

  const dishHTML = `
    <div class="single-product">
      <div class="part-1">
        <div class="food-menu__img-wrapper">
          <img class="product-img" src="${dish.image}" alt="${dish.imgName}">
        </div>

        ${span.outerHTML}

        <ul>
          <li><a class="js-add-to-cart" data-dish-id="${dish.id}" href="#${
            dish.id
          }}"><i class="fas fa-shopping-cart"></i></a></li>
          <li><a href="#"><i class="fas fa-heart heart-icon"></i></a></li>
          <li><a class="js-add-to-cart" data-dish-id="${dish.id}"href="#${
            dish.id
          }"><i class="fas fa-plus plus-icon"></i></a></li>
          <li><a target="_blank" href="${
            dish.image
          }"><i class="fas fa-expand expand-icon"></i></a></li>
        </ul>
      </div>

      <div class="part-2">
        <h3 class="product-title">${dish.name}</h3>
        <p class="intro">${!dish.introLine ? '' : dish.introLine}</p>
        ${h4.outerHTML}
        <h4 class="product-price">$${formatCurrency(dish.priceCents)}</h4>
      </div>
    </div>
  `;

  sections[dish.category].innerHTML += dishHTML;
});

function updateCartQuantity() {
  const cartQuantity = calculateCartQuantity();

  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}

updateCartQuantity();

document.querySelectorAll(".js-add-to-cart").forEach(link => { 
  link.addEventListener("click", () => {
    const { dishId } = link.dataset;

    addToCart(dishId);
    updateCartQuantity();
  });
});