
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
 

function charCount(text, char) {
    let count = 0;
   


// TODO: Implement the charCount function

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3



