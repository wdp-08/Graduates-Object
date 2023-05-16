function graduates(students) {
    const passedStudents = {};
  
    for (let i = 0; i < students.length; i++) {
      let student = students[i];
      if (student.score >= 75) {
        passedStudents.push(student);
      }
    }
  
    return passedStudents;
  }
  
  const ListStudent = 
  [
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
  
  const passedStudents = graduates(ListStudent);
  console.log(passedStudents);
  