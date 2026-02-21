// ===============================
// Student Result Management System
// ===============================

// 1️⃣ Array to store students
const students = [
  { name: "Rahul", marks: 85 },
  { name: "Amit", marks: 72 },
  { name: "Sneha", marks: 95 },
  { name: "Priya", marks: 60 }
];

// 2️⃣ Function to calculate grade
function calculateGrade(marks) {
  if (marks >= 90) {
    return "A+";
  } else if (marks >= 80) {
    return "A";
  } else if (marks >= 70) {
    return "B";
  } else if (marks >= 60) {
    return "C";
  } else {
    return "Fail";
  }
}

// 3️⃣ Function to check pass/fail                                 
const isPassed = (marks) => {
  return marks >= 40;
};

// 4️⃣ Loop through students
console.log("===== Student Results =====");

for (let student of students) {

  // Calculate grade
  const grade = calculateGrade(student.marks);

  // Check pass/fail
  const resultStatus = isPassed(student.marks) ? "Passed" : "Failed";

  // Print result
  console.log("Name:", student.name);
  console.log("Marks:", student.marks);
  console.log("Grade:", grade);
  console.log("Result:", resultStatus);
  console.log("---------------------------");
}

// 5️⃣ Calculate average marks
let totalMarks = 0;

for (let student of students) {
  totalMarks += student.marks;
}

const average = totalMarks / students.length;

console.log("Class Average Marks:", average);
