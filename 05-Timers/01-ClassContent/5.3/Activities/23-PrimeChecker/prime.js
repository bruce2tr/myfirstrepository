//take in a number 

// var userInput = ; 

//var array of prime numbers; 

// if userinput is divisible by a prime number from array

function primeCheck(number){


    for (var i=2; i<number;i++){
        if (number % i === 0){
            return false;
        }
    }
    return number > 1;
}