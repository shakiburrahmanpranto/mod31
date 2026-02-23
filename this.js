class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sleep() {
    console.log(`sleeping now ${this.name}`);
  }
  activity() {
    this.sleep();
  }
}
const kodom = new Person("kodom", 24);
console.log(kodom);
kodom.sleep();
const badam = new Person("badam", 33);
badam.sleep();

//vejal
