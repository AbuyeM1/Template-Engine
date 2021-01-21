// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");


class Engineer extends Employee {
    constructor(name, id, email,  Github) {
        super(name, id, email);
        this.github = github;

    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }

}
function generateHtmlTeam(data, response) {
    return `<!doctype html>
    <html lang "en">
   
   </html> `
}
module.exports = Engineer