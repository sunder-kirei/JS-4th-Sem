# JS Basics

## Data-types in JavaScript

Firstly, everything in JS in an object, but don't write this in your papers😅

So, there are two types of Data in JavaScript-

### Primitive Data Types

- `Number` **1,2,3...**
- `Boolean` _true,false_
- `String` _"Hello, World!"_

### Objects

- Arrays
- Classes

---

## I/O in Js

Let's just cover I/O while we are at it-

### Output

`console.log()`

- **console.log()** logs something to the developer console, you can either use your '**Chrome Dev Tools**' console or just install '**Quokka.js**' extension, if you plan on using Chrome, please don't until I explicitly ask you to, the console will be a mess😅😅😅

> Extension Id for Quokka.js, Just copy and paste in search :

    WallabyJs.quokka-vscode

` alert()`

- The most primitive way of outputing to the user is **alert()** function which I will cover down below, See you there😉

#### Examples

```JS
  console.log(typeof(5));     //number
  console.log(typeof("Senpai"));      //string
  console.log(typeof(true));      //boolean

  let array = new Array(5);
  //An array is an object so, like any other object you can initialize it with a constructor function and 'new' keyword

  console.log(typeof(array));     //object
```

### Input

`prompt()`

- Since JS is the language of the web, their is no way to input data in the terminal or an application, with the exception of **prompt()** function. Generally, you would be getting data in a JSON file via a server or through _input_ fields.

---

## Dynamic Nature of JS

JavaScript is a dynamically typed language, i.e., you don't have to worry about data types , *mostly*😅

```Js
let name = "Kirei Senpai"
console.log(typeof(name)) //String
```

> I covered variable decalration just below, don't worry about it right now

- `typeof()`

  `typeof()` function returns the data type of a variable in JavaScript

  #### Examples

  ```JS
    let number = 5;
    console.log(typeof(number)); //number

    let number2 = '5'
    console.log(typeof(number2)); //string

    //Type inference in JavaScript
    console.log(number + number_2)  //55

    /*
    You can explicitly convert any primitive data type to other by using either,
    'Number()' , 'Boolean()' or 'String()' functions in JavaScript
    */
    console.log(number + Number(number_2)); //10
  ```

- JS will automatically infer the types of variable and their resulting expression, and evaluate them accordingly.

  ```JS
  let a = '10'
  let b = '11'

  console.log(a + b) //1011
  ```

  Here, the concept of String concatenation, comes into play, so we get the concatenated string _1011_.

  ```JS
    let a = 10
    let b = 11

    console.log(a + b) //21
  ```

  This was pretty simple, JS just added the numbers and returned the answer _21_.

  What happens, if per se a string and a number are _added_, well we get a string...

  ```JS
  	console.log('5'+5) // 55
  ```

### Typecasting

We can typecast one primitive type to another by passing it through a function,

```JS
  Number('5') //5
  Boolean('5') //true
  Boolean('') //false
  String(5) //5
```

---

## Variables

Variables in JavaScript are declared by the 3 keyword-

1. `let`  
   This is block scoped, i.e., it behaves just like the variable in C++, always prefer this over var, introduced in _ES6_, newer version of JavaScript
2. `var`  
   The old way of declaring variables, varibles are attached to the window object, a global object present in every HTML file
3. `const`  
   Like the name suggests it create an immutable variable

```JS
  let a = 10
  a = 11

  const b = 1
  b = 2 //This will yield an error 'cause b is immutable
```

> All variables are globally scoped by default,
> Only when a variable is declared in function block, that it is block-scoped or locally-scoped

---

## Operators

Operators in JavaScript are just like C++ with a few exceptions. There are mainly three diferent operators as compared to c++, they are;

1. Triple equals to `===`
2. Double equals to `==`
3. Exponential Operator `**`

All other operators work like a charm, increment, decrement, so on and so forth.

### Difference between `==` and `===`

```JS
  let a = 1
  let b = '1'

  console.log(a == b) //true
  console.log(a === b) //false
```

> The `==` mathes the value of the variables and does't check if their types are same or not, this could lead to buggy code at production, try and avoid this!

> The `===` checks for both values as well as their types in variables, and hence returns false for same values but different types.

---

## Conditionals

Conditions in JavaScript work EXACTLY like C++, no seriously!

```JS
  if(2 === '2')
    console.log("This will never run")
  else if (0 == true)     //truthy and falsey values work the same as well
    console.log("This will never run either😅")
  else
    console.log("You can use '()', if you want, but for single line codes, I prefer these😅")

  let ternary = (5 > 3 ? "This is a ternary operator just like you would remember" : "False value, won't run");

  console.log(ternary); //This is a ternary operator just like you would remember
```

---

## Loops

Loops in JavaScript

There are mainly 5 types of Loops in JavaScript, you are familiar with 3 of them,

1. `for` loop
2. `while` loop
3. `do...while` loop
4. `for of` loop
5. `for in` loop

### `for` loop

```JS
  for(let i = 0; i < 3; i++) {
    console.log(i)
  }
```

### `while` loop

```JS
  let i = 0

  while(i < 3){
    console.log(i)
    i++
  }
```

### `do...while` loop

```JS
  let i = 0

  do{
    console.log(i)
    i++
  }while(i < 3)
```

> `for in` and `for of` loops will be discussed later in detail when we cover arrays and other iterables.

### `for in` loop

- `for in` loop takes key of an object as an argument

### `for of` loop

- `for of` loop is like an iterator in C++, it returns the value associated with the key, iteratively.
  I'm pretty sure this is not in your course, but I'll cover it with arrays, okay?

---

## Objects

Objects in JavaScript are a **HUGE** topic, to put it bluntly!

```JS
  let fullName = {
      firstName: 'Kirei', //Don't forget the comma
      lastName: 'Senpai'
  }
```

> You can also make an object using a constructor, but it is beyond the scope of this tutorial, Pun intended🤣🤣🤣

> You can see it looks just like a JSON object, cause it is technically, Java Script Object Notation, Duh...

Anyways, the names of the variables,
`firstName` and `lastName`, are called keys of the said object, while `Kirei` and `Senpai` are the values of the keys, respectively. 
Please remember this, it will help you understand Arrays...

---

## Arrays

Now that you know about objects, their key and values, you are now ready to learn about arrays in JS.  
Arrays in JavaScript are Objects, and hence can be constructed using their constructor function.

```JS
  let firstArray = new Array(5); 
	/*the new keyword is same as C++,
	'Array' is the name of its Class and 
	the argument passed gives the size of the array*/
```

#### Declaring and Initializing Arrays

```JS
  let secondArray = [1,2,3,4,5]; //Declaring and initializing an array, simultaneously
```

- `for of` loop  
  
	`for of` loop iterates over the array and returns the value of the keys, one-by-one.
  ```JS
	for( key of firstArray){
		console.log(key); //0,1,2,3,4
	}
  ```
- `for in` loop
  
	`for in` loop returns the keys of an object one-by-one.

	```JS
	  for(key in fullName){
		  console.log(key);   //firstName, lastName
	  }
	```
---

## Functions

Functions in JavaScript are decalred with `function` key word, there are also something called ***arrow functions*** but I'm pretty sure it's not part of your syllabus...

```JS
function add(a = 0,b = 0){ //These are called 'default parameters', and are just like C++, completely optional and completely Rad!😍
	return a + b;
}
console.log(add(1,2));  //3
```
>Firstly, no need to say `let` while declaring parameters in a function

>Secondly, no need to define the return type of the function, JavaScript is Smart that way😎

---
## Event-Listeners and DOM Manipulation

- Event-Listeners as the name suggests are there to *listen* for events.
- Events are basically user inputs and actions.
- Event-listeners can either be hooked *in-line* in HTML or seperately in a JS file.

```HTML
<body>
	<button id = "body-button" onClick = alert("Hello, there!")>
		Click Me!
	</button>
<body>
```

```JS
const button = document.getElementById("body-button")
  button.addEventListener('click',function(){
  alert("Hello, there!")
})
```

>The above statement roughly translates to 'Hey html file, aka document, go fetch the object having the id `lastButton` from the document'😅

- `document` is also an object in the global scope, and it maps the entire HTML file into a JS object

- Just like `.getElementById()` funtion there is also a `.getElementByClassName()` function that does the same thing but with classNames.

- The `addEventListener()` function takes two arguments, the type of **event** to *listen* for and the **function** to run on the said event's occurence.

- You can either define the entire funtion just there like I did or just decalre it else where and pass it there, like...

```JS
  function rightClicked(){
    alert("You right clicked this button!!")
  }

  button.addEventListener("contextmenu", rightClicked); //This event-listener listens for right mouse clicks
```
> Remember not to add `()` after the name of the function, or JavaScript will just run the function no matter what, even when not right clicked!!! It's stupid that way 😅😅😅

---

### Well, that pretty much concludes our little tutorial, if you don't understand the DOM manipulation part or the event-listener part, you can just Youtube "DOM in HTML" and that ought to clear your doubts, Bye 👋👋👋
