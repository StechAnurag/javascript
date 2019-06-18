/************************
* variable and datTypes 
*
*************************/

/*
var firstName = 'John';
var lastName = 'Doe';
var age = 23;
var isMale = true;
var job;

console.log('Firstname = ', firstName);
console.log('Lastname = ', lastName);
console.log('Age = ', age);
console.log('Male = ',isMale);

console.log('job = ', job); // job evalueates to 'undefind'

*/

/************************
* coding challenge 1 
*
*************************/

/*
var MarkHeight, JohnHeight, MarkWt, JohnWt, MarkBMI, JohnBMI;

MarkHeight = 1.7;
MarkWt = 65;
MarkBMI = MarkWt / (MarkHeight * MarkHeight);
console.log("Mark's BMI = ", MarkBMI);

JohnHeight = 1.65
JohnWt = 68;
JohnBMI = JohnWt / (JohnHeight * JohnHeight);
console.log("John's BMI = ", JohnBMI);

var isMarkBMIHigher = MarkBMI >= JohnBMI;
console.log('Is Mark\'s BMI is higher than John\'s  ? ' + isMarkBMIHigher);

*/


/************************
* coding challenge 2
*
*************************/
/*
var AvgJohnTeam = (89 + 120 + 103) / 3;
var AvgMikeTeam = (116 + 94 + 123) / 3;
var AvgMaryTeam = (97 + 134 + 105) / 3;


// Level 1 challenge
if(AvgJohnTeam > AvgMikeTeam){
   console.log('John is winner with score = '+AvgJohnTeam);
}else if(AvgMikeTeam === AvgJohnTeam){
   console.log('Both team Draw');
}else{
   console.log('Mike is winner with score = '+AvgMikeTeam);
}

// Level 2 challenge
if(AvgJohnTeam > (AvgMikeTeam && AvgMaryTeam)){
   console.log('John\'s team is winner');
}else if(AvgMikeTeam > AvgJohnTeam && AvgMikeTeam > AvgMaryTeam){
   console.log('Mike\'s team is winner');
}else if(AvgMaryTeam > ( AvgJohnTeam && AvgMikeTeam)){
   console.log('Mary\'s team is winner');
}else if(AvgJohnTeam === AvgMaryTeam === AvgMikeTeam){
   console.log('All three gets a Draw');
}else{
   console.log('unable to judge a winner');
}
*/

/**********************************
* Function Statement and Expression 
*
***********************************/

/*
// Function Statement
function myFunction(param1, param2){
   //Does something may/ may not produce immidiate result
}


// Function Expression
var myFunction = function(param1, param2){
   //Must returns a single value
}
*/


/************************
* coding challenge 3
*
*************************/

/*
var tipCalculator = function(bill){
   if(bill < 50){
      return bill * (20/100);
   }else if(bill > 50 && bill < 200){
      return bill * (15/100);
   }else{
      return bill * (10/100);
   }
}

var bill1 = 124;
var bill2 = 48;
var bill3 = 268;

var tip1 = tipCalculator(bill1);
var tip2 = tipCalculator(bill2);
var tip3 = tipCalculator(bill3);

var tips = [tip1, tip2, tip3];

var finalAmt1 = bill1 + tip1;
var finalAmt2 = bill2 + tip2;
var finalAmt3 = bill3 + tip3;

var finalAmt = new Array(finalAmt1, finalAmt2, finalAmt3);

console.log('Tips -> ', tips);
console.log('Final paid Amount -> ', finalAmt);

*/

/*****************************************
* Coding Challenge 4 (Objects and Methods)
*
*****************************************/

/*
var john = {
   firstName : 'John',
   lastName : 'Doe',
   mass : 68,
   height: 1.72,
   calcBMI : function(){
      this.BMI = this.mass / (this.height * this.height);
      return this.BMI;
   }
}

var mark = {
   firstName : 'Mark',
   lastName : 'Wills',
   mass : 70,
   height: 1.75,
   calcBMI : function(){
      this.BMI = this.mass / (this.height * this.height);
      return this.BMI;
   }
}

if(john.calcBMI() > mark.calcBMI()){
   console.log(john.firstName+' '+john.lastName +' has higher BMI = '+john.BMI);
}else if(mark.calcBMI() > john.calcBMI()){
   console.log(mark.firstName+' '+mark.lastName +' has higher BMI = '+mark.BMI);
}else{
   console.log('John and Mark has equal BMI');
}

*/


/*****************************************
* Coding Challenge 5 (Everything in sum up)
*
*****************************************/

var john = {
   fullName : 'John Doe',
   bills : [124, 48, 268, 180, 42],
   tips : [],
   finalBill : [],
   tipCalc : function(){
      for(var i=0; i<this.bills.length; i++){
         var bills = this.bills[i];
         var tips = this.tips;
         if(bills < 50){
            tips[i] = bills * 0.2;     
         }else if(bills > 50 && bills < 200){
            tips.push(bills * 0.15); // Another way
         }else{
            tips.push(bills * 0.1);
         }
         this.finalBill.push(bills + tips[i]);
      }
   }
}

john.tipCalc()
console.log(john);

var mark = {
   fullName : 'Mark Miller',
   bills : [77, 375, 110, 45],
   tipCalc : function(){
      this.tips = [];
      this.finalBill = [];
      for(var i=0; i<this.bills.length; i++){
         var bills = this.bills[i];
         var tips = this.tips;
         if(bills < 100){
            tips[i] = bills * 0.2;     
         }else if(bills > 100 && bills < 300){
            tips.push(bills * 0.10); // Another way
         }else{
            tips.push(bills * 0.25);
         }
         this.finalBill.push(bills + tips[i]);
      }
   }
}


mark.tipCalc()
console.log(mark);

function calcTipAvg(tips){
   var sum = 0;
   for(var i = 0; i<tips.length; i++){
      sum += tips[i];
   }
   var avgTip = sum / tips.length;
   return avgTip;
}

var avgMarkTip = calcTipAvg(mark.tips);
var avgJohnTip = calcTipAvg(john.tips);

console.log(avgJohnTip, avgMarkTip);

if(avgJohnTip > avgMarkTip) console.log(john.fullName+'\'s family paid highest tips average = '+ avgJohnTip);
else console.log(mark.fullName+'\'s family paid highest tips average = '+ avgMarkTip);






















