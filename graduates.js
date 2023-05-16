function graduates(students) {
    const passedStudents = [];

for (let i = 0; i < students.length; i++) {
const student = students[i];
if (student.score >= 70) {
  passedStudents.push(student);
}
}

return passedStudents;
}

const dataStudent = [
{
name: 'Dimitri',
score: 90,
class: 'foxes'
},
{
name: 'Alexei',
score: 85,
class: 'wolves'
},
{
name: 'Sergei',
score: 74,
class: 'foxes'
},
{
name: 'Anastasia',
score: 78,
class: 'wolves'
}
];

var passedStudents = graduates(dataStudent);

console.log("Siswa yang lulus:");
console.log(passedStudents);
console.log(graduates([]));