//**************************************DATA MODULE*****************************************
var budgetController = (function(){
   
   var Expense = function(id, description, value){
      this.id = id;
      this.description = description;
      this.value = value;
      this.percentage = -1;
   };
   
   Expense.prototype.calPercentage = function(totalIncome){
      
      if(totalIncome > 0){
         this.percentage = Math.round((this.value / totalIncome) * 100);
      }else{
         this.percentage = -1;
      }
      
   };
   
   Expense.prototype.getPercentage = function(){
      return this.percentage;
   }
   
   var Income = function(id, description, value){
      this.id = id;
      this.description = description;
      this.value = value;
   };
   
   var calculateTotal = function(type){
      var sum = 0;
      data.allItems[type].forEach(function(current){
         sum += current.value;
      });
      data.totals[type] = sum;
   };
   
   var data = {
      allItems : {
         inc : [],
         exp : []
      },
      totals : {
         inc : 0,
         exp : 0
      },
      budget : 0,
      percentage: -1
   };
   
   return {
      addItem : function(type, des, val){
         var newItem, ID;
         //generating a unique id for each element
         
         ID = (data.allItems[type].length > 0) ? data.allItems[type][data.allItems[type].length - 1].id + 1 : 0;
         
         //create new Item
         if(type === 'exp'){
            newItem = new Expense(ID, des, val);
         }else if(type === 'inc'){
            newItem = new Income(ID, des, val);
         }
         
         // push into our data structure
         data.allItems[type].push(newItem);
         
         // return the item
         return newItem;
      },
      
      deleteItem : function(type, id){
         var ids, index;
         
         // id = 6
         // data.allItems[type][id]; X wrong
         // ids = [1 2 4 6 8]
         // index = 3
         
         ids = data.allItems[type].map(function(current){
            return current.id;
         });
         
         index = ids.indexOf(id);
         
         if(index !== -1){
            data.allItems[type].splice(index, 1);
         }
         
      },
      
      calculateBudget : function(){
        
         // calculate total income and expenses
         calculateTotal('exp');
         calculateTotal('inc');
         
         // calculate the budget: income - expenses
         data.budget = data.totals.inc - data.totals.exp;
         
         // calculate the percentage of income and expense
         if(data.totals.inc > 0){
            data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
         }else{
            data.percentage = -1;
         }
      },
      
      calculatePercentage : function(){
         data.allItems.exp.forEach(function(cur){
            cur.calPercentage(data.totals.inc);
         });
      },
      
      getPercentages : function(){
         var allPerc = data.allItems.exp.map(function(cur){
            return cur.getPercentage();
         });
         return allPerc;
      },
      
      getBudget : function(){
        return {
           budget : data.budget,
           totalInc : data.totals.inc,
           totalExp : data.totals.exp,
           percentage: data.percentage
        } 
      },
      
      testing : function(){
         console.log(data);
      }
   }
   
   
})();


//*******************************************UI MODULE******************************************
var UIcontroller = (function(){
   
   var DOMstrings = {
      type        : '.add__type',
      description : '.add__description',
      inputValue  : '.add__value',
      addBtn      : '.add__btn',
      incomeContainer : '.income__list',
      expenseContainer: '.expenses__list',
      budgetLabel : '.budget__value',
      incomeLabel : '.budget__income--value',
      expensesLabel : '.budget__expenses--value',
      percentageLabel : '.budget__expenses--percentage',
      container : '.container',
      expensesPercLabel : '.item__percentage',
      monthLabel : '.budget__title--month'
   }
   
   var formatNumber = function(num, type){
      var numSplit, int, dec;
      /*
      * + or - num
      * exactly 2 decimal points
      * comma separating the thousands
      */

      num = Math.abs(num);
      num = num.toFixed(2);

      numSplit = num.split('.');

      int = numSplit[0];
      if(int.length > 3){
         int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
      } 

      dec = numSplit[1];

      return (type === 'exp' ? '-' : '+') + ' ' + int +'.'+ dec;
   };
   
   
   return {
      getInput : function(){
         return { 
            type : document.querySelector(DOMstrings.type).value, // will be inc or exp for income & expense
            description : document.querySelector(DOMstrings.description).value,
            value : parseFloat(document.querySelector(DOMstrings.inputValue).value)
         }
      },
      
      addListItem : function(obj, type){
         var html, newHtml, element;
         // create HTML string with placeholder text
         
         if(type === 'inc'){
            element = DOMstrings.incomeContainer;
            
            html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            
         }else{
            element = DOMstrings.expenseContainer;
            
            html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button</div></div></div>';
         }
         
         // Replace the placeholder text with actual data
         newHtml = html.replace('%id%', obj.id);
         newHtml = newHtml.replace('%description%', obj.description);
         newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));
         
         // Insert the HTML into the DOM
         document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
         
      },
      
      deleteListItem : function(selectorID){
         
         var el = document.getElementById(selectorID);
         el.parentNode.removeChild(el);
         
      },
      
      clearFields : function(){
         var fields, fieldsArr;
         
         fields = document.querySelectorAll(DOMstrings.description +', ' + DOMstrings.inputValue);
         
         //console.log(fields);
         
         fieldsArr = Array.prototype.slice.call(fields);
         
         fieldsArr.forEach(function(currentItem, index, array){
            currentItem.value = '';
         });
         
         fieldsArr[0].focus();
      },
      
      displayBudget : function(obj){
         var type;
         (obj.budget > 0) ? type = 'inc' : type= 'exp';
         document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type); document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc'); document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp'); 
         
         if(obj.percentage > 0){
            document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
         }else{
            document.querySelector(DOMstrings.percentageLabel).textContent = '--';
         }
      },
      
      displayPercentage : function(percentages){
        
         var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);
         
         var nodeListForEach = function(list, callback){
            for(var i=0; i < list.length; i++){
               callback(list[i], i);
            }
         };
         
         nodeListForEach(fields, function(current, index){
            
            if(percentages[index] > 0){
               current.textContent = percentages[index] + '%';
            }else{
               current.textContent = '--';
            }  
         });
         
      },
      
      displayMonth : function(){
         var now, months, month, year;
         now = new Date();
         month = now.getMonth();
         year = now.getFullYear();
         
         months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
         document.querySelector(DOMstrings.monthLabel).textContent = months[month] + ' ' + year;
      },
      
      changedType : function(){
        var fields = document.querySelectorAll(
            DOMstrings.type + ',' +
            DOMstrings.description + ',' +
            DOMstrings.inputValue
        );
         
         fields.forEach(function(current){
            current.classList.toggle('red-focus');
         });
         
         document.querySelector(DOMstrings.addBtn).classList.toggle('red');
      },
      
      getDOMstrings : function(){
         return DOMstrings;
      }
   }
   
})();

//**********************************************APP CONTROLLER****************************************
var controller = (function(budgetCtrlr, uiCtrlr){
   
   var setupEventListener = function(){
      var DOM = uiCtrlr.getDOMstrings();
      document.querySelector(DOM.addBtn).addEventListener('click', ctrlrAddItem);
   
      // also do the same as above for user presses Enter key
      document.addEventListener('keypress', function(event){
         // console.log(event);
         if(event.keyCode === 13 || event.which === 13){
            ctrlrAddItem();
         }
      });
      
      document.querySelector(DOM.container).addEventListener('click', ctrlrDeleteItem);
      
      document.querySelector(DOM.type).addEventListener('change', uiCtrlr.changedType)
   };
   
   var updateBudget = function(){
      
      // 1. Calculate the budget
      budgetCtrlr.calculateBudget();
      
      // 2. Return the budget
      var budget = budgetCtrlr.getBudget();

      // 3. Display the budget on the UI
      UIcontroller.displayBudget(budget);
      
   };
   
   var updatePercentages = function(){
       
      // 1. Calculate percentages
      budgetCtrlr.calculatePercentage();
      
      // 2. Read percentages from the budget controller
      var percentages = budgetCtrlr.getPercentages();
      
      // 3. update the UI with the new percentages
      UIcontroller.displayPercentage(percentages);
      
   };
   

   var ctrlrAddItem = function(){
      var input, newItem;
      
      /*--TODO LIST-----*/
      
      // 1. Get the input field data
      input = uiCtrlr.getInput();
      
      if(input.description !== "" && !isNaN(input.value) && input.value > 0){
         // 2. Add the item to the budget controller
         newItem = budgetCtrlr.addItem(input.type, input.description, input.value);

         // 3. Add the item to the UI
         UIcontroller.addListItem(newItem, input.type);

         // 3a. Clear the input fields
         UIcontroller.clearFields();

         // 4. calculate and update the budget
         updateBudget();
         
         // 5. calculate and update percentages
         updatePercentages();
      }
      
   }
   
   var ctrlrDeleteItem = function(event){
      //console.log(event.target);
      var itemID, splitID, type, ID;
      
      itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
      
      if(itemID){
         
         // inc-1
         splitID = itemID.split('-');
         type = splitID[0];
         ID = parseInt(splitID[1]);
         
         // 1. Delete the item from our data structure
         budgetCtrlr.deleteItem(type, ID);
         
         // 2. Delete the item from the UI
         UIcontroller.deleteListItem(itemID);
         
         // 3. Update and show the new Budget
         updateBudget();
         
         // 4. calculate and update percentages
         updatePercentages();
      }
   }
   
   return {
      init : function(){
         console.log('App has started');
         UIcontroller.displayMonth();
         updateBudget({
           budget : 0,
           totalInc : 0,
           totalExp : 0,
           percentage: -1
         });
         setupEventListener();
      }
   }
   
})(budgetController, UIcontroller);



controller.init();














