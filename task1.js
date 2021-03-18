var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(id, name) {
        this.sid = id;
        this.sname = name;
    }
    Student.prototype.studentdisplay = function () {
        console.log("Studentid: " + this.sid + ",Studentname: " + this.sname);
    };
    return Student;
}());
var Studentobj = new Student(10, "jayaram");
Studentobj.studentdisplay();
//Task2
var Task2 = /** @class */ (function (_super) {
    __extends(Task2, _super);
    function Task2(id, name, phonenumber, address) {
        var _this = _super.call(this, id, name) || this;
        _this.phonenumber = phonenumber;
        _this.address = address;
        return _this;
    }
    Task2.prototype.studentdisplay = function () {
        console.log("studentid: " + this.sid + ",studentname: " + this.sname + ",studentphonenumber: " + this.phonenumber + ",studentAddress: " + this.address);
    };
    return Task2;
}(Student));
var stdobj2 = new Task2(1002, "sam", 9874563210, "Hyderabad");
var stdobj3 = new Task2(1003, "Josh", 836952582, "Hyderabad");
stdobj2.studentdisplay();
stdobj3.studentdisplay();
