/*Data-types in JavaScript

Firstly, everything in JS in an object, but don't write this in your papers😅

So, there are two types of Data in JavaScript-
1- Primitive Data Types
-- Number
-- Boolean
-- String
2- Objects
-- Arrays
-- Classes
*/
    /*
        Let's just cover I/O while we are at it-

        console.log() logs something to the developer console, you can either use your Chrome Dev Tools' console or just install 'Quokka.js' extension, if you plan on using Chrome, please don't until I explicitly ask you to, the console will be a mess😅😅😅

        Extension Id for Quokka,js :
        WallabyJs.quokka-vscode
        Just copy and paste in search

        The most primitive way of outputing to the user is alert() function which I will cover down below, See you there😉
    */

    //BTW, ';' are absolutely OPTIONAL skip them if you want

console.log(typeof(5));     //number
console.log(typeof("Senpai"));      //string
console.log(typeof(true));      //boolean

let array = new Array(5);       //An array is an object so, like any other object you can initialize it with a constructor function and 'new' keyword
console.log(typeof(array));     //object

    
    
//JavaScript is a dynamically typed language, i.e., you don't have to worry about data types (mostly)
    
let name = "Sunder Kumar"; //I covered variable decalration just below, don't worry about it right now

//typeof() function returns the data type of a variable  in JavaScript
console.log(typeof(name)); //string
    
let number = 5;
console.log(typeof(number)); //number

let number_2 = '5'
console.log(typeof(number_2)); //string

//Type inference in JavaScript
console.log(number + number_2)  //55

// You can explicitly convert any primitive data type to other by using either 'Number()' , 'Boolean()' or 'String()' functions in JavaScript
console.log(number + Number(number_2)); //10    


/*
This also leads to Variables in JavaScript;

Variables in JavaScript are declared by the 3 keyword-
1- let  //This is block scoped, i.e., it behaves just like the variable in C++, always prefer this over var, introduced in ES6, newer version of JavaScript
2- var  //The old way of declaring variables, varibles are attached to the window object, a global object present in every HTML file
3- const //Like the name suggests it create an immutable variable
*/

let firstName = "Kirei"
const lastName = "Senpai"

console.log(firstName + " " + lastName) //Kirei Senpai

firstName = "Senpai"
//lastName = "Kirei" //This will yield an error message and program execution will halt immediately

/*
Also, all variables are globally scoped by default,
Only when a variable is declared in function block, that it is block-scoped or locally-scoped
*/


/*
Operators in JavaScript are just like C++ with a few exceptions. There are mainly three diferent operators as compared to c++, they are;
1- Triple equals to '==='
2- Double equals to '=='
3- Exponential Operator '**'

All other operators work like a charm, increment, decrement, so on and so forth.
*/

//For this illustration, let's just use the previously decalred variables 'number' and 'number_2'; Line 40

console.log(number == number_2); //true
//The above code only mathes the value of the variables and does't check if their types are same or not, this could lead to buggy code at production, try and avoid this

console.log(number === number_2); //false
//The above code solves the problem from earlier, '===' checks for both values as well as their types in variables

console.log(2**3); //8
/*
Conditions in JavaScript work EXACTLY like C++, no seriously
*/

if(2 === '2') 
    console.log("This will never run")
else if (0 == true)     //truthy and falsey values work the same as well
    console.log("This will never run either😅")
else 
    console.log("You can use '()', if you want, but for single line codes, I prefer these😅")

let ternary = (5 > 3 ? "This is a ternary operator just like you would remember" : "False value, won't run");

console.log(ternary);   //This is a ternary operator just like you would remember


/*
Loops in JavaScript

There are mainly 5 types of Loops in JavaScript, you are familiar with 3 of them,

1- for loop
2- while loop
3- do...while loop
4- for of loop
5- for in loop
*/

for(let i = 0; i < 3; i++) {
    console.log(i)
}

let i = 0

while(i < 3){
    console.log(i)
    i++
}

do{
    console.log(i)
    i++
}while(i < 3);

/*
"For in" loop takes key of an object as an argument

"For of" loop is like an iterator in C++, it returns the value associated with the key, iteratively
I'm pretty sure this is not in your course, but I'll cover it with arrays, okay?
*/

/*
Objects in JavaScript are a HUGE topic, to put it bluntly
*/

let fullName = {
    firstName: 'Sunder', //Don't forget the comma
    lastName: 'Kumar'
}

//You can also make an object using a constructor, but it is beyond the scope of this tutorial🤣🤣🤣

//You can see it looks just like a JSON object, cause it is technically, Java Script Object Notation Duh...
//Anyways, the name if the variable is 'fullName' and 'firstName' and 'lastName' are called keys of the said object, while 'Sunder' and 'Kumar' are the values of the keys, respectively. Please remember this it will help you understand Arrays...

console.log(fullName)
console.log(fullName.firstName) //This is called Dot Notation, and you just need to remember this way of accessing the keys in an object
console.log(fullName["lastName"]) //This is called the Bracket Notation, and you don't need to remember this one

//'console' is also an object and has various methods in it, like 'log()' and 'clear()', to name a few


//Arrays... Finally
/*
Now that you know JS objects, key and values you are ready to learn about arrays in JS... Arrays in JavaScript are Objects and Hence can be constructed using its constructor function
*/

let firstArray = new Array(5); //the new keyword is same as C++, 'Array' is the name of its Class and the argument passed gives the size of the array

//Also

let secondArray = [1,2,3,4,5]; //Declaring and initializing an array, simultaneously

console.log(secondArray);

//Let's learn about 'For of' and 'For in' loops now...

for( i = 0; i < 5; i++ ) {
    firstArray[i] = i;
}

//'For of' loop iterates over the array and returns the value of the keys, one-by-one
for( key of firstArray){
    console.log(key); //0,1,2,3,4
}

//'For in' loop returns the keys of an object one-by-one
for(key in fullName){
    console.log(key);   //firstName, lastName
}

//Functions in JavaScript are decalred with function key word, there are also something called 'arrow functions' but I'm pretty sure it's not part of your syllabus...

function add(a = 0,b = 0){ //These are called 'default parameters', and are just like C++, completely optional and completely Rad!😍
    return a + b;
}
console.log(add(1,2));  //3

//Firstly, no need to say 'let' while declaring parameters in a function
//Secondly, no need to define the return type of the function, JavaScript is Smart that way😎

//'alert()' function
//Quokka might give you red error msg for alert(), and 'document.' because these are not available in node.js whick quokka uses, either way don't worry, Chrome is your friend, just open 'index.html' file... I have cleared the console for you"

console.clear();

//If you not using your Chrome Dev tools, just open the index.js file and uncomment this line and refresh the page

// alert("Hello, there!")

//The above function is an alert() function and is the most primitive way of outputing something to the user. Another such function for input is 'prompt()'

//Un-comment this as well
// let input = prompt("Enter a value?")
// console.log(input)

//Finally, event listeners in JavaScript
//You can either add an event listener in the 'index.html' file or add it here like I did;
//'promptMsg()' function is from the in-line event listener, I'm writing this here just because, you can write this in the index.html file using the script tag

function promptMsg(){
    alert("You clicked In-line one!!!");
}

//This line selects the object in the document having the id of 'lastButton' {the entirety of the html page is considered a document, and this is called the document object model}
let button = document.getElementById("lastButton"); //Assigning it to a variable is entirely optional

//The above statement roughly translates to 'Hey html file, aka document, go fetch the object having the id 'lastButton' from the document'😅
//document is also an object in the global scope, and it maps the entire HTML file into a JS object
//Just like '.getElementById()' funtion there is also a '.getElementByClassName()' function that does the same thing but with classNames

button.addEventListener('click', function(){
    alert("You clicked the External JS button!!!")
})

//The 'addEventListener()' function takes two arguments, the type of event to listen for and the function to run on the said event's occurence
//You can either define the entire funtion just there like I did or just decalre it else where and pass it there, like...

function rightClicked(){
    alert("You right clicked this button!!")
}

button.addEventListener("contextmenu", rightClicked);
 //Remember not to add '()' after the name of the function, or JavaScript will just run the function no matter what, even when not right clicked!!! It's stupid that way 😅😅😅

//Well, that pretty much concludes our little tutorial, if you don't understand the DOM manipulation part, the event listener part, you can just Youtube DOM in HTML and that should cover your doubts, Bye 👋👋👋