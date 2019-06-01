var average = 0;

function averageFunction(thisArray){
    

var sum = 0;
var denominator = 0;
average = 0;

for(var i = 0; i<thisArray.length; i++){
   sum = sum + thisArray[i];
   //sum += thisArray[i];
   denominator = denominator + 1; 
}
average = sum/denominator;
return average; 

}

console.log(averageFunction([1,4,7]))

// //other solution
// var average = function (numArr) {
//     var sum = 0;
//     for (var i = 0; i < numArr.length; i++){
//       sum += numArr[i];
//     }
//     return sum / numArr.length;
//   }

//   //other solution
//   function avgArray(arr) {
//     return arr.reduce(function(a, c) {
//       return a + c
//     }) / arr.length
//   }
