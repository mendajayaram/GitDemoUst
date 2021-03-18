
//Basic Program
var no:number=10.0;
var greet:string="Welcome to every one";
var con:boolean=false;
console.log(no);
console.log(greet);
console.log(con);

//Array

var student: string[]=["jayaram","Ram","Naresh"];
var fritus:Array<string>=["Applle","mango"];
console.log(fritus);
console.log(student);

//tupple

var product:[String,number,boolean,String]=["Apple",101,true,"hyd"];
console.log(product);
//enum
enum color{red=101,black,blue,green}
var num=color.green
console.log(num);


//union
var max :String | number |boolean=true;
var unknown:any="my name is jayaram";
console.log(unknown);

//object data type

var emp={
    empid:1002,
    empName:"Jayaram",
    empsalary:12345,
    empDetails:function(){
        return `ID:${this.empid},Name:${this.empName},salary:${this.empsalary}`;

    }
}
console.log(emp.empid);
console.log(emp.empName);
console.log(emp.empsalary);




