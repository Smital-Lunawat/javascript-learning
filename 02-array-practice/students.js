const students = [
  { name: "Jenny", rollNumber: 31, marks: 80 },
  { name: "Piyush", rollNumber: 32, marks: 87 },
  { name: "Kaushal", rollNumber: 33, marks: 32 },
  { name: "Deepak", rollNumber: 34, marks: 70 },
  { name: "Samira", rollNumber: 35, marks: 90 },
];

// Q1. Return the names of all students in capital letters.

// Method 1: Using a for loop
const names = [];

for (let index = 0; index < students.length; index++) {
  names.push(students[index].name.toUpperCase());
}

console.log(names);

// Method 2: Using map
const mappedNames = students.map((student) => {
  return student.name.toUpperCase();
});

console.log(mappedNames);

// Q2. Find students who scored more than 60.

// Method 1: Using a for loop
const moreThan60 = [];

for (let index = 0; index < students.length; index++) {
  if (students[index].marks > 60) {
    moreThan60.push(students[index].name);
  }
}

console.log(moreThan60);

// filter returns the complete student objects.
const filteredStudents = students.filter((student) => {
  return student.marks > 60;
});

console.log(filteredStudents);

// Combine filter with map to return only the names.
const filteredStudentNames = students
  .filter((student) => {
    return student.marks > 60;
  })
  .map((student) => student.name);

console.log(filteredStudentNames);

// Q3. Find the sum of marks of all students.
const totalMarks = students.reduce((accumulator, currentStudent) => {
  return accumulator + currentStudent.marks;
}, 0);

console.log(totalMarks);

// With curly braces, we need to write return explicitly.
// Without curly braces, an arrow function returns the value implicitly.
const totalMarksWithImplicitReturn = students.reduce(
  (accumulator, currentStudent) => accumulator + currentStudent.marks,
  0
);

console.log(totalMarksWithImplicitReturn);
