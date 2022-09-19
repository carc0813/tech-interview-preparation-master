function FindNeedle (haystack, needle) {
  // Your code here:
  for(let i=0;i<haystack.length;i++){
   if(haystack.slice(i, i + needle.length)===needle){
     return i
   }
  }
   return -1
}


console.log(FindNeedle('react-redux', 'redux'))//(6)
console.log(FindNeedle('pinky', 'puntual'))//(-1)
console.log(FindNeedle('rereredux', 'reredux'))//(2)

module.exports = FindNeedle



