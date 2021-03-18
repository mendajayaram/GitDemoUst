//Q5. //write a programe for displaying employee data
   // create base class with name Employee containing property (id,name,designation) 
   // and one methode which will display all these information.
   // create sub class with name Payslip containing property total salary, 
   // DA=25% of basic salary,HRA=800,tax=15% of basic salary. 
   // and create one methode which will display all information from Employee class 
   // as well as gross salary,DA,Tax.
   class Employee{
    displayempData() {
        throw new Error("Method not implemented.");
    }
    protected Empid:number;
    protected EmpName:string;
    protected Empdesignation:string;
    
    constructor(Empid:number,EmpName:string,Empdesignation:string){
        this.Empid=Empid;
        this.EmpName=EmpName;
        this.Empdesignation=Empdesignation;
        
    }
    employeedisplay(){
        console.log(`Employeeid: ${this.Empid}\nEmployeename: ${this.EmpName}\nEmpployeedesignation: ${this.Empdesignation}`)
    }
   
}
var empobj = new Employee(10,"jayaram","Developer");
empobj.employeedisplay();

class Payslip extends Employee{
     //DA=25% of basic salary,HRA=800,tax=15% 
    totalsalary: number;
    
   
    constructor(Empid:number,EmpName:string,Empdesignation:string,totalsalary:number){
       super(Empid,EmpName,Empdesignation);
       this.totalsalary=totalsalary;
       
        
      
    }
    employeedisplay(){
   var  da:number=(this.totalsalary)*(25/100);
     var hra:number=800;
    var  tax:number=(this.totalsalary)*(15/100);
console.log(`Employeeid: ${this.Empid}\nEmployeename: ${this.EmpName}\nEmpployeedesignation: ${this.Empdesignation}\nEmployeetotalsalary: ${this.totalsalary}\nEmployeeda: ${da }\nEmpployeehra: ${hra}\nEmpployeetax: ${tax}`)
    } 

}
var Pobj=new Payslip(1002,"sam","Developer",12345);

Pobj.employeedisplay();
