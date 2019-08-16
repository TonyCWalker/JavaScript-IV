// CODE here for your Lambda Classes

/*Person*/

class Person {
    constructor(bClass) {
        this.name = bClass.name;
        this.age = bClass.age;
        this.location = bClass.location;
    }
    speak(){
        return (`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

/*Instructor*/

class Instructor extends Person {
    constructor(iClass) {
        super(iClass);
        this.specialty = iClass.specialty;
        this.favLanguage = iClass.favLanguage;
        this.catchPhrase = iClass.catchPhrase;
    }
    demo(subject) {
        return (`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        return (`${student.name} recieves a perfect score on ${subject}`);
    }
}

/*Student*/

class Student extends Person {
    constructor(sClass) {
        super(sClass);
        this.previousBackground = sClass.previousBackground;
        this.className = sClass.className;
        this.favSubjects = sClass.favSubjects;
    }

    listsSubjects(){
        return (`${this.favSubjects}`);
    }

    PRAssignments(subject){
        return (`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        return (`${this.name} has begun sprint challenge on ${subject}`);
    }
}

/*ProjectManager*/

class ProjectManager extends Instructor {
    constructor(pmClass){
        super(pmClass);
        this.gradClassName = pmClass.gradClassName;
        this.favInstructor = pmClass.favInstructor;
    }

    standUp(channel) {
        return (`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode(student, subject){
        return (`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}


/*Objects*/

/*Instructors*/

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const liz = new Instructor({
    name: 'Liz',
    location: 'Montana',
    age: 29,
    favLanguage: 'Python',
    specialty: 'Data',
    catchPhrase: `What doesn't kill you makes you stronger`
  });

/*Students*/

  const tony = new Student({
      name: 'Tony',
      location: 'Oregon',
      age: 25,
      previousBackground: 'Non-Profits',
      className: 'WebPT9',
      favSubjects: 'CSS',
  })

  const matt = new Student({
    name: 'Matt',
    location: 'California',
    age: 26,
    previousBackground: 'Retail',
    className: 'WebPT9',
    favSubjects: 'Html',
})

/*Project Managers*/

  const john = new ProjectManager({
      name: 'John',
      location: 'Louisiana',
      age: '34',
      gradClassName: 'CS1',
      favInstructor: 'Sean'
  })

  const jill = new ProjectManager({
    name: 'Jill',
    location: 'New York',
    age: '32',
    gradClassName: 'CS2',
    favInstructor: 'Steve'
})

/*Console Logs */

console.log(fred.age);
console.log(fred.speak());
console.log(liz.catchPhrase);
console.log(fred.demo('Callbacks'));
console.log(liz.grade(matt, 'arrays'));
console.log(tony.location);
console.log(matt.favSubjects);
console.log(liz.specialty);
console.log(john.gradClassName);
console.log(tony.listsSubjects(tony.favSubjects));
console.log(tony.sprintChallenge('JavaScript'));
console.log(matt.PRAssignments('JavaScript IV'));
console.log(jill.debugsCode(tony, 'constructors'));
console.log(john.standUp('WebPt9_John'));
console.log(john.favInstructor);
console.log(jill.speak());
console.log(john.location);