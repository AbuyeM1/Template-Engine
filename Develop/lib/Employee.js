// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, title,) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.title = title;
        
    }
    getName() {
        console.log(this.name);
        return this.name;

    }
    getEmail() {
        return this.email;
    }
    
    getRole() {
        
        return "Employee";
    }
    getId() {
        return this.id;
    }
    
}

module.exports = Employee
