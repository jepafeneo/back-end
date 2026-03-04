export const validateStock = (stock) => {
  //   return !(stock == undefined || isNaN(stock) || stock < 0);

  if (stock == undefined || isNaN(stock) || stock < 0) {
    return false;
  } else {
    return true;
  }
};

export const validatePrice = (price) => {
  return typeof price == "number" && price >= 0;
  
  //   if (typeof price == "number" && price >= 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
};
