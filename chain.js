// data access
const data = [{ id: 1, name: "abul", address: "kochu khet" }];
//console.log(data[0].name);
//console.log(data[0].id);
//console.log(data[0].address);
//
const products = {
  count: 5000,
  data: [
    { id: 1, name: "laptop", price: 76000 },
    { id: 2, name: "mobile", price: 176000 },
  ],
};
////onsole.log(products);
//console.log(products.count);
//console.log(products.data);
//console.log(products.data[0]);
//console.log(products.data[1]);
//console.log(products.data[1].name);

const user = {
  id: 5001,
  name: "pranto",
  address: {
    street: {
      first: "64/2 jashore",
      second: "poribag goli",
      third: " north end",
    },
    city: "dhaka",
  },
};
//console.log(user.id);
//console.log(user.name);
//console.log(user.address);
//console.log(user.address.street);
//console.log(user.address.city);
//console.log(user.address.street.first);
//console.log(user.address.street.second);
//console.log(user.address.street.third);

const user2 = {
  id: 5002,
  name: "pranto",
  address: {
    city: "Jashore",
    country: "Bangladesh",
  },
};
//console.log(user2);
//console.log(user2.id);
//console.log(user2.name);
//console.log(user2.address);
//console.log(user2.address.city);
//console.log(user2.address.country);
console.log(user2.address.street?.third);
