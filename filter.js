const players = [62, 44, 99, 88, 67, 55];

//const selected = players.filter((p) => p > 60);
const selectedOdd = players.filter((p) => p % 2 === 1);
const selectedEven = players.filter((p) => p % 2 === 0);
console.log("odd", selectedOdd);
console.log("even ", selectedEven);
