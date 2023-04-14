//complete this code
class Person {
    constructor(name,age){
        this.name="";
        this.age=age;
    }
    get getName(){
        
    }
}

class Student extends Person {
    constructor(name,age){
        super(name,age);
        this.name=name;
        this.age=age;
    } 
    study(){
        return `${this.name} is studying`
    }
}

class Teacher extends Person {
    constructor(name,age){
        super(name,age);
        this.name=name;
        this.age=age;
    }
    teaching(){
        return `${this.name} is teaching`
    }
}

var student=new Student("Akash", "25")
var teacher=new Teacher("Avi", "27")
console.log(student.study());
console.log(teacher.teaching())
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
