module.exports = function reverse (n) {
    let n1 = Math.abs(n);
    num = 0;
    while (n1 > 0) {
        num = num * 10 + n1 % 10
        n1 = Math.floor(n1 /= 10)
    }
    return num
}



/* module.exports = function reverse (n) {
    let n1 = Math.abs(n);
    let n2 = '';

    n2 = Number(String(n1).split('').reverse().join('')) 
  return n2
}


reverse(-5901)

 */
