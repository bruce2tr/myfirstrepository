var inquirer = require("inquirer");

function Player(name, position, offense, defense){
    this.name = name;
    this.position = position;  
    this.offense = offense; 
    this.defense = defense;

    this.printStats = function(){
        console.log("Name: " + this.name);
        console.log("Position: " + this.position);
        console.log("Offense: " + this.offense);
        console.log("Defense: " + this.defense);
    }

}

function askQuestion

