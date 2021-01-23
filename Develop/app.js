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

// Questions for Manager
const confirmManager = [{type: 'confirm', name: 'Manager',  message: 'Are you a manager?'
}];
const managersBio = [{   type: "input",   name: "managers_name",   message: "What is your name?" },

    {type: "input", name: "managers_id",message: "What is your id?"},

    {type: "input", name: "managers_email",message: "What is your email?"},

    {type: "input", name: "managers_officeNumber", message: "What is your office phone number?"
    }
];
// Questions for Engineer
const engineerQuestions = [{type: "input",name: "engineers_name",message: "What is your engineer's name?"},

    {type: "input", name: "engineers_id", message: "What is your engineer's id?" },

    {type: "input", name: "engineers_email", message: "What is your engineer's email?"},

    { type: "input", name: "engineers_gitHub", message: "What is your engineer's GitHub username?" }
];
// Questions for Intern
const internQuestions = [{type: "input",name: "interns_name",message: "What is your intern's name?"},

    {type: "input",name: "interns_id", message: "What is your intern's id?"},

    {type: "input",name: "interns_email", message: "What is your intern's email?" },

    {type: "input",name: "interns_school", message: "What is your intern's school?"
    }
];
// choices list for if wants add more members
const list = [{
    type: "list",
    name: "teamMember_type",
    choices: ["Engineer", "Intern", "I don't want to add more team members"],
    message: "Select the role to add in your team?"
}];

inquirer.prompt(confirmManager).then(ans => {
    if (ans.Manager === true) {
    promptManager();
    } else {
    promptMyManager();
    }
});

const promptNext = () => {
    inquirer.prompt(list).then(data => {
    switch (data.teamMember_type) {
    case "Engineer":
    promptEngineer();
    break;
    case "Intern":
    promptIntern();
    break;
    default:
    createHtml();
        }
    });
};

const promptManager = () => {
    inquirer.prompt(managersBio).then(ans => {
    console.log(ans);
    mainArr.push(new Manager(ans.managers_name, ans.managers_id, ans.managers_email, ans.managers_officeNumber));
    promptNext();
    });
};
const promptEngineer = () => {
    inquirer.prompt(engineerQuestions).then(ans => {
    console.log(ans);
    mainArr.push(new Engineer(ans.engineers_name, ans.engineers_id, ans.engineers_email, ans.engineers_gitHub));
    promptNext();
    });
};
const promptIntern = () => {
    inquirer.prompt(internQuestions).then(ans => {
    console.log(ans);
    mainArr.push(new Intern(ans.interns_name, ans.interns_id, ans.interns_email, ans.interns_school));
    promptNext();
    });
};

// Create HTML
const createHtml = () => {
    console.log('this is new html');
    console.log(render(mainArr));
    render(mainArr);
    fs.writeFile('team.html', render(mainArr), function(err){
        if(err) throw err;
    })
};










