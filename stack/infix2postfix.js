(function(){
  var expression = 'a+b*c+d';
  var output = [];
  var operatorStack = [];
  var tokens = expression.split("");
  var currentOperator;

  function isOperator (token) {
    if(token === '+' || token === '-' || token === '*' || token === '/') {
      return true;
    } else {
      return false;
    }
  }

  function isAHigherThanB(a, b){
    if (a === '/' && (b !== '/')) return 1;
    else if (a === '*' && (b !== '*') && (b !== '/')) return 1;
    else if (
      (a === '+' && b === '-')
     || (a === '-' && b === '+')
     || (a === '/' && b === '/')
     || (a === '*' && b === '*')
     || (a === '-' && b === '-')
     || (a === '+' && b === '+'))
      return 0;
    else
      return -1;
  }

 for ( var i = 0; i < tokens.length; i++) {
   var token = tokens[i];
   if(isOperator(token)) {
     if(operatorStack.length === 0 || (operatorStack.length !== 0 && isAHigherThanB(token, operatorStack[operatorStack.length - 1]) === 1)) {
       operatorStack.push(token);
     } else {
       //pop operator stack until the element at the top of the stack if less than or equal to the token
       for (var j = operatorStack.length - 1; j >= 0 ; j--) {
          currentOperator = operatorStack[j];
          if (isAHigherThanB(currentOperator, token) !== -1) {
            output.push(operatorStack.pop())
          }
       }
       operatorStack.push(token);
     }
   } else {
     output.push(token);
   }
 }


while(operatorStack.length !== 0) {
  output.push(operatorStack.pop());
}

 console.log(output.join(""));

})();
