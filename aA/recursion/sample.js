// Write a method `factorial(n)` which takes a number and returns the factorial of n.
// A factorial is the product of all whole numbers between 1 and n, inclusive.
// For example, `factorial(5)` is 5 * 4 * 3 * 2 * 1 = 120.


function factorial(n) {
    if(n === 1){return n};
    return n * factorial(n-1);
}