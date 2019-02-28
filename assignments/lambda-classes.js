// CODE here for your Lambda Classes

class Person {
    constructor(personAttrs) {
        this.name = personAttrs.name;
        this.age = personAttrs.age;
        this.location = personAttrs.location;
        this.gender = personAttrs.gender;
    }

    speak(){
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person  {
    constructor(instructorAttrs) {
        super(instructorAttrs);
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`)
    }

    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}.`);
    }
}    

class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
    }

    listsSubjects(){
        console.log(...this.favSubjects);
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`)
    }
}

class ProjectManager extends Instructor {
    constructor(PMAttrs) {
        super(PMAttrs);
        this.gradClassName = PMAttrs.gradClassName;
        this.favInstructor = PMAttrs.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @${channel} standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}

const John = new Person({
    name: "John",
    age: 20,
    location: "Brooklyn",
    gender: "male" 
});

John.speak();

const Jane = new Person({
    name: "Jane",
    age: 22,
    location: "Queens",
    gender: "female" 
});

Jane.speak();

const James = new Student({
    name: "James",
    age: 23,
    location: "Bronx",
    gender: "male",
    previousBackground: "Teacher",
    className: "CS120",
    favSubjects: ["Javascript", "Python", "CSS"]
});

James.speak();
James.listsSubjects();
James.PRAssignment("Javascript");
James.sprintChallenge("User Interface")

const Mary = new Student({
    name: "Mary",
    age: 25,
    location: "Philadelphia",
    gender: "female",
    previousBackground: "Grad Student",
    className: "CS125",
    favSubjects: ["Ruby", "Unity", "Java"]
});

Mary.speak();
Mary.listsSubjects();
Mary.PRAssignment("Python");
James.sprintChallenge("Javascript")

const Bill = new Instructor({
    name: "Bill",
    age: 30,
    location: "Manhatten",
    gender: "male",
    specialty: "Django",
    favLanguage: "Python",
    catchPhrase: "Bird up!"
});

Bill.speak();
Bill.demo("Javascript");
Bill.grade(James, "Javascript");

const Audrey = new Instructor({
    name: "Audrey",
    age: 37,
    location: "Pittsburgh",
    gender: "female",
    specialty: "Python",
    favLanguage: "Ruby",
    catchPhrase: "And that's the waaaaaay the news goes!"
});

Audrey.speak();
Audrey.demo("Python");
Audrey.grade(Mary, "Python");

const David = new ProjectManager({
    name: "David",
    age: 32,
    location: "Portland",
    gender: "male",
    gradClassName: "CS2",
    favInstructor: "Josh"
});

David.standUp("CS5");
David.debugsCode(Mary, "Ruby");

const Hannah = new ProjectManager({
    name: "Hannah",
    age: 34,
    location: "St. Louis",
    gender: "female",
    gradClassName: "CS4",
    favInstructor: "Ryan"
});

David.standUp("CS7");
David.debugsCode(James, "Python");