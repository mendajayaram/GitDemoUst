//Basic Program
var no = 10.0;
var greet = "Welcome to every one";
var con = false;
console.log(no);
console.log(greet);
console.log(con);
//Array
var student = ["jayaram", "Ram", "Naresh"];
var fritus = ["Applle", "mango"];
console.log(fritus);
console.log(student);
//tupple
var product = ["Apple", 101, true, "hyd"];
console.log(product);
//enum
var color;
(function (color) {
    color[color["red"] = 101] = "red";
    color[color["black"] = 102] = "black";
    color[color["blue"] = 103] = "blue";
    color[color["green"] = 104] = "green";
})(color || (color = {}));
var num = color.green;
console.log(num);
//union
var max = true;
var unknown = "my name is jayaram";
console.log(unknown);
//object data type
var emp = {
    empid: 1002,
    empName: "Jayaram",
    empsalary: 12345,
    empDetails: function () {
        return "ID:" + this.empid + ",Name:" + this.empName + ",salary:" + this.empsalary;
    }
};
console.log(emp.empid);
console.log(emp.empName);
console.log(emp.empsalary);
