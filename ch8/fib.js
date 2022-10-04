function fib(num) {
  if (num === 0) return 0;
  else if (num === 1) return 1;
  else return fib(num - 1) + fib(num - 2);
}

console.log(fib(4));
console.log(fib(10));
console.log(fib(28));
console.log(fib(35));
