const students = [
    {
        "nome": "João",
        "nota": "5.8"
    },
    {
        "nome": "Augusto",
        "nota": "4.8"
    },
    {
        "nome": "Karla",
        "nota": "8.8"
    },
    {
        "nome": "Felipe",
        "nota": "9.02"
    },
    {
        "nome": "Pedro",
        "nota": "7.6"
    }
]

const getApprovedStudents = students.filter(student => {
    return student.nota > 6
})

console.log(getApprovedStudents)