function HasBalancedBrackets(string) {
  // Your code here:
  let stack = [];
  const validateBrakets = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  for (const bracket of string) {
    if (validateBrakets[bracket]) stack.push(bracket);

    else if (validateBrakets[stack.pop()] !== bracket) return false;
  }

  return !stack.length;
}

console.log(HasBalancedBrackets("{[]()}")); //(true)
console.log(HasBalancedBrackets("{[(])}")); //(false)
console.log(HasBalancedBrackets("{[(")); //(false)
console.log(HasBalancedBrackets("{[([{()[]{}}])]}")); //(true)
console.log(HasBalancedBrackets("{[]}}")); //(false)
module.exports = HasBalancedBrackets;
