// What are the possible ways to create objects in JavaScript
// 1) Object constructor
const obj = new Object() //not recommended "Object constructor way"
obj.lyuboy = 1
obj.narsa = 'one'

//  2) Object's create method
const create = Object.create({})
create.name = 'ismtautl'

// 3) oject literal syntax: ;
let literal = {
  car: "BMW",
  color: "black",
  price: "45000 dollar"
}

// 4) function constructor
function Person(name) {
  // console.log(`my name is: ${name} `)
}
const construct = new Person('Garry')

// 5) Function constructor with prototype:
function Car() { }
Car.prototype.name = 'Garry'
let car = new Car()
// console.log(car.name)

// ES6 Class syntax:
class Model {
  constructor(name) {
    this.name = name
  }
}
let classs = new Model('BMW')
console.log(classs.name)



//What is a prototype chain

//  intance is an object that is created from class (in OOP)
// example for prototype chain
function Models(name, age) {
  this.name = name,
    this.age = age
}
Models.prototype.greet = function () {
  console.log('hello my name is' + this.name + 'and i am' + this.age + 'years old')
}

const proto = new Models('gigo', 56)
// console.log(Object.getPrototypeOf(proto));

// What is the difference between Call, Apply and Bind
// lets start with bind method ,bind method changes this context of function 
// example 


const cobalt = {
  model: "Coblat",
  year: 2020,
  info: function (model) {
    console.log(`my car is ${this.model}`)
    console.log(`my car is ${this.year}`)
    console.log(`model is :${model}`)
  }
}


const gentra = {
  model: 'gentra',
  year: 2021
}

// only thing bind does is 'CHANGING THIS CONTEXT' as we can see here due to bind function which helps to point this context ,we have used info method inside of gentra ,(we just pointed info method inside of cobalt ) so CALL and APPLY methods are also changes this context but only difference they call function automatically without putting any bracket a the end

// for bind method
cobalt.info.bind(gentra)('malibu')

// for call method

cobalt.info.call(gentra, 'Captiva')

// for apply method it gets array of elements as a second parametr
cobalt.info.apply(gentra, ['nexia'])

// uniry function gets one parametr only and returns it 
function uniryFunc(a) {
  return a + 10
}

// currying function =>gets multiple parametr and returns each of them separately with function getting each parametr separately in the function 

const normalFunc = (a, b, c) => console.log(a + b + c)
normalFunc(2, 3, 4, 5)

const curryingFuncton = (a) => (b) => (c) => console.log(a + b + c)
curryingFuncton(1)(2)(3)

// let vs var they are function and block scope

// example 

function sum(number) {
  if (number) {
    let age = 300;
    var year = 2035;
  }
  console.log(age)
  console.log(year)
}

// as we can see above we can't acces to the age due to block scope concept , var is function scope so we can access it but we can't access to the let because it is inside of if statement

// What is memoization

const cache = {}
const memoization = (value) => {
  if (value in cache) {
    console.log('fetching from cache')
    console.log(cache)
    return cache[value]
  } else {
    console.log('calculating');
    return cache[value] = value
  }
}
memoization(20)
memoization(20)
// first looks at cache ,if it is already calculated it does not recalculate it ,otherwise will calculate ,so it will improve performance of code


// promise
const promise = new Promise(
  (resolve) => {
    setTimeout(() => {
      resolve("I'm a Promise!");
    }, 100);
  },
  (reject) => {
    reject('rejected')
  }
);

promise.then((value) => console.log(value)).catch(err => console.log(err))

// javascript is single-thread language which means it executes one thing at a time , another words it executes current line of code before moving to the next one

// event delegation is process at which the parent of the elements which are going to have event listener attached to their container 