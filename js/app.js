'use strict';

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function Employee(employeeId, fullName, department, level, imageUrl , salary) {
  this.employeeId = employeeId;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageUrl = imageUrl;
this.salary=0;

}
Employee.prototype.getSalary = function () {

  let balance=0;
  let netSalary=0;
  let tax=0;
  if (this.level == "Senior") {
    balance = getRndInteger(2000, 1500);
  }
  else if (this.level == "Mid-Senior") {
    balance = getRndInteger(1500, 1000);
    
  }
  else {
    balance = getRndInteger(1000, 500);
    
  }
  tax=balance*7.5 /100;
 
  

  netSalary = balance - tax;
  return netSalary;
}
const ghazi = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "");
const lana = new Employee(1001, "Lana Ali", "Finance", "Senior", "");
const tamara = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "");
const safi = new Employee(1003, "Safi Walid", "Administration", "Senior", "");
const omar = new Employee(1004, "Omar Zaid", "	Development", "Senior", "");
const rana = new Employee(1005, "Rana Saleh", "Development", "Senior", "");
const hadi = new Employee(1006, "Hadi Ahmad", "Finance", "Senior", "");

// Employee.prototype.render = function () {
//   document.write(`<p> ${this.fullName} : ${this.getSalary()} </p>`)
// }
// ghazi.render();
document.write("<br><br><br><br><br>")
document.write(` <p> ${ghazi.fullName} : ${ghazi.getSalary()}</p>`);
document.write(`<p>${lana.fullName} : ${lana.getSalary()}</p>`);
document.write(`<p>${tamara.fullName} : ${tamara.getSalary()}</p>`);
document.write(`<p>${safi.fullName} : ${safi.getSalary()}</p>`);
document.write(`<p>${omar.fullName} : ${omar.getSalary()}</p>`);
document.write(`<p>${rana.fullName} : ${rana.getSalary()}</p>`);
document.write(`<p>${hadi.fullName} : ${hadi.getSalary()}</p>`);








