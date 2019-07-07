// var firstNum = process.argv[3];
// var secondNum = process.argv[4];
// var operation = process.argv[2];


//Live coding with Toby 

//grab the arguments 

var operand = process.argv[2];
var num1 = parseFloat(process.argv[3]);
var num2 = parseFloat(process.argv[4]);
var outputNum;

//determine operand selected...
//based on that, we run the appropriate math 

if (operand === "add") {
    outputNum = num1 + num2;
} else if (operand === "subtract"){
    outputNum = num1 - num2;
} else if (operand === "multiply"){
    outputNum = num1 * num2;
} else if (operand === "divide"){
    outputNum = num1 / num2;
} else if (operand === "remainder"){
    outputNum = num1 % num2;
} else if (operand === "exp"){
    // node calculator.js exp 7 2 
    outputNum = Math.pow(num1, num2);
}
// Algebra one is kind of hard 
// node calculator.js algebra 4x+2=10;
//else if (operand === "exp"){
    
    //outputNum = Math.pow(num1, num2);
//}



console.log(outputNum);