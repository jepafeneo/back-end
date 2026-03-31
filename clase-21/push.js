const productos = [];

// productos.push({ id: "69b01", name: "Product 1", price: 10 });

const newProduct = {
  id: "69b02",
  name: "Product 2",
  price: 20,
};

// productos.push(newProduct);

// console.log(productos);

// Reglas:
// - si el producto ya existe → no agregar
// - si no existe → agregar

// function addProduct(list, product) {}

// const todosLosProductos = addProduct(productos, newProduct);

console.log(productos);

// function addProduct(list, product) {
//   const busqueda = list.find((item) => item.id == product.id);

//   if (!busqueda) {
//     list.push(product);
//   }

//   return list;
// }

// const todosLosProductos = addProduct(productos, newProduct);
// console.log(todosLosProductos);

// function addProduct(list, product) {
//   const exists = list.some((p) => p.id === product.id);

//   if (exists) {
//     return list;
//   }

//   list.push(product);

//   return list;
// }

const existsId = (list, id) => list.some((item) => item.id == id);

function addProduct(list, product) {
  const exists = existsId(list, product.id);

  if (!exists) {
    list.push(product);
  }

  return list;
}

let todosLosProductos = addProduct(productos, newProduct);
console.log(todosLosProductos);

todosLosProductos = addProduct(productos, newProduct);
console.log(todosLosProductos);
