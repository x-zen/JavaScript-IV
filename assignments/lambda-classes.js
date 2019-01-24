// CODE here for your Lambda Classes


class Person {
  constructor(personAttr) {
    this.name = personAttr.name;
    this.age = personAttr.age;
    this.location = personAttr.location;
    this.gender = personAttr.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}


class Instructor extends Person {
  constructor(instructorAttr) {
    super(instructorAttr);
    this.soecialty = instructorAttr.soecialty;
    this.favLanguage = instructorAttr.favLanguage;
    this.catchPhrase = instructorAttr.catchPhrase;
  }
    demo(subject) {
      return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
      return `${student.name} receives a perfect score on ${subject}`
    }
  }


class Student extends Person {
  constructor(studentAttr) {
    super(studentAttr)
    this.previousBackground = studentAttr.previousBackground;
    this.className = studentAttr.className;
    this.favSubjects = studentAttr.favSubjects;
  }
  let subject = "";
  listsSubjects() {
    this.favSubjects.map(item => console.log(item));
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}


  class ProjectManagers extends Instructor {
    constructor(gradClassName, favInstructor) {
      this.gradClassName = gradClassName;
      this.favInstructor = favInstructor;
    }
    standUp(channel) {
      return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
      return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
  }
