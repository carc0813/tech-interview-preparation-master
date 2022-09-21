function MaxValue(shares) {
  // Your code here:
  let minCompra = shares[0];
  let maxVenta = -Infinity;

  for (let i = 1; i < shares.length; i++) {
    const venta = shares[i];
    const actualVenta = venta - minCompra;
    if (venta < minCompra) minCompra = venta;
    if (actualVenta > maxVenta) maxVenta = actualVenta;
  }

  return maxVenta;
}
console.log(MaxValue([4, 3, 2, 5, 11])); //(9)
console.log(MaxValue([23, 7, 3, 4, 8, 6])); //(5)
module.exports = MaxValue;
