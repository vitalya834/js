//Singline  Comment
/* Multi-line
wei  man sieht */

console.log("Hello, World!");
console.log("1+1"); 
console.log("Hello Welt".length);
console.log("Hello Welt".toUpperCase());
console.log("Hello Welt"[0]);
console.log("Hello Welt"[4]);
console.log(1==1);
console.log(1!=1);
console.log(1>1);
console.log(1>=1);
console.log(1<1);
console.log(1<=1);
console.log("V" + "i" + "t" + "a" + "l" + "i"  + "i");
// Error! Make it work
console.log("Hallo");
// Error! Make it work
console.log("That doesnt work");
// should return true. Change only the operator to fix it.
console.log(50 + 2 >= 52);
// should be false. Change only the operator to fix it.
console.log("333" === 333);
// Wrong result: Expected 555 not 855. Change only the operator to fix it.
console.log((600 + 510) / 2);
// Wrong result: Expected a Number 4 received 22
console.log(2 + 2);
console.log(25 / 5); // Result: 5
console.log(50 / 10); // Result: 5
console.log(25 / 5=== 50/10); // Result: 5

// TODO: implement welcomeMsg function

function welcomeMSG(name) {

    return `Welcome ${name}!`;
}
console.log(welcomeMSG("Alice")); // Expected: "Welcome Alice!"

function calcGrossPrice(netPrice, tax) {

    return netPrice + netPrice * tax;

}

console.log(calcGrossPrice(20, 0.19)); // Expected: 23.8
console.log(calcGrossPrice(40, 0.16)); // Expected: 46.4


function addPositive(a, b) {
    return Math.abs(a) + Math.abs(b);
}

// TODO: Implement the addPositive function

console.log(addPositive(2, 3));
// result1 should be 5

console.log(addPositive(3, -5));
// result2 should be 8

console.log(addPositive(-1, -8));
// result2 should be 9


///  04) Coding-Task: Variables
let userName = "Brad";
userName = "Jenna";

function getUserNameLength(name) {
    const result = name.length;
    return result;

}

console.log(getUserNameLength(userName) > 4)
// ______________ Should log true

// TODO: Implement the isString function


 function isString(value) {
        return typeof value === "string";
    }


console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined));
// result should be false

console.log(isString(""));
// result should be true

console.log(isString("John" + "Doe"));
// result should be true

 for (let i = 0; i < 5; i++) {
    console.log(i);
 }

// 05) Coding-Task: If & switch statements
let size = 0;
let result;
 for (let i = 0; i < 25; i++) {
    size += 1;
 
if (size > 20) {
  result = "Greater than 20"
} else if (size > 10) {
  result = "Greater than 10";
} else {
  result = "Lower than 10";
}

console.log("size=",size,"result=",result);

 }
// Returns Greater than 10 but should return Greater than 20