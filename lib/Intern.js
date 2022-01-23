// calling/linking parent class 
const Employee = require('./Employee');
//child class
class Intern extends Employee {
  constructor(name, id, email, school) {
    // calling employee constructor
    super(name, id, email);

    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;