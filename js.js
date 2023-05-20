function graduates (students) {
    const result = {}
  
    for (const objekSiswa of students) {
      if (objekSiswa.score > 74) {
        if (result[objekSiswa['class']] === undefined) {
          result[objekSiswa['class']] = [];
        }
        
        result[objekSiswa['class']].push({name: objekSiswa['name'], score: objekSiswa['score']});
      }
    }
  
    return result;
  }
  
console.log(graduates([
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
  ]));