function SumArray (arr, n) {
  // Your code here:
 for(let i=0;i<arr.length;i++){
   for(let j=i +1;j<arr.length;j++){
    if(arr[i]+arr[j]===n){
      return true
    }
   }
 }
 return false


}

console.log(SumArray([2, 4, 5, 9], 9))//(true)
console.log(SumArray([2, 4, 5, 9], 12))//(false)
console.log(SumArray([2, 5, 9], 4))//(false)
module.exports = SumArray
