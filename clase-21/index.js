// map

// const numbers = [4, 9, 16, 25];
// const newArray = numbers.map((num) => num + 1);

// // const newArr = numbers.map(Math.sqrt);

// console.log(numbers, newArray);

// ---

// const cart = {};

// cart.user = "69b";

// cart.products = [
//   { id: "69b01", quantity: 2 },
//   { id: "69b02", quantity: 1 },
//   { id: "69b05", quantity: 4 },
// ];

// const ids = cart.products.map((item) => item.id);

// console.log(ids);

// ---

const products = [
  { id: "69b01", name: "Product 1", price: 10 },
  { id: "69b02", name: "Product 2", price: 20 },
  { id: "69b03", name: "Product 3", price: 30 },
  { id: "69b04", name: "Product 4", price: 40 },
  { id: "69b05", name: "Product 5", price: 50 },
];

// const nuevosPrecios = products.map(item => {});

// const nuevosPrecios = products.map((item) => {
//   item.price += 5;
//   return item;
// });

// const nuevosPrecios = products.map((producto) => {
//   return {
//     ...producto,
//     price: producto.price + 5,
//   };
// });

const nuevosPrecios = products.map((item) => ({
  ...item,
  price: item.price + 5,
  stock: 1,
}));
console.log(products, nuevosPrecios);

// {id: "69b01", name: "Product 1", price: 10, price: item.price + 5, stock: 1,}

// [
//   { id: "69b01", name: "Product 1", price: 15 },
//   { id: "69b02", name: "Product 2", price: 25 },
//   { id: "69b03", name: "Product 3", price: 35 },
//   { id: "69b04", name: "Product 4", price: 45 },
//   { id: "69b05", name: "Product 5", price: 55 },
// ];
