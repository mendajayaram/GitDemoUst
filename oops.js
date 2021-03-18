"use strict";
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
exports.__esModule = true;
exports.position = void 0;
var Employee = /** @class */ (function () {
    function Employee(id, name, sal) {
        this.empid = id;
        this.ename = name;
        this.salary = sal;
    }
    Employee.prototype.displayDetail = function () {
        console.log("Empid: " + this.empid + ",Empname: " + this.ename + ",Empsal: " + this.salary);
    };
    return Employee;
}());
var position = /** @class */ (function (_super) {
    __extends(position, _super);
    function position(id, name, sal, post, address) {
        var _this = _super.call(this, id, name, sal) || this;
        _this.post = post;
        _this.address = address;
        return _this;
    }
    position.prototype.displayDetail = function () {
        console.log("Empid: " + this.empid + ",Empname: " + this.ename + ",Empsal: " + this.salary + ",EmpPost: " + this.post + ",EmpAddress: " + this.address);
    };
    return position;
}(Employee));
exports.position = position;
var posobj = new position(1002, "jayaram", 12345, "Full Stack Developer", "Hyderabad");
posobj.displayDetail();
