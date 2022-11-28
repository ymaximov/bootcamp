// // 1. Analyze these pieces of code before executing them. What will be the outputs ?
// 1) result: [bread, carrot, potato, chicken, apple, orange]
// 2) result: USA

// Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this :

// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// const welcomeStudents = users.map(function(element){
//     return `Welcome ${element.firstName}`;
// })

// console.log(welcomeStudents);

// const fullStackRes = users.filter(fsd => fsd.role === "Full Stack Resident");
// // console.log(fullStackRes);

// //BONUS//
// const lastNameFS = fullStackRes.map(function(elem){
//     return `${elem.lastName}`
// })
// console.log(lastNameFS);

//EX 3 Star Wars//
// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// function starWars(acc, cv){
//     return acc + " " + cv
// }

// let SW = epic.reduce(starWars)
// console.log(SW);

// const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
//                {name: "Liam", course: "Computer Science", isPassed: false}, 
//                {name: "Jenner", course: "Information Technology", isPassed: true}, 
//                {name: "Marco", course: "Robotics", isPassed: true}, 
//                {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
//                {name: "Jamie", course: "Big Data", isPassed: false}];

// const passed = students.filter(passed => passed.isPassed === true)
// console.log(passed);


