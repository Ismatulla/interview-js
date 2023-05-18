// // What are the possible ways to create objects in JavaScript
// // 1) Object constructor
// const obj = new Object() //not recommended "Object constructor way"
// obj.lyuboy = 1
// obj.narsa = 'one'

// //  2) Object's create method
// const create = Object.create({})
// create.name = 'ismtautl'

// // 3) oject literal syntax: ;
// let literal = {
//   car: "BMW",
//   color: "black",
//   price: "45000 dollar"
// }

// // 4) function constructor
// function Person(name) {
//   // console.log(`my name is: ${name} `)
// }
// const construct = new Person('Garry')

// // 5) Function constructor with prototype:
// function Car() { }
// Car.prototype.name = 'Garry'
// let car = new Car()
// // console.log(car.name)

// // ES6 Class syntax:
// class Model {
//   constructor(name) {
//     this.name = name
//   }
// }
// let classs = new Model('BMW')
// console.log(classs.name)



// //What is a prototype chain

// //  intance is an object that is created from class (in OOP)
// // example for prototype chain
// function Models(name, age) {
//   this.name = name,
//     this.age = age
// }
// Models.prototype.greet = function () {
//   console.log('hello my name is' + this.name + 'and i am' + this.age + 'years old')
// }

// const proto = new Models('gigo', 56)
// // console.log(Object.getPrototypeOf(proto));

// // What is the difference between Call, Apply and Bind
// // lets start with bind method ,bind method changes this context of function 
// // example 


// const cobalt = {
//   model: "Coblat",
//   year: 2020,
//   info: function (model) {
//     console.log(`my car is ${this.model}`)
//     console.log(`my car is ${this.year}`)
//     console.log(`model is :${model}`)
//   }
// }


// const gentra = {
//   model: 'gentra',
//   year: 2021
// }

// // only thing bind does is 'CHANGING THIS CONTEXT' as we can see here due to bind function which helps to point this context ,we have used info method inside of gentra ,(we just pointed info method inside of cobalt ) so CALL and APPLY methods are also changes this context but only difference they call function automatically without putting any bracket a the end

// // for bind method
// cobalt.info.bind(gentra)('malibu')

// // for call method

// cobalt.info.call(gentra, 'Captiva')

// // for apply method it gets array of elements as a second parametr
// cobalt.info.apply(gentra, ['nexia'])

// // uniry function gets one parametr only and returns it 
// function uniryFunc(a) {
//   return a + 10
// }

// // currying function =>gets multiple parametr and returns each of them separately with function getting each parametr separately in the function 

// const normalFunc = (a, b, c) => console.log(a + b + c)
// normalFunc(2, 3, 4, 5)

// const curryingFuncton = (a) => (b) => (c) => console.log(a + b + c)
// curryingFuncton(1)(2)(3)

// // let vs var they are function and block scope

// // example 

// function sum(number) {
//   if (number) {
//     let age = 300;
//     var year = 2035;
//   }
//   console.log(age)
//   console.log(year)
// }

// // as we can see above we can't acces to the age due to block scope concept , var is function scope so we can access it but we can't access to the let because it is inside of if statement

// // What is memoization

// const cache = {}
// const memoization = (value) => {
//   if (value in cache) {
//     console.log('fetching from cache')
//     console.log(cache)
//     return cache[value]
//   } else {
//     console.log('calculating');
//     return cache[value] = value
//   }
// }
// memoization(20)
// memoization(20)
// // first looks at cache ,if it is already calculated it does not recalculate it ,otherwise will calculate ,so it will improve performance of code


// // promise
// const promise = new Promise(
//   (resolve) => {
//     setTimeout(() => {
//       resolve("I'm a Promise!");
//     }, 100);
//   },
//   (reject) => {
//     reject('rejected')
//   }
// );

// // promise.then((value) => console.log(value)).catch(err => console.log(err))

// // javascript is single-thread language which means it executes one thing at a time , another words it executes current line of code before moving to the next one

// // event delegation is process at which the parent of the elements which are going to have event listener attached to their container 


// // how to check if string has particular substring

// // const str = 'ismatulla'
// // const substr = 'ismat'
// // console.log(str.includes(substr))
// // console.log(str.indexOf(substr))


// // how can we validate form -(it can be validated by using regex,but it is not recommended because javascript can be disabled in frontend)

// // great use case question !! 
// //  how to check if certain KEY i aailable in object or not;
// // const object = { a: 1, b: 2, c: 3, d: 4 };
// // // first approach
// // console.log("a" in object) // returns true !! great use case :)))
// // // 2nd approach
// // const check = object.hasOwnProperty('a')
// // console.log(check)

// // 128
// // What is arguments object;
// // function sum() {
// //   let total = 0;
// //   for (let i = 0; i < arguments.length; i++) {
// //     total += arguments[i]
// //   }
// //   console.log(typeof arguments)  // object but looks like array and can be accessible inside of any function 
// //   return total
// // }
// // console.log(sum(1, 2, 3, 4, 5))

// // how you can write multiline strng 
// // by using backslash
// // const name = 'ismatulla \
// // kuyliev\
// // kuvondik \
// // ugli'

// // 140  can we define properties in function =>yes we can ! because functions are also objects

// // function fn() { }
// // fn.names = 'Barry'
// // fn.sureName = "Garry"
// // console.log(fn.sureName)

// // 143 javascript break and continue difference inside of for loop 
// // for (let i = 0; i < 10; i++) {
// //   if (i === 5) {
// //     continue  // agar continue quysak 1,2,3,4,6,7,8,9,10 buladi
// //     break //  1,2,3,4 buladida toxtaydi chunki 5 ga teng bulgan xolatda tuxta deb aytildi
// //   }
// //   console.log(i)
// // }

// // What is tree shaking =>
// // Tree shaking is kind of method used to reduce size of code that is being sent through wireline ,for example if we create "Hello world " by SPA then it can be some MB , if we reduce up to some KB then performance will increase for sure ,it is implemented in Webpack bundler (if we see the code transpiled by Webpack , it is totally different from what we wrote which means it is kind of compressed to send over wireline so that it can be few hundred kbs :)



// debugging statement

// function debuggera(name) {
//   console.log(`name before debugging is ${name}`)
//   debugger
//   console.log(`name after debugging is ${name}`)
// }
// debuggera('soliha');

// How to get image width and height using javascript 

// let img = new Image();

// img.onload = function () {
//   console.log(this.width + 'X' + this.height)
// }
// img.src = 'http://www.google.com/intl/en_ALL/images/logo.gif'

// How to make SYNCHRONOUS HTTP REQUEST from javaScript

function getData(url) {
  const httpRequest = new XMLHttpRequest();
  httpRequest.open("GET", url, false)
  httpRequest.send(null);
  return httpRequest.responseText
}


// how to make asynchronous http request

function asynXML(url, callback) {
  let xml = new XMLHttpRequest()
  // so difference is here betwen async and sync
  xml.onreadystatechange = function () {
    if (xml.readyState == 4 && xml.status === 200) {
      callback(xml.responseText)
    }
    //==================================>
    xml.open("GET", url, true) //for asynchronous
    xml.send(null)
  }
}

// to change local time zone to another one 'toLocaleString' is used

// window has innerWidth and innerHeight props 

// rest pattern  gets numbers and puts them in array such as 1,2,3,4,5=>[1,2,3,4,5]

const arr = [1, 2, 3, 4, 5, 6, 7]
function arraySum(...arr) {
  console.log(arr)
}
arraySum(arr)

// spread is opposite it will get an array and unpacks it for example 

function spreadChec(x, y, z) {
  console.log(x + y + z)
}
const numbers = [1, 2, 3, 5, 6, 7]
spreadChec(...numbers)


// how to determine 2 values are the same or not using Object 

// we can use Object.is method 

const detectLang = Object.is({}, {});
console.log(detectLang)


// how to compy properties of one object from one to another 

const firstObject = { a: 1, b: 2 };
const secondObject = { c: 3, d: 4 }

// copying props of one object to another one 
const allMerged = Object.assign(firstObject, secondObject)
console.log(allMerged)
console.log(firstObject); // here first object already changed because we inserted second object to first object so it already changed to {a:1,b:2,c:3,d:4}
console.log(secondObject) // bu uzgarmaydi chunki bu birinchi objectno ichiga qushib yuborildi va birinchi object modify buldi , lekin 2-object bir xil qoldi {c:3,d:4}

// difference between Object.seal() and Object.freeze() method
// you may change property in object.seal whereas you can't change anything with Object.freeze() and also in both method you cant add new properties to the object example const obj={a:1,b:2} Object.freeze(obj)=> obj.a=2 does not change anything Object.seal(obj) obj.a=2 DOES change a but in both cases we can't add props to object

// How do you get key and values of object 

// const obj = {
//   a: 'Good morning',
//   b: 100
// }
// console.log(Object.entries(obj))
// for (let [key, value] of Object.entries(obj)) {
//   console.log(key, value)
// }

//  What is purpose of uneval()
//  uneval() gives string representation of any value for example 
const num = 1; uneval(num) = '1'; // function name(){};  uneval(name)=>"function name(){}" 

// how do you print current page content (it is linke printing the page with printenr ) =>window.print() used;

var msg = uneval(function greeting() {
  console.log("Hello, Good morning");
});
var greeting = eval(msg);
greeting(); // returns "Hello, Good morning"