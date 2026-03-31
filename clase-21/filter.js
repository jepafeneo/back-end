const products = [
  { id: "69b01", name: "Product 1", price: 10 },
  { id: "69b02", name: "Product 2", price: 20 },
  { id: "69b03", name: "Product 3", price: 30 },
  { id: "69b04", name: "Product 4", price: 40 },
  { id: "69b05", name: "Product 5", price: 50 },
];

// const filtrados = products.filter((p) => p.price <= 30);

// console.log(products, filtrados);

// const todosMenosUno = products.filter()

// const todosMenosUno = products.filter(p => p.name !== "Product 3");
// console.log(todosMenosUno);

//  { id: "69b03", name: "Product 3", price: 30 },
// const todosMenosUno = products.filter((p) => p.price != "30");
// // 30 != 30: false
// // number != number: false

// // Valor distinto: false
// // Tipo de datos distinto = true
// console.log(todosMenosUno);

// function removeById(list, id) {

// }

// const todosMenosUno = removeById(products, "69b03")

// const removeById = (list, id) => list.filter((item) => item.id != id);
// const todosMenosUno = removeById(products, "69b03");

// console.log(todosMenosUno);

// function removeById(list, id) {
//   const filtrados = list.filter((item) => item.id != id);
//   return filtrados;
// }

function removeById(list, id) {
  const filtered = list.filter((product) => product.id != id);
  return filtered;
}

const todosMenosUno = removeById(products, "69b03");
console.log(todosMenosUno);
