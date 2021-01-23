const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { type } = require("os");
 let mainArr = [];
// function promptUser() {
//     inquirer.prompt([ 
//         {
//         type: "input",
//         name: "name",
//         message: "What is your name?"
//         }
//     ])
//     .then(function(response) {

//         console.log(response);
//       if (response.name == "manager"){
//         //   console.log("manager here");
//           promptManager();
//       }
//     })


// };
promptManager(); 
    function promptManager() {
        inquirer.prompt([ 
           {
           type: "input",
           name: "name",
           message: "What is your name?"
           },
           {
               type: "input",
               name: "id",
               message: "Please enter a id"
           },
           {
               type: "input",
               name: "email",
               message: "What is your email account?"
           },
           {
               type: "input",
               name: "officeNumber",
               message: "What is your office number?"
           },
           {
               type: "input",
               name: "title",
               choices: ["Manager", "Engineer", "Intern"],
           },
           {
               type: "input",
               name: "username",
               message: "What is your Github username?"
           }

       ]) .then(function(response) {
           console.log(response);
             console.log("the user is a manger")
             const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
             mainArr.push(manager)
             console.log(mainArr)
            const html =  render(mainArr);
            console.log(html)
        
            fs.writeFile(outputPath, html, function(err, result){
                if(err) console.log(err)
            }); 
       })
       
    }

   

    


  







// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

// 
//




/*
 first promt title 
 swicht(title){
     if(tiltie manager prompt manager
        if title emginer prompt enginner 
        if ti
 }
*/

