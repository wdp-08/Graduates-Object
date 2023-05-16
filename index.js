
function graduates (students) {
    // Code disini
    let graduateStudents = {}
    for (let i = 0; i < students.length; i++) {
        if (graduateStudents[students[i].class] === undefined) {
            graduateStudents[students[i].class] = []
        }
        if (students[i].score > 75) {
            let graduateStudent = {}
            graduateStudent.name = students[i].name
            graduateStudent.score = students[i].score
            graduateStudents[students[i].class].push(graduateStudent)
        }
    }
    return graduateStudents;
  }
  

  
  console.log(graduates([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log(graduates([])); //{}