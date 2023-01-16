module.exports = function reverse (n) {
    let n1 = n
    if (n1 < 0) {
        n1 *= -1
    }
    let n2 = '';

    n2 = Number(String(n1).split('').reverse().join('')) 
  return n2
}
