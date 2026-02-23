const products = [
  { id: 1, name: "laptop", price: 76000 },
  { id: 2, name: "mobile iphone ", price: 176000 },
  { id: 3, name: "mobile pocp ", price: 476000 },
  { id: 4, name: "mobile kajd", price: 1760300 },
];

//similar
// has some properties
class Product {
  constructor(name) {
    this.name = name;
  }
  country = "Bangladesh";
  speak(talk) {
    console.log(`talking about ${talk}`);
  }
}
const lenovo = new Product("go lenovo");
//console.log(lenovo);
//lenovo.speak("what to do");

class Teacher {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }
  lecture() {
    console.log("sir is teaching math");
  }
}
const pranto = new Teacher("Pranto sir", "Physics");
console.log(pranto);

const sakib = new Teacher("Sakib sir", "Math");
console.log(sakib);
