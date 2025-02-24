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
