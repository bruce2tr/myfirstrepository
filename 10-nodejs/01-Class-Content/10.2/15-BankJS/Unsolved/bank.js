var fs = require("fs");

// Next, we store the text given to us from the command line.
var transaction = process.argv[2];
var value = process.argv[3];

switch (transaction){
    case "total":
        total();
        break;

    case "deposit":
        deposit();
        break;
    
    case "withdraw":
        withdraw();
        break;

    case "lotto":
        lotto();
        break;
}

function total() {

    fs.readFile("bank.txt", "utf8", function(err, data){
        if (err) {
            return console.log(err);
        }
        data = data.split(", ");
        var result = 0;

        for (var i = 0; i<data.length; i++){
            if (parseFloat(data[i])){
                result += parseFloat(data[i]);
            }
        }
        console.log("You have a total of " + result.toFixed(2));
    })
};

function deposit() {

    fs.appendFile("bank.txt", ", " + value, function(err){
        if (err) {
            return console.log(err);
        }
    });
    console.log("Deposited: $" + value + ".");
};

//going to want to get some help on this one, getting NaN in the .txt file but seeems to be working otherwise. 
function withdraw() {
    fs.appendFile("bank.txt", ", -" + value, function(err){
        if (err) {
            return console.log(err);
        }
    })
    console.log("Withdrew: $" + value + ".");
};

function lotto(){
    fs.appendFile("bank.txt", ", -.25", function(err){
       if (err){
           return console.log(err);
       } 
    })
    
    var chance = Math.floor(Math.random() * 10 + 1);

    if (chance === 1) {
        fs.appendFile("bank.txt", ", 2", function(err){
            if (err) {
                return console.log(err);
            }
        });
        console.log("Congrats! You won the lotto!");
    }
    else {
        console.log("Sorry! You just lost $0.25!")
    }
    
};
// # BankJs

// ## File

// * [`bank.txt`](Unsolved/bank.txt)

// ## Instructions

// * Starting from scratch, build a Node application called `bank.js` which takes in user inputs via the command line to register bank transactions.

// * The transactions possible are:

//   * `total` - this should tally up all of the money in the bank balance and display it for the user.

//   * `deposit <number>` - this should add a positive amount to the bank balance. (No need to display the total here)

//   * `withdraw <number>` - this should add a negative amount to the bank balance. (No need to display the total here)

//   * `lotto` - this should subtract an amount from the bank balance, but if a random number is hit it should add back a larger amount into the bank balance.

// * For all deposits, withdrawals, or lotto purchases the transaction should be registered in the `bank.txt` file.

// ### Hints

// * Consider making a series of if-else or switch-case statements to identify the "type" of transaction and the "amount" involved (if relevant).

// ### Bonuses

// * If you finish early, consider finding creative ways to expand the functionality. Perhaps add a login, perhaps always provide the total, perhaps add a warning if the user tries to withdraw more than they hold, etc.

