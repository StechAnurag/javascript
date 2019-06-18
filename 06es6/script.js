/////////////////////////////////////////
// Lecture : let var const
/*
// ES5

function driverLicense(passedTest){
   
   if(passedTest){
      var firstName = 'John';
      var yearOfBirth = 1990;
   }
   console.log('Licence No.- '+firstName+yearOfBirth );
}

driverLicense(true);

// ES6
function driverLicense(passedTest){
   
   if(passedTest){
      let firstName = 'John';
      const yearOfBirth = 1990;
      console.log('Licence No.- '+firstName+yearOfBirth );
   }
   // console.log('Licence No.- '+firstName+yearOfBirth ); //Error
}

driverLicense(true);

// ES5 

var i = 23;

for(var i = 0; i < 5; i++){
   console.log(i);
}

console.log('outside loop i = '+ i);


// ES6 

let j = 23;

for(let j = 0; j < 5; j++){
   console.log(j);
}

console.log('outside loop j = '+ j);
*/

/////////////////////////////////////////
// Lecture : Blocks and IIFEs
/*
// ES6
{
   const a = 5;
   let b = 10;
}

// console.log(a + b); // Error: not accessible
 
// ES5 

(function(){
   var a = 5;
   var b = 10;
})();

// console.log(a + b); // Error: not accessible

*************************************/

/////////////////////////////////////////
// Lecture : Strings 
/*
let firstName = 'John';
let lastName = 'Doe';
const yob = 1990;

function calcAge(yob){
   return 2019 - yob;
}

// ES5

console.log('My name is ' + firstName + ' '+ lastName + ' and I am ' + calcAge(yob) + ' years old.');

// ES6: using Template Literals

console.log(`My name is ${firstName} ${lastName} and I am ${calcAge(yob)} years old.`);


const n = `${firstName} ${lastName} `;

console.log(n.startsWith('J'));

console.log(n.endsWith('oe'));

console.log(n.includes('oh'));

console.log(`${firstName} `.repeat(5));

***********************************/
/////////////////////////////////////////
// Lecture : Arrow Functions
/*
const years = [1990, 1992, 1998, 2004, 1987];

// ES5

var ages5 = years.map(function(el){
   return 2019 - el;
});
console.log(ages5);

// ES6
let ages6 = years.map(el => 2019 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1} : ${2019 - el}`);
console.log(ages6);

ages6 = years.map((el, index) => {
   const now = new Date().getFullYear();
   const age = now - el;
   return `Age element ${index + 1} : ${age}`;
});

console.log(ages6);
**************************************/

/////////////////////////////////////////
// Lecture : Arrow Functions 2


// ES5
/*
var box5 = {
   color : 'green',
   position: 1,
   setClick: function(){
      var self = this; // since the event listener callback function points to global object bcoz it's a regular function call
      
      /*document.querySelector('.green').addEventListener('click', function(){
         var str = 'This is number '+this.position+' and it is '+this.color;
         console.log(str);*/
 /*     document.querySelector('.green').addEventListener('click', function(){
         var str = 'This is box number '+self.position+' and it is '+self.color;
         console.log(str);
      });
   }
}

//box5.setClick();

// ES 6
const box6 = {
   color : 'green',
   position: 1,
   setClick: function(){
      document.querySelector('.green').addEventListener('click', ()=>{
         let str = `This is box number ${this.position} and it is ${this.color}.`;
         console.log(str);
      });
   }
}

box6.setClick();


const box66 = {
   color : 'green',
   position: 1,
   setClick: ()=>{
      document.querySelector('.green').addEventListener('click', ()=>{
         let str = 'This is box number '+this.position+' and it is '+this.color+'.';
         console.log(str);
      });
   }
}

box66.setClick();


function Person(name){
   this.name = name;
}

// ES5

Person.prototype.friends5 = function(friends){
   var arr = friends.map(function(el){
      return this.name + ' is friends with '+ el;
   }.bind(this));
   console.log(arr);
}

var friends = ['Mike', 'Bob', 'Shelly'];
new Person('John').friends5(friends);


// ES6
Person.prototype.friends6 = function(friends){
   
   let arr = friends.map(el => `${this.name} is friends with '+ ${el}`);
   
   console.log(arr);
}

new Person('Mark').friends6(friends);

****************************************/


/////////////////////////////////////////
// Lecture : Destructuring
/*
// ES5

var john = ['John', 23];
var name = john[0];
var age = john[1];


// ES6

const jane = ['Jane', 22];
const [herName, herAge] = jane; // Destructuring an array

console.log(herName);
console.log(herAge);

const obj = {
   firstName : 'John',
   lastName : 'Doe'
}

const {firstName, lastName} = obj; // Destructuring an object

console.log(firstName);
console.log(lastName);

const {firstName : a, lastName: b} = obj; // Destructuring an object with different key-variable name

console.log(a, b);

// Destructuring an array returned from a function

function calcAgeRetirement(year){
   const hisAge = new Date().getFullYear() - year;
   return [hisAge, 65-hisAge];
}

const [hisAge, retirement] = calcAgeRetirement(1990);
console.log(hisAge, retirement);

**************************************************/

/////////////////////////////////////////
// Lecture : ES6 Arrays
/*
const boxes = document.querySelectorAll('.box');

// ES5

/*var boxesArr5 = Array.prototype.slice.call(boxes);

boxesArr5.forEach(function(current){
   current.style.backgroundColor = 'dodgerblue';
});*/
/*
// ES6
const boxes6 = Array.from(boxes);
Array.from(boxes).forEach(current => current.style.backgroundColor = 'teal');

// ES5
/*for(var i=0; i<boxesArr5.length; i++){
   if(boxesArr5[i].className === 'box blue'){
      continue;
   }
   boxesArr5[i].textContent = 'I am Iron Man!'
}*/

// ES6

/*for(current of boxes6){
   if(current.className.includes('blue')) continue;
   current.textContent = 'I am Thor!';
}*/

// ES5
/*
var ages = [12, 14, 8, 21, 16];

var fullAge = ages.map(function(el){
   return el >= 18;
});

console.log(fullAge);

console.log(fullAge.indexOf(true)); // find the index of the desired value
console.log(ages[fullAge.indexOf(true)]); // find actual value

// ES6 

console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));

//console.log('greater than 14-->',ages.find(cur => cur >= 14));

*/


/////////////////////////////////////////
// Lecture : The Spread Operator ...

/*
function overScore(a, b, c, d, e, f){
   return a + b + c + d + e + f;
}

var score1 = overScore(2, 0 , 4, 1, 6, 0);
console.log('score in 1st over = ', score1);


// ES5
var scores = [4, 4, 6, 2, 6, 1];
var score2 = overScore.apply(this, scores);
console.log('score in 2nd over = ', score2);

// ES6 

let scores3 = overScore(...scores);
console.log('score in 2nd over = ', score2);



const familyMiller = ['David', 'Jane', 'Max'];
const familySmith = ['John', 'Baxy', 'Lily'];

const familyUnion = [...familyMiller, 'Mark', ...familySmith];
console.log(familyUnion);


const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');

****************************************/

/////////////////////////////////////////
// Lecture : ...Rest parameters 
/*
// ES5 
function isFullAge5(){
   // console.log(arguments); // not an array but array like   
   var argsArr = Array.prototype.slice.call(arguments);
   
   argsArr.forEach(function(cur){
      console.log((2019 - cur) >= 19);
   });
}

//isFullAge5(1990, 2009, 1954, 2004, 1996);

// ES6

function isFullAge6(...yob){
   //console.log(yob);
   yob.forEach(cur => console.log((2019 - cur) >= 18));
}

isFullAge6(1990, 2009, 1954, 2004, 1996);
*/
/*
// ES5 
function isFullAge5(limit){
   var argsArr = Array.prototype.slice.call(arguments, 1);
   
   argsArr.forEach(function(cur){
      console.log((2019 - cur) >= limit);
   });
}

isFullAge5(21, 1990, 2009, 1954, 2001, 1996);

// ES6

function isFullAge6(limit, ...yob){
   //console.log(yob);
   yob.forEach(cur => console.log((2019 - cur) >= limit));
}

isFullAge6(19, 1990, 2009, 1954, 2004, 1996);

***************************************************/

/////////////////////////////////////////
// Lecture : Default parameters
/*
// ES5

function SmithFamily(firstName, yob, lastName, nationality){
   lastName = lastName === undefined ? 'Smith' : lastName;
   nationality = nationality === undefined ? 'American' : nationality;
   
   this.firstName = firstName;
   this.lastName = lastName;
   this.yob = yob;
   this.nationality = nationality;
}

var john = new SmithFamily('John', 1990);
var Emily = new SmithFamily('Emily', 1993, 'Diaz', 'Spanish');

// ES6 

function MillerPerson(firstName, yob, lastName = 'Miller', nationality='Europian'){
   this.firstName = firstName;
   this.lastName = lastName;
   this.yob = yob;
   this.nationality = nationality;
}

var david = new MillerPerson('David', 1991);
var dixy = new MillerPerson('Dixy', 1993, 'Diaz', 'Australian');
********************************************************/


/////////////////////////////////////////
// Lecture : Map DataStructure
/*
const question = new Map(); // declartion

question.set('ques', 'What\'s the latest major version of JavaScirpt?');
question.set(1, 'ES5');
question.set(2, 'ES6-ES2015');
question.set(3, 'ES2016');
question.set(4, 'ES2017');
question.set('correct', 2);
question.set(true, 'Correct Answer :-D)');
question.set(false, 'Wrong Answer, Try Again');

console.log(question.get('ques'));
//console.log(question.size);

if(question.has(4)){
   //question.delete(4);
   //console.log(question);
}

// question.clear(); delete all items from Map


/*question.forEach((value, key)=>{
   console.log(`${key} : ${value}`);
});*/
/*
for(let [key, value] of question.entries()){
   //console.log(`${key} : ${value}`);
   
   if(typeof(key) === 'number'){
      console.log(`Answer ${key} : ${value}`);
   }
}

const ans = parseInt(prompt('Write the correct answer number: '));

console.log(question.get(ans === question.get('correct')));

************************************************************/

/////////////////////////////////////////
// Lecture : Classes in ES6
/*
// ES5

var Person5 = function(name, yob, job){
   this.name = name;
   this.yob = yob;
   this.job = job;
}

Person5.prototype.calcAge = function(){
   var age = new Date().getFullYear() - this.yob;
   console.log('Age = '+age);
}

var john = new Person5('John Doe', 1990, 'Teacher');

// ES6

class Person6{
   constructor(name, yob, job){
      this.name = name;
      this.yob = yob;
      this.job = job;
   }
   
   calcAge(){
      let age = new Date().getFullYear() - this.yob;
      console.log('Age = '+age);
   }
   
   static greeting(){
      console.log('Hello World');
   }
}

const Mike = new Person6('Mike Muller', 1998, 'Designer');

Person6.greeting(); // calling a static method

********************************************************/

/////////////////////////////////////////
// Lecture : Inheritance among Classes
/*
// ES5

var Person5 = function(name, yob, job){
   this.name = name;
   this.yob = yob;
   this.job = job;
}

Person5.prototype.calcAge = function(){
   var age = new Date().getFullYear() - this.yob;
   console.log('Age = '+age);
}

var Athelete5 = function(name, yob, job, olympicGames, medals){
   Person5.call(this, name, yob, job);
   this.olympicGames = olympicGames;
   this.medals = medals;
}
// connecting prototype chain with super Function constructor
Athelete5.prototype = Object.create(Person5.prototype);

// Athele5's own method

Athelete5.prototype.wonMedal = function(){
   this.medals++;
   console.log(this.medals);
}

var johnAthelete5 = new Athelete5('John', 1990, 'Swimmer', 3, 10);
johnAthelete5.calcAge();
johnAthelete5.wonMedal();

// ES6

class Person6{
   constructor(name, yob, job){
      this.name = name;
      this.yob = yob;
      this.job = job;
   }
   
   calcAge(){
      let age = new Date().getFullYear() - this.yob;
      console.log('Age = '+age);
   }
}

class Athelete6 extends Person6{
   constructor(name, yob, job, olympicGames, medals){
      super(name, yob, job);
      this.olympicGames = olympicGames;
      this.medals = medals;
   }
   
   wonMedal(){
      this.medals++;
      console.log(this.medals);
   }
}

const johnAthelete6 = new Athelete6('John', 1992, 'Sprinter', 4, 10);
johnAthelete6.calcAge();
johnAthelete6.wonMedal();

*********************************************************
                  CODING CHALLANGE 8
*********************************************************/

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
All the report data should be printed to the console.
HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/

class Element{
   constructor(name, buildYear){
      this.name = name;
      this.buildYear = buildYear;
   }
}

class Park extends Element{
   constructor(name, buildYear, area, numTrees){
      super(name, buildYear);
      this.area = area; // km^2
      this.numTrees = numTrees;
   }
   
   treeDensity(){
      const density = (this.numTrees / this.area).toFixed(2);
      console.log(`${this.name} park has a tree density of ${density} trees per square km.`);
   }
}

class Street extends Element{
   constructor(name, buildYear, length, size = 3){
      super(name, buildYear);
      this.length = length;
      this.size = size;
   }
   
   classifyStreet(){
      const classification = new Map();
      classification.set(1, 'tiny');
      classification.set(2, 'small');
      classification.set(3, 'normal');
      classification.set(4, 'big');
      classification.set(5, 'huge');
      
      console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
   }
}

const allParks = [
   new Park('Green Park', 1997, 0.4, 315),
   new Park('City Park', 1891, 2.9, 4068),
   new Park('Oak Park', 1953, 0.7, 789),
];

const allStreets = [
   new Street('Ocean Avenue', 1999, 2.7, 4),
   new Street('Wall Street', 1897, 1.3),
   new Street('Mall Avenue', 1953, 0.79, 2),
   new Street('Sunset Abode', 2004, 0.3, 1),
];

function calc(arr){
   const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
   
   return [sum, sum / arr.length];
}


function reportParks(p){
   console.log('---------------PARKS REPORT----------');
   
   // 1. Tree Density
   p.forEach(el => el.treeDensity());
   
   // 2. Avg. Age
   const ages = p.map(el => new Date().getFullYear() - el.buildYear);
   const [totalAge, avgAge] = calc(ages);
   
   console.log(`Our ${p.length} parks have average age of ${avgAge} years.`);
   
   // 3. Which park has more than 1000 trees
   const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
   console.log(`${p[i].name} has more than 1000 trees.`)
   
}

function reportStreets(s){
   console.log('---------------STREETS REPORT----------');
   
   // 1. Total and average length of the town's streets
   const [totalLength, avgLength] = calc(s.map(el => el.length));
   
   console.log(`Our ${s.length} streets have a total length of ${totalLength}km, with an average of ${avgLength}km.`);
   
   // 2. clssify sizes
   s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);

































