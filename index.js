function graduates(students) {
    let classes = {};
  
    for (let i = 0; i < students.length; i++) {
      if (students[i].score > 75) {
        const student = {
          name: students[i].name,
          score: students[i].score,
        };
  
        if (classes[students[i].class] == undefined) {
          classes[students[i].class] = [];
        }
  
        classes[students[i].class].push(student);
      }
    }
  
    return classes;
  }
  
  console.log(
    graduates([
      {
        name: "Dimitri",
        score: 90,
        class: "foxes",
      },
      {
        name: "Alexei",
        score: 85,
        class: "wolves",
      },
      {
        name: "Sergei",
        score: 74,
        class: "foxes",
      },
      {
        name: "Anastasia",
        score: 78,
        class: "wolves",
      },
    ])
  );
  
  // {
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(
    graduates([
      {
        name: "Alexander",
        score: 100,
        class: "foxes",
      },
      {
        name: "Alisa",
        score: 76,
        class: "wolves",
      },
      {
        name: "Vladimir",
        score: 92,
        class: "foxes",
      },
      {
        name: "Albert",
        score: 71,
        class: "wolves",
      },
      {
        name: "Viktor",
        score: 80,
        class: "tigers",
      },
    ])
  );
  

  
  console.log(graduates([])); //{}
  