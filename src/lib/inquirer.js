import inquirer from "inquirer";

export default function askForConfig() {
  const questions = [
    {
      name: "lat",
      type: "input",
      message: "Enter your latitude:",
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return "Please enter a vlid latitude";
        }
      }
    },
    {
      name: "long",
      type: "input",
      message: "Enter your longitude:",
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return "Please enter a vlid longitude";
        }
      }
    },
    {
      name: "method",
      type: "list",
      choices: [
        "Egypt",
        "ISNA",
        "Jafari",
        "JAKIM",
        "Karachi",
        "Makkah",
        "MF",
        "MWL",
        "Tehran"
      ],
      message: "Select a calculation method:",
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return "Please select a calculation method";
        }
      }
    }
  ];
  return inquirer.prompt(questions);
}
