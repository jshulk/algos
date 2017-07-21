Algo
1. Scan the postfix expression from left to right.
2. if the token is an operand push it to the outputStack.
3. if the token is an operator, pop the top two operands from the outputStack, apply the operator and push the
   result back on to the outputStack.
4. Repeat for all the tokens
5. Finally, pop the outputStack, which will give the result of evaluation.
