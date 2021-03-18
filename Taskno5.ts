//create one parent class with name  Student  containing property stdName,stdId,
//stdSection, stdContact which should be accessible only in Mark class but not 
//outside and one methode with name displayStdData which display all its property 
//value.create another child class with name Mark extends from Student class 
//containing property  totalMark and one methode allInformation() which will 
//display student class as well as Mark class property.
class Student{
    protected stdId:number;
    protected stdName:string;
    protected stdSection:string;
    protected stdContact:number;
    constructor(stdId:number,stdName:string,stdSection:string,stdContact:number){
        this.stdId=stdId;
        this.stdName=stdName;
        this.stdSection=stdSection;
        this.stdContact=stdContact;
    }
    displayStdData(){
        console.log(`Studentid: ${this.stdId},Studentname: ${this.stdName},StudentSection: ${this.stdSection},StudentContact: ${this.stdContact}`)
    }
   
}
var Studentobj = new Student(10,"jayaram","A",9876543210);
Studentobj.displayStdData();
//Marks Class
class Marks extends Student{
    m1:number; 
    m2:number;
    
    address:string;//address
    constructor(stdId:number,stdName:string,stdSection:string,stdContact:number ,m1:number,m2:number){
       super(stdId,stdName,stdSection,stdContact);
       this.m1=m1;
       this.m2=m2;
        
      
    }
    studentdisplay(){
        console.log(`Studentid: ${this.stdId},Studentname: ${this.stdName},StudentSection: ${this.stdSection},StudentContact: ${this.stdContact},StudentTotalmarks: ${this.m1+this.m2},StudentAverage: ${this.m1+this.m2}`)
    } 

}
var stdobj2=new Marks(1002,"sam","A",9876543210,90,80);

stdobj2.studentdisplay();
