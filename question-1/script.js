/**
 * On this module you should write your answer to question #1.
 * This file would be executed with the following command (N=100):
 * $ node script.js 100
 */

const args = process.argv.slice(-1);
console.log(`Running question #1 with args ${args}`);
const number = parseInt(args[0]);

function fibonacci(n) {
    if (n < 3) return n;
    let first = 1;
    let second = 2;
    for (let i = 2; i < n; i++) {
      const current = first + second;
      first = second;
      second = current;
    }
  
    return second;
 }

console.log(`Can climb stairs ${fibonacci(number)} ways`);
