class Student{
    constructor(){
        this.id=101;
        this.name="kavya";
    }
    displayInfo(){
        console.log(this.id+" "+this.name)
    }
}
let s=new Student();
console.log(s);