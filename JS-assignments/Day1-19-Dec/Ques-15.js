const students = [
  { name: "Alice", age: 20, marks: { math: 85, science: 90, english: 88 } },
  { name: "Bob", age: 22, marks: { math: 78, science: 80, english: 75 } },
  { name: "Charlie", age: 21, marks: { math: 92, science: 88, english: 95 } }
];


students.push({
  name: "Diana",
  age: 19,
  marks: { math: 89, science: 94, english: 90 }
});


students.forEach(student => {
  const { math, science, english } = student.marks;
  const average = (math + science + english) / 3;
  student.averageMarks = average; 
  console.log(`${student.name}'s average marks: ${average.toFixed(2)}`);
});