const products = [
  { id: 1, name: "laptop", price: 76000 },
  { id: 2, name: "mobile iphone ", price: 176000 },
  { id: 3, name: "mobile pocp ", price: 476000 },
  { id: 4, name: "mobile kajd", price: 1760300 },
];

//map
//const names = products.map((product) => product.name);
//console.log(names);
const prices = products.map((product) => product.price);
//console.log(prices);

//filter
const expensive = products.filter((p) => p.price < 150000);
//console.log(expensive);

//find
