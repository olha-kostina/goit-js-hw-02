"use strict";
const formatString = function(string) {
    if(string.length <= 40) {
        return string;
    } else {
        let array = string.split('');
        let newArray = array.splice(0, 40);
        newArray.push('...');
        let newString = newArray.join('');
        return newString;
    }
  };

  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  
  console.log(formatString('Curabitur ligula sapien.'));
  
  console.log(
    formatString(
      'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
  );