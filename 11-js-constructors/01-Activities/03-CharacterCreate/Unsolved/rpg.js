// Each character created using your constructor should have the following properties...

//   * Name: The character's name --> String

function Character(profession, gender, age, strength, hp) {
  this.profession = profession;
  this.gender = gender;
  this.age = age;
  this.strength = strength;
  this.hp = hp;
  this.printStats = function() {
   console.log(this);
    console.log(
      "Profession: " +
        this.profession +
        "\nGender: " +
        this.gender +
        "\nAge: " +
        this.age +
        "\nStrength: " +
        this.strength +
        "\nHp: " +
        this.hp
    );
    console.log("\n-------------\n");
  };
  this.isAlive = function() {
    if (this.hp > 0) {
      console.log("The " + this.profession + " is alive!");
      console.log("\n-------------\n");
      return true;
    }
    else {
        console.log("I'm dead!");
      console.log("\n-------------\n");
      return false;
    }
  };
  this.attack = function(victim) {
    victim.hp -= this.strength;
  };
  this.levelUp = function() {
    this.age += 1;
    this.strength += 5;
    this.hp += 25;
  };
}

//   * Profession: What the character does for a living --> String

//   * Gender: The character's gender --> String

//   * Age: The character's age --> Integer

//   * Strength: Abstraction for how strong the character is --> Integer

//   * HitPoints (HP): Abstraction for how much health the character has --> Integer

//   * PrintStats: Function which prints all of a character's properties to the screen

//   * Once you have created your constructor, create two new characters and print their properties to the screen
var bob = new Character("Boss", "Male", 32, 2, 10);
var sue = new Character("Queen", "Female", 29, 1, 15);

// bob.printStats();
// sue.printStats();

bob.isAlive();
bob.attack(sue);
bob.levelUp();

bob.armor = 10;
sue.heal = function() { this.hp += 5;}

// bob.printStats();
// sue.printStats();

//   * Fool around and get comfortable with your constructor before moving onto the next parts of the activity

// * Now that you feel comfortable with your constructor, it is time to start making this character creation system a little more reactive by adding in some more methods...

//   * IsAlive: Function which prints whether or not this character is alive by looking into their hitpoints and determining whether they are above or below zero.

//   * Attack: Function which takes in a second character's hitpoints and subtracts this character's strength from it.

//   * LevelUp: Function which increases this character's Age by 1, their Strength by 5, and their HitPoints by 25.

// * BONUS: After completing the previous sections and making sure they work, you now have everything you need to create a very basic RPG where two characters fight one another. Don't worry if you cannot finish this part of the activity as, by completing the above sections you are well on your way to mastering constructors!
while (bob.isAlive() == true && sue.isAlive() == true) {
  bob.attack(sue);
  sue.attack(bob);
  bob.printStats();
  sue.printStats();
}


