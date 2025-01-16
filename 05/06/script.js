
let  end = 0;
function oddNumbers(start, end) {
  if (start < 0 || end < 0) {
    return "Please enter positive numbers only.";
}
let result = "";
    for (let i = start; i < end; i++) {
  


    if (i % 2 !== 0) {
        result += i + ",";
    }



  }
  return result;
}

// TODO: Implement the oddNumbers function

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11
 



function charCount(word, char) {
  if (char.length !== 1) {
    return;
}

// Приведение строки и символа к нижнему регистру
word = word.toLowerCase();
char = char.toLowerCase();

// Подсчёт количества вхождений
let count = 0;
for (let i = 0; i < word.length; i++) {
    if (word[i] === char) {
        count++;
    }
}

return count;
}


// TODO: Implement the charCount function

console.log("result =",charCount("hello", "l"));
// result should be: 2

console.log("result =",charCount("mama", "m"));
// result should be: 2

console.log("result =",charCount("Resümee", "e"));
// result should be: 3