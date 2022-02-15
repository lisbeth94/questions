/**
 * On this module you should write your answer to question #3.
 * This file would be executed with the following command:
 * $ node script.js 'a * (b + c)'
 */

const args = process.argv.slice(-1);
console.log(`Running question #3 with args ${args}`);

/**
 * Check if a string has correct use of parenthesis.
 *
 * @param {String} str - String to be evaluated
 * @returns {Boolean} Returns true if string is valid.
 */
function parenthesisChecker(str) {
  // TODO: Implement validation logic
    let characters = str.toString()
    let brackets = "()[]{}"
    let bracketsInCharacters= []
    let pile = [] 
    characters.split('').forEach(function(char){
      if(brackets.includes(char)){
        bracketsInCharacters.push(char);
      }
    })
    for(let bracket of bracketsInCharacters) {
      let bracketsIndex = brackets.indexOf(bracket)  
      if(bracketsIndex % 2 === 0) {
        pile.push(bracketsIndex + 1)
      } else {
        if(pile.pop() !== bracketsIndex) {
          return false;
        }
      }
    }
    return pile.length === 0
}

const isValid = parenthesisChecker(args);
console.log(`parenthesisChecker("${args}") = ${isValid}`);
