export function getDish(dishId) {
  let matchingDish;

  dishes.forEach((dish) => {
    if (dish.id === dishId) {
      matchingDish = dish;
    }
  });
  return matchingDish;
}

export const dishes = [
  {
    id: "702ceae9-6c9b-43b1-b718-96064fe08734",
    image: "images/foods/Burrata-Pistachio-White-Pizza.jpg",
    imgName: "Burrata-Pistachio-White-Pizza",
    name: "Burrata Pistachio White Pizza",
    priceCents: 6799,
    oldPriceCents: 7999,
    introLine:
      "Made with plenty of burrata cheese and topped with red onions, arugula and pistachios.",
    sale: true,
    new: false,
    category: "pizza",
  },
  {
    id: "139ccda9-b4a6-49d0-8ebc-eb52ee6c4f2c",
    image: "./images/foods/dough-pizza.jpg",
    imgName: "dough-pizza",
    name: "Dough Pizza",
    priceCents: 2999,
    introLine:
      "Puffy edges with a chewy crumb, enough structure so you can pick up slices rather than being a sloppy mess.",
    sale: false,
    new: true,
    category: "pizza",
  },
  {
    id: "8f825dcf-291d-47d7-8fb8-413630acd5df",
    image: "./images/foods/Fettuccine-Pasta-Pizza.jpg",
    imgName: "Fettuccine-Pasta-Pizza",
    name: "Fettuccine Pasta Pizza",
    priceCents: 6799,
    oldPriceCents: 7999,
    introLine:
      "Fettuccine pasta pizza made with K&N’s Tikka Toppingz n’ Fillingz is something new for pizza lovers.",
    sale: true,
    new: false,
    category: "pizza",
  },
  {
    id: "7437e67c-72bb-4482-b9b0-2847795b4ed8",
    image: "./images/foods/french-fried-pizza.jpg",
    imgName: "french-fried-pizza",
    name: "French-fried Pizza",
    priceCents: 5099,
    oldPriceCents: 5999,
    introLine:
      "Topped with creamy luscious cheese sauce this fries pizza recipe is a delicious in taste as it looks.",
    sale: true,
    new: false,
    category: "pizza",
  },
  {
    id: "a228801b-3178-45bb-b5b5-c302df40b9c4",
    image: "./images/foods/Paneer-Tikka-Pizza.jpg",
    imgName: "Paneer-Tikka-Pizza",
    name: "Paneer Tikka Pizza",
    priceCents: 4999,
    introLine:
      "Paneer tikka pizza is a kid-friendly dinner that is easy-to-make, flavorsome, and extremely delicious.",
    sale: false,
    new: false,
    category: "pizza",
  },
  {
    id: "06a13f7a-c3b7-496a-b6ef-96fba2fdf82a",
    image: "./images/foods/pepperoni-burata-pizza.jpg",
    imgName: "pepperoni-burata-pizza",
    name: "Pepperoni Burata Pizza",
    priceCents: 5999,
    introLine:
      "Pepperoni and Burrata Pizza with Pesto; flavorful and delicious pizza that you will love.",
    sale: false,
    new: true,
    category: "pizza",
  },
  {
    id: "f87fd35a-a8de-4eb3-803d-6eedea2ce8d3",
    image: "./images/foods/Classic-Grilled-Cheeseburger.jpg",
    imgName: "Classic-Grilled-Cheeseburger",
    name: "Classic Grilled Cheeseburger",
    priceCents: 1699,
    oldPriceCents: 1999,
    introLine:
      "These juicy delicious homemade burgers are perfect on the grill or stovetop on your grill pan or skillet.",
    sale: true,
    new: false,
    category: "burger",
  },
  {
    id: "31d6caed-f4b8-4dd8-a7e7-8693b0636e83",
    image: "./images/foods/Halloumi-Burgers.jpg",
    imgName: "Halloumi-Burgers",
    name: "Halloumi Burger",
    priceCents: 2549,
    oldPriceCents: 2999,
    introLine:
      "Halloumi Burgers with juicy mushrooms and a sticky sweet sauce! These burgers are packed with flavour!",
    sale: true,
    new: false,
    category: "burger",
  },
  {
    id: "f9d311de-cb8b-4080-a17b-ff50efdb9aa4",
    image: "./images/foods/Korean-Style-Shrimp-Burger.jpg",
    imgName: "Korean-Style-Shrimp-Burger",
    name: "Korean-Style Shrimp Burger",
    priceCents: 2999,
    introLine:
      "Crispy shrimp patties and melted cheese wrapped around buttery brioche buns to give a burst of flavor in every bite.",
    sale: false,
    new: true,
    category: "burger",
  },
  {
    id: "525ad344-a0b2-40a4-8087-fe32c562cedc",
    image:
      "./images/foods/Mushroom-Emmental-Wagyu-Burgers-with-Herb-Spiked-Mayo-Dennis-Prescott.jpg",
    imgName:
      "Mushroom-Emmental-Wagyu-Burgers-with-Herb-Spiked-Mayo-Dennis-Prescott",
    name: "Mushroom + Wagyu-Burger",
    priceCents: 2549,
    oldPriceCents: 2999,
    introLine:
      "Mushroom Emmental Wagyu Burgers with Herb-Spiked Mayo. Absolutely bursting with flavour!",
    sale: true,
    new: false,
    category: "burger",
  },
  {
    id: "43475ca4-bf46-41cc-a8cd-a6f18f0fb3d1",
    image: "./images/foods/Roasted-Tomato-Burgers-with-Garlic-Mayo-&-Gouda.jpg",
    imgName: "Roasted-Tomato-Burgers-with-Garlic-Mayo-&-Gouda",
    name: "Roasted Tomato Burger",
    priceCents: 2549,
    oldPriceCents: 2999,
    introLine:
      "Juicy grilled beef burgers with slow-roasted tomatoes, creamy garlic mayo, melted gouda cheese...",
    sale: true,
    new: false,
    category: "burger",
  },
  {
    id: "503db2a5-0af7-4f50-900e-5c0fad800ee7",
    image: "./images/foods/banh-mi.jpg",
    imgName: "banh-mi",
    name: "Banh mi",
    priceCents: 599,
    introLine:
      "A traditional Vietnamese breakfast. It is mixed with Pork, veggies, herbs, and condiments on a crusty baguette!",
    sale: false,
    new: false,
    category: "tradition",
  },
  {
    id: "8678ed17-02bc-4a68-914a-088527971c8b",
    image: "./images/foods/bun-cha.jpg",
    imgName: "bun-cha",
    name: "Bun cha",
    priceCents: 1099,
    introLine:
      "Bun cha &#40;Vermicelli with grilled pork and fresh herbs&#41; delights, with its seductive taste and aroma.",
    sale: false,
    new: false,
    category: "tradition",
  },
  {
    id: "f9b52571-35f9-4c73-86e3-f50a99f2ce5d",
    image: "./images/foods/goi-cuon.jpg",
    imgName: "goi-cuon",
    name: "Goi cuon",
    priceCents: 1099,
    introLine:
      "Fresh Authentic Vietnamese spring rolls made with shrimp, pork belly, lots of fresh herbs and vegetables.",
    sale: false,
    new: false,
    category: "tradition",
  },
  {
    id: "03080a0a-cea3-46c0-8069-0e66573cb727",
    image: "./images/foods/pho.jpg",
    imgName: "pho",
    name: "Pho",
    priceCents: 1499,
    introLine:
      "A harmony of steaming broth, tender beef, and delicate rice noodles, adorned with fresh herbs.",
    sale: false,
    new: true,
    category: "tradition",
  },
  {
    id: "708f9084-2285-4ff9-9cd0-e8c1fb5bd194",
    image: "./images/foods/bun-rieu.jpg",
    imgName: "bun-rieu",
    name: "Bun rieu",
    priceCents: 1499,
    introLine:
      "Made with tomato pork broth and topped with crab meatballs, fried tofu, and a handful of herbs.",
    sale: false,
    new: true,
    category: "tradition",
  },
  {
    id: "e9bea5bf-9b49-46b6-9af3-85e7d516ccfb",
    image: "./images/foods/pure-water.jpg",
    imgName: "pure-water",
    name: "Pure Water",
    priceCents: 99,
    sale: false,
    new: false,
    category: "beverage",
  },
  {
    id: "43f10c5d-6e34-477d-a805-0cbb37e87a9b",
    image: "./images/foods/cocacola.jpg",
    imgName: "cocacola",
    name: "Cocacola",
    priceCents: 199,
    sale: false,
    new: false,
    category: "beverage",
  },
  {
    id: "f0fe8607-1a30-42b3-9da4-d066b0811c51",
    image: "./images/foods/monster.jpg",
    imgName: "monster",
    name: "Monster",
    priceCents: 199,
    sale: false,
    new: false,
    category: "beverage",
  },
  {
    id: "f1832593-af00-4de4-bc00-77293dbaf5c5",
    image: "./images/foods/orange-juice.jpg",
    imgName: "orange-juice",
    name: "Orange Juice",
    priceCents: 299,
    sale: false,
    new: false,
    category: "beverage",
  },
  {
    id: "d550b5f8-a3fc-44a0-a148-64d1bedf8e76",
    image: "./images/foods/Aviation-Gin.jpg",
    imgName: "Aviation-Gin",
    name: "Aviation Gin",
    priceCents: 4999,
    sale: false,
    new: false,
    category: "alcohol",
  },
  {
    id: "681c0a2f-0e25-4cd1-b26d-84b09aeb9a86",
    image: "./images/foods/Bombay-Sapphire-Gin-Mule.jpg",
    imgName: "Bombay-Sapphire-Gin-Mule",
    name: "Bombay Sapphire Gin Mule",
    priceCents: 4999,
    sale: false,
    new: false,
    category: "alcohol",
  },
  {
    id: "c05bc5c2-41b6-4f1f-85ad-9eb6e7db66dc",
    image: "./images/foods/Tanqueray-gin.jpg",
    imgName: "Tanqueray-gin",
    name: "Tanqueray Gin",
    priceCents: 4999,
    sale: false,
    new: true,
    category: "alcohol",
  },
  {
    id: "a0d0bfb0-5d23-4787-aa60-056ea2f70149",
    image: "./images/foods/8-Unique-Paletas.jpg",
    imgName: "8-Unique-Paletas",
    name: "8 Unique Paletas",
    priceCents: 399,
    introLine: "Fantastic paletas bar featuring 8 unique flavor combinations",
    sale: false,
    new: false,
    category: "dessert",
  },
  {
    id: "0f815308-34b8-42e8-b7f4-53ba9d6b3dbc",
    image: "./images/foods/Mango-Tiramisu.jpg",
    imgName: "Mango-Tiramisu",
    name: "Mango Tiramisu",
    priceCents: 799,
    introLine: `It's made with mango juice and rum-soaked ladyfingers, mascarpone cream, and fresh mangoes.`,
    sale: false,
    new: false,
    category: "dessert",
  },
  {
    id: "1d407450-38a6-4e6f-8905-822f6b96fb83",
    image: "./images/foods/New-York-Cheesecake.jpg",
    imgName: "New-York-Cheesecake",
    name: "New York Cheesecake",
    priceCents: 999,
    introLine: `A dense, rich and creamy New York cheesecake that's easy and requires no water bath to bake!`,
    sale: false,
    new: false,
    category: "dessert",
  },
  {
    id: "9a58acf8-a049-4fd0-9bcc-75bdb0b380b0",
    image: "./images/foods/Burger-Gyoza.jpg",
    imgName: "Burger-Gyoza",
    name: "Burger Gyoza",
    priceCents: 1599,
    introLine: `By mixing with ground beef, breadcrumbs, tapioca starch, flour, cheese, eggs, garlic powder, meat fat, breadcrumbs`,
    sale: false,
    new: false,
    category: "japan",
  },
  {
    id: "a0e3232b-fd15-459f-a11f-7549439c28bc",
    image: "./images/foods/Karaage.jpg",
    imgName: "Karaage",
    name: "Karaage",
    priceCents: 1104,
    oldPriceCents: 1299,
    introLine: `Made with Garlic powder, ground garlic, chicken, eggs, tapioca starch, flour, eggs, ginger, shoyu, sake`,
    sale: true,
    new: false,
    category: "japan",
  },
];
