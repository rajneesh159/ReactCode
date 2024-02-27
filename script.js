/* const student = {
  aman: {
    name: "Aman",
    age: 34,
    caste: "Sc"
  },
  aryan: {
    name: "Aryan",
    age: 45,
    caste: "General"
  }

} */

/* name = "Rajneesh"
console.log(name.length);
console.log(name[0]);
console.log(name[name.length - 1]) */

/* let color = "red"
switch (color) {
  case "red": console.log("Stop");
    break;

  case "yelllow": conslog.log("slow down")
    break;

  default: console.log("Go");
    break;
} */

/* let size = prompt("enter the size");

if (size == "xl") {
  console.log("You have to pay 250");
}
if (size == "l") {
  console.log("You have to pay 200");
} else if (size == "m") {
  console.log("You have to pay 100");
} else if (size == "s") {
  console.log("You have to pay 100");
} */


/* let day = prompt("Enter the day")

switch (day) {
  case "1": console.log("Sunday");
    break;
  case "2": console.log("Monday");
    break;
  case "3": console.log("Tuesday");
    break;
  case "4": console.log("wednesday");
    break;
  case "5": console.log("Thursdayy");
    break;
  case "6": console.log("fridayy");
    break;
  case "7": console.log("saturday");
    break;

}
 */


/* let number = prompt("ENter the number")

if (number % 10 == 0) {
  console.log("good");
} else {
  console.log("bad")
} */

/* let age = prompt("Enter the age");
let name = prompt("Enter the name");

alert(`${name} is ${age} years old`);
 */

/* let str = prompt("Enter the string")

if ((str[0] == "A" || str[0] == "a") && str.length > 5) {
  console.log("Golden String");
}

else {
  console.log("Not a golden string")
}
 */

/* let msg = prompt("Enrer the string");
console.log(msg.trim().toUpperCase());
 */

/* let start = ["january", "Febuary", "March", "August"]

start.shift()
start.shift()
start.unshift("june")
start.unshift("july")
console.log(start);

console.log(Math.floor(Math.random() * 100) + 1)
let num = prompt("Enter the element")
let arr = [7, 9, 0, -2];
console.log(arr.slice(0, 3))
console.log(arr.slice(1))

if (arr.indexOf(num) != -1) {
 console.log("Element  exist in the array")
}
else {
 console.log(" not exist")
} */



/* let str = prompt("Enter the string") */
/* if (str.length == 0) {
  console.log("Empty is string")
}

else {
  console.log("not empty")
} */

/*
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
} */

/* const max = prompt("enter the max the number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number")

while (true) {
  if (guess == "quit") {
    console.log("You quit the game");
    break;
  }

  else if (guess == random) {
    console.log("congratulations")
    break;
  }
  else if (guess > random) {
    guess = prompt("Guess is too high")
  }
  else if (guess < random) {
    guess = prompt("guess is too low")
  }
  else {
    guess = prompt("Guess the number");
  }

}
 */

/* let dice = prompt("Roll the dice")

while (true) {
  let num = Math.floor(Math.random() * 6) + 1;

  console.log(num)

  if (dice == quit) {
    console.log("You exit the game")
    break;
  }
} */


/* let car = {
  name: "Scorpio",
  model: "SUV800",
  color: "Black"
}
 */

/* function avg(a, b, c) {
  console.log((a + b + c) / 3)
}

function table(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(n * i)
  }
}

function sum(n) {
  let add = 0
  for (let i = 0; i <= n; i++) {
    add += i;
  }
  return add
}
 */

/* let str = ["good", "better", "best"];

function concat(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    res = res + str[i];
  }
  return res;
}

let num = [2, 4, 5, -2, 59, 45, 65]
let dig = 10;
function larger(num, dig) {
  for (let i = 0; i < num.length; i++) {
    if (dig < num[i]) {
      console.log(num[i]);
    }
  }
}
 */

/* console.log("hi")

setTimeout(() => {
  console.log("Greta place tool")
}, 4000);

console.log("Goorr")
 */

/* const squ = (n) => {
  return n * n
}

let id = setInterval(() => {
  console.log("Hello world")
}, 2000) */

/* const isEven = (n) => {
  if (n % 2 == 0) {
    console.log("Even number")
  }
  else {
    console.log("Odd number")
  }
}

const email = {
  name: "Raj",
  password: "123"
}

const newemail = { ...email, id: 34 };

let arr = [22, 34, 56, 78]
let obj = { ...arr }
 */


/* function min(...args) {
  return args.reduce((min, el) => {
    if (min > el) {
      return el;
    }
    else {
      return min;
    }
  })
}

let nums = [45, 18, 7, 24, 46]
let [hitman, king, ...args] = nums;
console.log(hitman, king, ...args)

console.log(nums.map((el) => el + 5))

let array = ["a", "ab", "abc"]
console.log(array.map((el) => el.toUpperCase())); */


//DOM
/*
let para = document.createElement("p");
para.innerText = "Hey I am red"
document.querySelector("body").append(para)
para.classList.add("red")

let head = document.createElement("h3");
head.innerText = "I am blue h3";
document.querySelector("body").append(head)
head.classList.add("blue")

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "I am a div";
para2.innerText = "I am para2"

div.append(h1);
div.append(para2)

document.querySelector("body").append(div)
div.classList.add("pink") */

//Assignment

/* let input = document.createElement("input")
let button = document.createElement("button")

button.innerText = "Click me"
input.placeholder = "username"


document.querySelector("body").append(input)
document.querySelector("body").append(button)

button.setAttribute("id", "btn")

button.classList.add("white")

let h1 = document.createElement("h1");
h1.innerText = "DOM Practice"

document.querySelector("body").append(h1)
h1.classList.add("purple")

let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practice"

document.querySelector("body").append(p) */


/* RANDOM COLOR GENERATOR */

/* let btn = document.querySelector("button")

btn.addEventListener("click", () => {
  let h3 = document.querySelector("h3")
  h3.innerText = getRandom()

  let div = document.querySelector("div")
  div.style.backgroundColor = getRandom()
  console.log("color updated")
})

function getRandom() {
  let red = Math.floor(Math.random() * 255)
  let green = Math.floor(Math.random() * 255)
  let blue = Math.floor(Math.random() * 255)

  let color = `rgb(${red},${green},${blue})`
  return color;
} */

/* let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form was submitted");

  let inp = document.querySelector("input");
  console.log(inp.value);
}); */


/* TOD-APP BROWSER VERSION */

/* let btn = document.querySelector("button")
let ul = document.querySelector("ul")
let inp = document.querySelector("input")

btn.addEventListener("click", () => {
  let li = document.createElement("li")

  li.innerText = inp.value;

  let delbtn = document.createElement("button")
  delbtn.innerText = "Delete"
  delbtn.classList.add("delete")
  ul.appendChild(li)
  li.appendChild(delbtn)
  inp.value = ""
})
let delbtns = document.querySelectorAll(".delete");

for (delbtn of delbtns) {
  delbtn.addEventListener("click", function () {
    let par = this.parentElement;
    par.remove();
  });
} */



