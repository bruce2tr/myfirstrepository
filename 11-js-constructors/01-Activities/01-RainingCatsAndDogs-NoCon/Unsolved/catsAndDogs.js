// Make a dogs object with three keys...

var dog = {
    raining: true,
    noise: "Woof!",
    makeNoise: function(){
        if (this.raining == true){
        console.log("It's raining dogs!")
    }}
};
//   * First key called "raining" with a value of true

// * Second key called "noise" with a value of "Woof!"

// * Third key called "makeNoise" which contains a function which console.logs the noise to the screen if it is raining dogs

// * Make a cats object with three keys...
var cat = {
    raining: false,
    noise: "Meow!",
    makeNoise: function(){
        if (this.raining == true){
        console.log("It's raining cats!")
    }}
};

//   * First key called "raining" with a value of false

//   * Second key called "noise" with a value of "Meow!"

//   * Third key called "makeNoise" which contains a function which console.logs the noise to the screen if it is raining cats

// * Make the dog bark
dog.makeNoise();
cat.raining = true;
cat.makeNoise();

// * Make the cat meow

// * BONUS: Create a function called "massHysteria" which takes in both the cats and the dogs object and prints "DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!" if both of the `raining` keys are equal to true.
var massHysteria = function(cats, dogs){
if (cats.raining == true && dogs.raining == true){
    console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
}
};

massHysteria(cat, dog);
// * BONUS: Look to see if you can find any means to simplify your code further and further