// Para poder comprender el objetivo de esta actividad necesitamos saber ¿Qué es un stack? Un stack, también conocido como pila es LIFO (Last-In First-Out), es decir, el último en entrar es el primero en salir.
//
// En este caso, el ejercicio es implementar un stack que tenga los siguientes métodos:
//
// push(value) : añadir el elemento, value, al stack.
// pop() : sacar un elemento del stack.
// min() : obtener el elemento con el valor mínimo.
// peek(): obtener el elemento que está el en top del Stack

function Node(val) {
  // Your code here:
  this.value = val;
  this.next = null;
  this.minimo = Infinity;
}

function MinStack() {
  // Your code here:
  //minimo valor
  this.top = null;
}

MinStack.prototype.push = function (val) {
  //el siguiente top osea minimo 
  let previousTop = this.top;
  //este es el primer node 
  this.top = new Node(val);
  //siguiente es igual previous
  this.top.next = previousTop;
  //si no hay un siguiente ese es el minimo valor 
  if (!previousTop) this.top.minimo = val;
  //si valor es menorque el sgte minimo entonves top.minimo es el minimo
  else if (val < previousTop.minimo) this.top.minimo = val;
  //sino top y previous son elminimo
  else this.top.minimo = previousTop.minimo;
};

MinStack.prototype.pop = function () {
  let popped = this.top;
  this.top = this.top.next;
   //si no hay un sgte popped.value es el ultimo
  return popped.value;
};


MinStack.prototype.peek=function(){
  // valor del estack
  return this.top.value
}

MinStack.prototype.min=function(){
  //retor el valor minimo
  return this.top.minimo
}




let node = new Node(4)
console.log(node)

let minStack = new MinStack()
console.log(minStack)

minStack.push(5)
console.log(minStack)
minStack.push(3)
console.log(minStack)

console.log(minStack.pop())
console.log(minStack)

console.log(minStack.peek())

console.log(minStack)
minStack.push(3)
console.log(minStack.min())
console.log(minStack)
minStack.push(1)
console.log(minStack)
console.log(minStack.min())
console.log(minStack.pop())
console.log(minStack.min())


module.exports = {
  Node,
  MinStack,
};
