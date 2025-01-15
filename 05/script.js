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
let count=0;
function oddEven(count)
{
     if (count % 2 ===0)      ///    ===  wichtig
    return "even";
    else
     
    return "odd";

}
// TODO: Implement the oddEven function

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even

// TODO: Implement the oldYoung function

let old = 0;
function oldYoung(old){


    switch(true){   
        case old< 16:   
            return "children";
            break;
            case old< 50:
            return "young person";
            break;
            case old>50:
            return "elder person";

            case old !== Number:
                return "invalid parameter";
                break;      


}
}

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person
console.log(oldYoung("test"));

// result should be invalid parameter