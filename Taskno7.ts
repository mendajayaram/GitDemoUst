//creat one class which will calculate area of circle and,execute it from another file.
export
class Area1{
    length:number;
    width:number;
    constructor(length:number,width:number){
        this.length=length;
        this.width=width;

    }
    getArea(){
       console.log("Area of the rectange =:"+(this.length * this.width));
       
    }

}


