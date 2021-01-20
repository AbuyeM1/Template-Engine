// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, title){
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = title;
    }
    getName() {
        console.log(this.name);
        return this.name;
    }
    getEmail() {
        // console.log(this.email);
        return this.email;
    }
    getTitle() {
        console.log(this.title);
        return this.title;
    }
}
module.exports = Employee
