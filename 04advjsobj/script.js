/*--------Function constructor (Creating Objects)-----

// creating object - object literal way
var john = {
   name : 'John',
   yearOfBirth: 1998,
   job: 'Teacher'
}

var Person = function(name, yearOfBirth, job){
   this.name = name;
   this.yearOfBirth = yearOfBirth;
   this.job = job;
//   this.calcAge = function(){
//      console.log(2019 - this.yearOfBirth);
//   }
}

Person.prototype.calcAge = function(){
   console.log(2019 - this.yearOfBirth);
}

var jane = new Person('Jane', 1999, 'Designer');
var Mark = new Person('Mark', 1959, 'Retired');

jane.calcAge();
Mark.calcAge();
-----------------------------------------*/

/*---------Object.create (creating Objects)----

var personProto = {
   calcAge : function(){
      console.log(2019 - this.yearOfBirth);
   }
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1996;
john.job = 'Yoga Teacher';
//console.log(john);

// The ideal way of filling data in object

var jane = Object.create(personProto, {
   name        : {value : 'Jane Doe'},
   job         : {value : 'Dancer'},
   yearOfBirth : {value : 1999},
});

//console.log(jane);

-------------------------------------------*/


/*----------Primitives vs Object--------

var a = 27;
var b = a;
a = 45;

console.log(a);
console.log(b);


var obj1 = {
   name : 'John',
   age : 35
}

var obj2 = obj1;
//obj1.age = 55;
obj2.age = 65;

console.log('age = ', obj1.age);
console.log('age = ', obj2.age);


// even inside a function objects mutated , changes globally
var age = 32;
var obj = {
   name : 'Mary',
   city : 'San Fransico'
}

function change(a, b){
   a = 37;
   b.city = 'Banglore';
}
change(age, obj);

console.log(age);
console.log(obj.city);

-----------------------------------------*/

/*------Passing function as arguments-----

var years = [1990, 1965, 1997, 2005, 1998];


function arrayCalc(arr, fn){
   var arrRes = [];
   for(var i=0; i< arr.length; i++){
      arrRes.push(fn(arr[i]));
   }
   return arrRes;
}


function calcAge(el){
   return 2019 - el;
}

function isAdult(el){
   return el >= 18;
}

function maxHeartRate(el){
//   if(el >= 18 && el < 81){ 
//      return Math.round(206.9 - (0.67 * el));
//   }else{
//     return -1;
//   }
   
   // error
   //(el >= 18 && el <= 81)? return Math.round(206.9 - (0.67 * el)) : return -1;
   // success
   return (el >= 18 && el <= 81)?  Math.round(206.9 - (0.67 * el)) : -1;
}

var ages = arrayCalc(years, calcAge);
console.log(ages);

var adults = arrayCalc(ages, isAdult);
console.log(adults);

var heartRates = arrayCalc(ages, maxHeartRate);
console.log(heartRates);
----------------------------------------*/

/*------Function returning function-----


function interviewQuestion(job){
   if(job === 'Developer'){
      return function(name){
         console.log('What\'s your tech stack , '+ name+ '?');
      }
   }else if(job === 'Designer'){
      return function(name){
         console.log(name+', What is UX design?');
      }
   }else{
      return function(name){
         console.log(name+', What do you do?');
      }
   }
}

var designerQs = interviewQuestion('Designer');
var developerQs = interviewQuestion('Developer');

designerQs('Mike');
designerQs('Shelly');
developerQs('Mark');
developerQs('Bela');


// another way of calling the returned function

interviewQuestion('Tester')('Kristen');

---------------------------------------*/

/*------IIFE immidietly invoked function Experession----

//function game(){
//   var score = Math.random()*10;
//   console.log(score >= 5);
//}
//game();
(function(){
   var score = Math.random()*10;
   console.log(score >= 5);
})();

(function(goodLuck){
   var score = Math.random()*10;
   console.log(score >= 5 - goodLuck);
})(5);

---------------------------------------*/

/*-----------------Closures------------

function retirement(retirementAge){
   var a = ' years left until retirement';
   return function(yearOfBirth){
      var age = 2019 - yearOfBirth;
      console.log((retirementAge - age) + a);
   }
}

var retirementUS = retirement(66);
retirementUS(1999);
var retirementIND = retirement(60);
retirementIND(1999);
//retirement(66)(1999);


// another example re-write the above interviewQs function using CLOSURES

function interviewQs(job){
   return function(name){
      if(job === 'Designer'){
         console.log(name+', What is UX design?');
      }else if(job === 'Developer'){
         console.log('What\'s your tech stack , '+ name+ '?');
      }else{
         console.log(name+', What do you do?');
      }
   }
}

interviewQs('Designer')('Mary');

---------------------------------------*/

/*--------------Bind, Call and Apply----

var john = {
   name : 'John Doe',
   age : 26,
   job : 'teacher',
   presentation : function(style, timeOfDay){
      if(style === 'formal'){
         console.log('Good '+timeOfDay+' Ladies and Gentleman! I\'m '+this.name+', I\'m a '+this.job+' and I\'m '+this.age+' years old.');
      }else if(style === 'friendly'){
         console.log('Hey! What\'s up? I\'m '+this.name+', I\'m a '+this.job+' and I\'m '+this.age+' years old. Have a nice '+timeOfDay+'.');
      }
   }
}

var emily = {
   name : 'Emily Kill',
   age : 23,
   job : 'designer'
}

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

// Syntax - object.method.call(setThisVariableTO, 'argument1', argument2);

// Apply method is quite similar to call() but only difference is that it accepts an array as arguments list

//john.presentation.apply(emily, ['friendly', 'afternoon']);


var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily);

emilyFormal('formal', 'afternoon');

john.presentation.bind(emily, 'formal').call(this, 'evening');




var years = [1990, 1965, 1997, 2005, 2000];


function arrayCalc(arr, fn){
   var arrRes = [];
   for(var i=0; i< arr.length; i++){
      arrRes.push(fn(arr[i]));
   }
   return arrRes;
}


function calcAge(el){
   return 2019 - el;
}

function isAdult(limit, el){
   return el >= limit;
}

var ages = arrayCalc(years, calcAge);

var fullJapan = arrayCalc(ages, isAdult.bind(this, 20));

console.log(ages);
console.log(fullJapan);

---------------------------------------*/

/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique IIFE to do exactly that).
*/

/*
(function(){
   function Question(question, answers, correct){
      this.question = question;
      this.answers = answers;
      this.correct = correct;
   }

   Question.prototype.displayQuestion = function(){
      console.log(this.question);
      for(var i=0; i<this.answers.length; i++){
         console.log(i+': '+this.answers[i]);
      }
   }

   Question.prototype.checkAns = function(ans){
      if(ans === this.correct){
         console.log('Hurrah! Correct answer.');
      }else{
         console.log('Wrong answer, please try again.');
      }
   }

   var q1 = new Question('Is javascript the coolest programming language?', ['Yes', 'No'], 0);

   var q2 = new Question('What\'s the name of India\'s Prime Minister?', ['Rahul Gandhi', 'Deepika Padukone', 'Narendra Modi', 'Sachin Tendulkar'], 2);

   var q3 = new Question('What does best describes coding?', ['Boring', 'Hard', 'Tedious', 'Fun'], 3);

   var q4 = new Question('Which programming language do you like most?', ['Java', 'PHP', 'Python', 'JavaScript'], 3);

   var q5 = new Question('Which is the capital of India?', ['Japan', 'New Delhi','New Jersy', 'Vietnam'], 1);

   var questions = [q1, q2, q3, q4, q5];

   var n = Math.floor(Math.random() * questions.length);

   questions[n].displayQuestion();

   var answer = parseInt(prompt('Please select the correct answer.'));

   questions[n].checkAns(answer);
})();
*/


/*
--- Expert level ---
8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)
9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.
10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).
11. Display the score in the console. Use yet another method for this.
*/

(function(){
   function Question(question, answers, correct){
      this.question = question;
      this.answers = answers;
      this.correct = correct;
   }

   Question.prototype.displayQuestion = function(){
      console.log(this.question);
      for(var i=0; i<this.answers.length; i++){
         console.log(i+': '+this.answers[i]);
      }
   }

   Question.prototype.checkAns = function(ans, callback){
      var sc;
      if(ans === this.correct){
         console.log('Hurrah! Correct answer.');
         sc = callback(true);
      }else{
         console.log('Wrong answer, please try again.');
         sc = callback(false);
      }
      this.displayScore(sc);
   }

   Question.prototype.displayScore = function(score){
      console.log('Your current score is: '+ score);
      console.log('------------------------------');
   }
   
   var q1 = new Question('Is javascript the coolest programming language?', ['Yes', 'No'], 0);

   var q2 = new Question('What\'s the name of India\'s Prime Minister?', ['Rahul Gandhi', 'Deepika Padukone', 'Narendra Modi', 'Sachin Tendulkar'], 2);

   var q3 = new Question('What does best describes coding?', ['Boring', 'Hard', 'Tedious', 'Fun'], 3);

   var q4 = new Question('Which programming language do you like most?', ['Java', 'PHP', 'Python', 'JavaScript'], 3);

   var q5 = new Question('Which is the capital of India?', ['Japan', 'New Delhi','New Jersy', 'Vietnam'], 1);

   var questions = [q1, q2, q3, q4, q5];
   
   function score(){
      var sc = 0;
      return function(correct){
         if(correct){
            sc++;
         }
         return sc;
      }
   }
   var keepScore = score();
   
   function nextQuestion(){
      var n = Math.floor(Math.random() * questions.length);
      questions[n].displayQuestion();
      var answer = prompt('Please select the correct answer.');
      
      if(answer !== 'x'){
         questions[n].checkAns(parseInt(answer), keepScore);
         nextQuestion();
      }
   }
   nextQuestion();
})();





























