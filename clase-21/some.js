// Array.prototype.some()

// const ids = ["69b3a2", "d9b1d7", "f0e1b5", "c4ca42", "45c48c"];

// // const existe = ids.some((id) => id == "f0edb5");
// // console.log(existe);

// // function existsId(list, id) {
// //   const existe = list.some((item) => item == id);
// //   return existe;
// // }

// // function existsId(list, id) {
// //   return list.some((item) => item == id);
// // }

// // const existsId = function (list, id) {
// //   return list.some((item) => item == id);
// // }

// const existsId = (list, id) => list.some((item) => item == id);

// const existe = existsId(ids, "f0e1b5");

// console.log(existe);

// ---

const cart = {};

cart.user = "69b";

cart.products = [
  { product: "69b01", quantity: 2 },
  { product: "69b02", quantity: 1 },
  { product: "69b05", quantity: 4 },
];

// console.log(cart);

// {
//   user: '69b',
//   products: [
//     { product: '69b01', quantity: 2 },
//     { product: '69b02', quantity: 1 },
//     { product: '69b05', quantity: 4 }
//   ]
// }

// const existsId = (list, id) => list.some((item) => item == id);

const existsId = (list, id) => list.some((item) => item.product == id);

const existe = existsId(cart.products, "69b02");

console.log(existe);
