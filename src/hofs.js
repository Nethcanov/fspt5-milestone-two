// incomplete!
// Complete the "getPeopleOver" method.
// done - This method takes a number (age) as its only argument
// This method should return an array of strings with
// the first + last name of every person that's older than
// "age" years old.

// Read the associated test file to understand the expected result format

// The "people" property passed to initialize the class
// is an array of objects in this form:
// [
//   { firstName: "John", lastName: "Smith", age: 40 },
//   { firstName: "Jane", lastName: "Doe", age: 68 },//EXPECTING THIS ONE
//   { firstName: "Grace", lastName: "Hopper", age: 85 },//EXPECTING THIS ONE
//   { firstName: "Bart", lastName: "Simpson", age: 10 }
// ];
// access array of objects -
// 1 use filter to return those aged >50
// 2 return only firstname and lastname

// To build this method, you can only use Higher Order Functions available
// in the Array prototype (forEach, map, filter, find, reduce or others)
// You can use as many of those as you need

class Inhabitants {
  constructor(people) {
    this.people = people;
  }

  getPeopleOver(age) {
    let peopleOfAge = this.people.filter(p => p.age > age);
    let fullnames = peopleOfAge.map(p => `${p.firstName} ${p.lastName}`);
    return fullnames;
  }
}
module.exports = Inhabitants;
