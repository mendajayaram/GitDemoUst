class Employee1{
    private ename:string;
    private esal:number;
    private epost:string;
    private post:string;
    set _name(value){
        this.ename=value;
    }
    get _name(){
        return this.ename;
    }
        set _post(value){
            this.ename=value;
        }
        get _post(){
            return this.ename;    
        }
        set _sal(value){
            this.ename=value;
        }
        get _sal(){
            return this.ename;    
        } 
        displayEmployeeData(){
            console.log(`EmpName:${this.ename},EmpPost:${this.epost},EmpSal:${this.esal}`)
        } 
}
var empobj1=new Employee1();
empobj1._name="jayaram";
console.log("name"+empobj1._name);
empobj1._post="Full Stacki Developer";
console.log("Employee Position:"+empobj1._post);
empobj1._sal="123";
console.log("salary"+empobj1._sal)


