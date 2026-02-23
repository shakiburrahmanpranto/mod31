///const numbers = [33, 849, 3020, 902];
///
///const doubled = [];
///for (const num of numbers) {
///  const double = num * 2;
///  doubled.push(double);
///}
///console.log(doubled);
///

//const numbers = [8938, 7378, 83];

///function doubleIt(num) {
///  console.log("num now", num);
///  return num * 2;
///}
///const result = numbers.map(doubleIt);
///console.log(result);
//const doubled = [];
//for (const num of numbers) {
//  const double = num * 2;
//  doubled.push(double);
//}
//console.log(doubled);

//const numbers = [8938, 7378, 83];
//
//function doubleIt(num) {
//  console.log("num now", num);
//  return num * 2;
//}
//const result = numbers.map(doubleIt);
//console.log(result);

const numbers = [8938, 7378, 83];

function doubleNum(num) {
  // console.log("now ", num);
  return num * 2;
}
const result = numbers.map(doubleNum);
//console.log(result);

const numbers2 = [8938, 7378, 83];

const double = (n) => n * 2;

const output = numbers2.map(double);
console.log(output);
