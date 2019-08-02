// JavaScript code that represents what is in the binder. You decide to price metals by the ounce.

const metals = [
  { metal: "Sterling Silver", price: 12.42 },
  { metal: "14K Gold", price: 736.4 },
  { metal: "24K Gold", price: 1258.9 },
  { metal: "Platinum", price: 795.45 },
  { metal: "Palladium", price: 1241.0 }
];

// A one carat stone, on average, costs more than a half carat stone. Again, two carat stones will cost significantly more.

const diamonds = [
  { carets: 0.5, price: 405 },
  { carets: 0.75, price: 782 },
  { carets: 1, price: 1470 },
  { carets: 1.5, price: 1997 },
  { carets: 2, price: 3638 }
];

const ringStyles = [
  { style: "Classic", price: 500 },
  { style: "Modern", price: 710 },
  { style: "Vintage", price: 965 }
];
// Now that you have some raw data, you need to combine the different materials together to produce a new ring.
// You decide that you need a function whose job is solely to take in all the different parameters and return a new object that represents the custom ring to be made, with a final price on it.

const createCustomRing = (style, carets, metal) => {
  return {
    style: style.style,
    carets: carets.carets,
    metal: metal.metal,
    price: metal.price + style.price + carets.price
  };
};

const newRingOrder = createCustomRing(ringStyles[1], diamonds[2], metals[2]);
// Then add order to customer's shopping cart
