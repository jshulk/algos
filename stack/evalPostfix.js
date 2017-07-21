(function(){
  var postFixExpression = '242*+5+';
  var tokens = postFixExpression.split("");
  var outputStack = [];
  for( var i = 0; i < tokens.length; i++) {
    var token = tokens[i];
    if(isOperator(token)) {
      outputStack.push(applyOperator(token));
    } else {
      outputStack.push(token);
    }
  }

  var result = outputStack.pop();
  console.log('result', result);

  function isOperator(token) {
    return (token === '+' || token === '-' || token === '*' || token === '/');
  }

  function applyOperator(token) {
    var op1 = +outputStack.pop();
    var op2 = +outputStack.pop();
    if (token === '+') {
      return op2 + op1;
    } else if (token === '-') {
      return op2 - op1;
    } else if (token === '*') {
      return op2 * op1;
    } else {
      return op2 / op1;
    }
  }

})();
