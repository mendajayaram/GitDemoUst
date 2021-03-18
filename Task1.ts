class Student1{
    protected sid:number;
    protected sname:string;
   
    constructor(id:number,name:string){
        this.sid=id;
        this.sname=name;
      
    }
    studentdisplay(){
        console.log(`Studentid: ${this.sid},Studentname: ${this.sname}`)
    }
   
}
var Studentobj = new Student(10,"jayaram");
Studentobj.studentdisplay();
//Task2
class Task2 extends Student1{
    phonenumber:number;//phonenumber  

    address:string;//address
    constructor(id:number,name:string,phonenumber:number,address:string){
       super(id,name)
        this.phonenumber=phonenumber;
        this.address=address;
      
    }
    studentdisplay(){
        console.log(`studentid: ${this.sid},studentname: ${this.sname},studentphonenumber: ${this.phonenumber},studentAddress: ${this.address}`)
    } 

}
var stdobj2=new Task2(1002,"sam",9874563210,"Hyderabad");
var stdobj3=new Task2(1003,"Josh",836952582,"Hyderabad");
stdobj2.studentdisplay();
stdobj3.studentdisplay();