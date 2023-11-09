class Employee{
	constructor(name,salary){
		this.name=name;
		this.salary=salary;
	}	
	calculate(){
		let res=12*this.salary;
		console.log(`Your anual salary is : ${res}`);
	}
}

class Mannager extends Employee{
	constructor(name,salary,department,bonus){
		super(name,salary)
		this.department=department;
		this.bonus=bonus;
	}
	calculate(){
		let sum=this.salary+this.bonus;
		console.log(`I am ${this.name}, My monthly salary is ${this.salary}, My department is ${this.department}, My bonus is ${this.bonus}, Your bonus with salary is ${sum}`);
	}
	
}

let emp=new Employee("rajesh",12000);
emp.calculate();
let man=new Mannager("rajesh",12000,"Designer",1200);
man.calculate();