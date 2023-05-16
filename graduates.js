function graduates(students) {
    // Code disini
    for (let i = 0; i < students.length; i++) {
        let data = students[i];
        if (data.score > 75) {
            if(data.students !== 0 )
            console.log("Nama: " + data.name, "Kelas: " + data.class);
            console.log("Keterangan: Lulus");
        } else {
            data.students = [];
        }
        
    }

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