function graduates(students) {
    const result = {};
  
    for (const student of students) {
      const { name, score, class: className } = student;
  
      if (score > 75) {
        if (!result[className]) {
          result[className] = [];
        }
  
        result[className].push({ name, score });
      }
    }
  
    return result;
  }
  
  