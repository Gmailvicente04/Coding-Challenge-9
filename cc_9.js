// Task 1: Creating Employee Class
class Employee {
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    }
    
    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    }
    
    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

const emp1 = new Employee("Jack Daniels", 101, "Sales", 50000);
console.log(emp1.getDetails()); 
console.log(emp1.calculateAnnualSalary()); 

// Task 2: Creating Manager Class (Inheritance & Method Overriding)
class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary);
        this.teamSize = teamSize;
    }
    
    getDetails() {
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }
    
    calculateBonus() {
        return this.calculateAnnualSalary() * 0.1;
    }
}

const mgr1 = new Manager("Payton Pritchard", 201, "IT", 90000, 6);
console.log(mgr1.getDetails());
console.log(mgr1.calculateBonus());
