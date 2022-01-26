'use strict';
let empForm = document.getElementById('empForm');
let empSec = document.getElementById('empSec');
empSec.style.display="inline";
let allEmplo = [];
checkLocalAndPush();
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function Employee(employeeId, firstName ,lastName, department, level ,salary,imageUrl ) {
  this.employeeId = employeeId;
  this.firstName=firstName;
  this.lastName=lastName;
  this.fullName = firstName+" "+lastName;
  // let firstNameCap=this.firstName[0].toUpperCase()+this.firstName.substring(1);
  this.department = department;
  this.level = level;
  this.imageUrl = `./assets/${this.firstName}.jpg` ;
  this.salary=salary;

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
  tax= Math.floor (balance*7.5 /100);
 
  

  netSalary = balance - tax;
  this.salary=netSalary;
  
  return netSalary;
}
function render  (empFromLS) {
  empSec.innerHTML="";
  for (let i = 0; i < empFromLS.length; i++){
  let div1 = document.createElement('div');
let img = document.createElement('img');
let div2 = document.createElement('div');
let h5 = document.createElement('h5');
// let p = document.createElement('p');

       div1.setAttribute("class","card")
       img.setAttribute("class","img")
       div1.setAttribute
      div1.appendChild(img);
      h5.textContent=` Name: ${empFromLS[i].fullName}  ID:${empFromLS[i].employeeId}  Department:${empFromLS[i].department} 
                        Level:${empFromLS[i].level}
                        Salary:${empFromLS[i].salary}
      `;
      div2.setAttribute("class","container");
      div2.appendChild(h5);
      div1.appendChild(div2);
      
     

      img.setAttribute('src',empFromLS[i].imageUrl);
     empSec.appendChild(div1);
     
  }
}
var generatID = (function(num) {
  return function() {
    var str = String(num++);
    while (str.length < 4) str = "0" + str;
    return str;
  }
})(1);
function handelSubmit(event){
  event.preventDefault();
  let firstName = event.target.fn.value ;
  let lastName = event.target.ln.value ;
  let department=event.target.departments.value;
  let level=event.target.Level.value;
  let imag=event.target.img.value;
   let newemp = new Employee(generatID(),firstName[0].toUpperCase()+firstName.substring(1),lastName,department, level);
  let salary1=newemp.getSalary();
  allEmplo.push(newemp);
  let jsonArr = toJSON();
  saveToLocalS(jsonArr);
  render(readFromLocalS());

}
function checkLocalAndPush() {
  if (allEmplo.length == 0) {
      let arr = readFromLocalS();
      if (arr.length != 0) {
          allEmplo = arr;
      }
  }
}
function readFromLocalS() {
  let jsonArr = localStorage.getItem('employees');
  let arr = JSON.parse(jsonArr);
  if (arr !== null) {
      return arr;
  } else {
      return [];
  }
}
function toJSON() {
  let jsonArray = JSON.stringify(allEmplo);
  return jsonArray;
}
function saveToLocalS(jsonArray) {
  localStorage.setItem('employees', jsonArray)
}
render(readFromLocalS());
empForm.addEventListener('submit', handelSubmit);


      // let firstNameCap=this.firstName[0].toUpperCase()+this.firstName.substring(1);

    // const ghazi = new Employee(1000, "Ghazi","asad", "Administration", "Senior");
    // ghazi.render();























// const ghazi = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "");
// const lana = new Employee(1001, "Lana Ali", "Finance", "Senior", "");
// const tamara = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "");
// const safi = new Employee(1003, "Safi Walid", "Administration", "Senior", "");
// const omar = new Employee(1004, "Omar Zaid", "	Development", "Senior", "");
// const rana = new Employee(1005, "Rana Saleh", "Development", "Senior", "");
// const hadi = new Employee(1006, "Hadi Ahmad", "Finance", "Senior", "");

// Employee.prototype.render = function () {
//   document.write(`<p> ${this.fullName} : ${this.getSalary()} </p>`)
// }
// ghazi.render();
// document.write("<br><br><br><br><br>")
// document.write(` <p> ${ghazi.fullName} : ${ghazi.getSalary()}</p>`);
// document.write(`<p>${lana.fullName} : ${lana.getSalary()}</p>`);
// document.write(`<p>${tamara.fullName} : ${tamara.getSalary()}</p>`);
// document.write(`<p>${safi.fullName} : ${safi.getSalary()}</p>`);
// document.write(`<p>${omar.fullName} : ${omar.getSalary()}</p>`);
// document.write(`<p>${rana.fullName} : ${rana.getSalary()}</p>`);
// document.write(`<p>${hadi.fullName} : ${hadi.getSalary()}</p>`);








