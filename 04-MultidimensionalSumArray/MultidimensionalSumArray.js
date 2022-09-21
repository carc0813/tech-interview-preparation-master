function mdArraySum(arr, sum = 0) {
  // Your code here:
  for(const element of arr){
    if(typeof element === "number") sum+=element
    else sum=mdArraySum(element,sum)
  }
  return sum
}
console.log(mdArraySum([1, 2, 3, 4])); //(10)
console.log(mdArraySum([[2, 4], [1], [4, 2, 1]])); //(14)
console.log(mdArraySum([2, [3, 4], 5, [-3, [6, [4, 5]]]])); //(26)
module.exports = mdArraySum;
