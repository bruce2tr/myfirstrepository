// Create a basic command line Node application using the inquirer package.
var inquirer = require("inquirer");
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm
debugger;

inquirer
  .prompt([
    // Here we create a basic text prompt.

    {
      type: "input",
      message: "What's your name?",
      name: "username"
    },
    {
      type: "input",
      message: "How are you today?",
      name: "feeling"
    },
    // Here we create a basic password-protected text prompt.
    {
      type: "password",
      message: "Please set a password",
      name: "password"
    },
    // Here we give the user a list to choose from.
    {
      type: "list",
      message: "How many times did you drink water today?",
      choices: ["1-2", "3-4", "5-6", "7-8", "8+"],
      name: "hydration"
    },
    // Here we ask the user to confirm.
    {
      type: "confirm",
      message: "Any sodas?",
      name: "confirm",
      default: true
    },
    {
      type: "checkbox",
      message: "What are all the ways you like to drink water?",
      name: "checkbox",
      choices: [
        "Glass",
        "Water bottle",
        "Water Fountain",
        "Faucet",
        "Hot",
        "Cold",
        "Icy Cold",
        "Room temp"
      ]
    }
  ])
  .then(function(inquirerResponse) {
    console.log("\nHi " + inquirerResponse.username);
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (inquirerResponse.password === "test") {
      console.log("You should drink at least 8 glasses of water per day!");
      console.log("Looks like you are feeling " + inquirerResponse.feeling);
      if (
        inquirerResponse.hydration == "1-2" ||
        inquirerResponse.confirm == true
      ) {
        console.log("Try drinking more water!");
      } else {
          //may want to use data. split 
          console.log(inquirerResponse);
          var containers = "";
          for (var i = 0; i < inquirerResponse.checkbox.length; i++){
            containers += inquirerResponse.checkbox[i] + " ";

          }
        console.log("I like drinking water from " + containers);
      }
    } else {
      console.log("Your password is incorrect! Try again to see me work");
    }
  });

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text.
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
