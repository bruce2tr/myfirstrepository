
function fizzBuzz(){
for (var i = 1; i < 101; i++) {
    var current = i;
    if (current % 3 == 0 && current % 5 == 0) {
        console.log("Bizzfuzz");
    }
    else if (current % 3 == 0) {
        console.log("Fizz");
    }
    else if (current% 5 == 0){
        console.log("Buzz");
    }
    else{
        console.log(current);
    }
};
}

fizzBuzz();