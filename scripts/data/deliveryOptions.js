export const deliveryOptions = [
  {
    id: "1",
    deliveryType: "Standard",
    priceCents: 0,
  },
  {
    id: "2",
    deliveryType: "Fast",
    priceCents: 499,
  },
  {
    id: "3",
    deliveryType: "Super Fast",
    priceCents: 999,
  },
];

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption = deliveryOptions.find(option => option.id === deliveryOptionId);

  return deliveryOption;
}