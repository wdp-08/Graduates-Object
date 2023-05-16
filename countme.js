function countMe(arr) {
    let count = {};
    arr.forEach(function(value) {
      count[value] = (count[value] || 0) + 1;
    });
    return count;
  }
  
  console.log(countMe(['Sofyan', 'Ricky', 'Sofyan', 'Semmi', 'Semmi', 'Wika']));
  // { Sofyan: 2, Ricky: 1, Semmi: 2, Wika: 1 }
  
  console.log(countMe([1, 15, 9, 10, 8, 1, 12, 15, 10, 3]));
  // { '1': 2, '3': 1, '8': 1, '9': 1, '10': 2, '12': 1, '15': 2 }