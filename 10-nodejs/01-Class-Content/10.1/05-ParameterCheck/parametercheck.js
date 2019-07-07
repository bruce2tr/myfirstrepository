//One way to solve 
console.log(process.argv[2] === process.argv[3]);


//Second way to solve 
var a = process.argv[2];
var b = process.argv[3];

if (a === b) {
  console.log(true);
}
else {
  console.log(false);
}