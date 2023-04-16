// 2. Write a JavaScript program to
// a) Calculate grades on basis of marks
// >90 = A
// >80 = B
// >70 = C
// >60 = D
// >50 = E
// else = F
// b) Map the grades of each student
// c) Group students according to the grades they have received and display.
// Sample Input:
// let students = [
// { name: "John", marks: “92” },
// { name: "Oliver", marks: “85” },
// { name: "Michael", marks: “79” },
// { name: "Dwight", marks: “95”},
// { name: "Oscar", marks: “64” },
// { name: "Kevin", marks: “48” },
// ];
// Output:

// {
// 'A': [ { name: "John", grade: “A” },
// { name: "Dwight", grade: “A” } ],
// 'B': [ { name: "Oliver", grade: “B” } ],
// 'C': [ { name: "Michael", grade: “C” } ],
// 'D': [ { name: "Oscar", grade: “D” } ],
// 'E': [ ],
// 'F': [ { name: "Kevin", grade: “F” } ],
// }

//Solution:

let students = [
  { name: "John", marks: "92" },
  { name: "Oliver", marks: "85" },
  { name: "Michael", marks: "79" },
  { name: "Dwight", marks: "95" },
  { name: "Oscar", marks: "64" },
  { name: "Kevin", marks: "48" },
];

// Calculate grades on basis of marks
students.forEach((student) => {
  if (student.marks > 90) {
    student.grade = "A";
  } else if (student.marks > 80) {
    student.grade = "B";
  } else if (student.marks > 70) {
    student.grade = "C";
  } else if (student.marks > 60) {
    student.grade = "D";
  } else if (student.marks > 50) {
    student.grade = "E";
  } else {
    student.grade = "F";
  }
});

// Map the grades of each student
const mappedGrades = students.map((student) => {
  return { name: student.name, grade: student.grade };
});

// Group students according to the grades they have received and display
const groupedStudents = mappedGrades.reduce((accumulator, currentValue) => {
  if (!accumulator[currentValue.grade]) {
    accumulator[currentValue.grade] = [];
  }
  accumulator[currentValue.grade].push(currentValue);
  return accumulator;
}, {});

console.log(groupedStudents);
