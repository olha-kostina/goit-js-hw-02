"use strict";
const findLongestWord = function(string) {
    let array = string.split(' ');
    let max = '';
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > max.length) {
            max = array[i];
        }
    }
    return max;
  };
  
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); 
  console.log(findLongestWord('Google do a roll')); 
  console.log(findLongestWord('May the force be with you')); 