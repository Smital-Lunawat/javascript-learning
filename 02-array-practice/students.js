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

// Q2. Return the marks of students who scored more than 60.

// Method 1: Using a for loop
const marksMoreThan60 = [];

for (let index = 0; index < students.length; index++) {
  if (students[index].marks > 60) {
    marksMoreThan60.push(students[index].marks);
  }
}

console.log(marksMoreThan60);

// Method 2: Using filter and map
const filteredStudentMarks = students
  .filter((student) => {
    return student.marks > 60;
  })
  .map((student) => {
    return student.marks;
  });

console.log(filteredStudentMarks);

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

