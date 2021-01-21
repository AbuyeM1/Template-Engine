// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, role, email, id, officeNumber){
        this.name = name;
        this.role = role;
        this.email = email;
        this.id = id;
        this.title = officeNumber;
    }
    getName() {
        console.log(this.name);
        return this.name;
    }
    getRole() {
        console.log(this.role);
        return this.role;
    }
    getEmail() {
        // console.log(this.email);
        return this.email;
    }
    getId(){
        console.log(this.id);
        return this.id;
    }
    getOfficeNumber() {
        console.log(this.officeNumber);
        return this.officeNumber;
    }
}
 function generateHtmlTeam(data, response) {
     return `<!doctype html>
     <html lang="en">
     <head>
     </head>
     <body>
     </body>
     </html>`
}
module.exports = Employee
