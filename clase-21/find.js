const products = [
  { id: "69b01", name: "Product 1", price: 10 },
  { id: "69b02", name: "Product 2", price: 20 },
  { id: "69b03", name: "Product 3", price: 30 },
];

// const product = products.find((p) => (p.id = "69b02"));
// console.log(product);

const getElementById = (list, id) => list.find((item) => item.id == id);

const existe = getElementById(products, "69b02");

console.log(existe);
