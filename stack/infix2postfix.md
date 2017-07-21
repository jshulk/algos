Algo
1.Scan the expression from left to right
2. if token is an operand, send it to the output
3. if token is an operator
 a) if operator stack is empty or the current operator at the top of the operator stack is of lower precedence than our current token, push the token on to the stack.
 b) if current operator at the top of operator stack is of higher precedence than the current token, then continuously pop the operator stack and send it to the output, until we encounter an operator which is of lower precedence than current token
 finally, push the current token on to the operator stack.
 4. Once we are done with all the tokens, pop operators off the operator stack and send to the output.
