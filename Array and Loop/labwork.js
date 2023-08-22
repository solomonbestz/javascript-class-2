import pkg from 'prompt-sync'

const input = pkg()


const student_names = []
const student_scores = []
const grades = []



let record_length = Number(input('Enter Length Of Record: '))

for(let record = 0; record < record_length; record++){
    let get_student_name = input(`Enter Student ${record+1} Name: `)
    let get_student_score = Number(input(`Enter Student ${record+1} Score: `))

    if(get_student_score >= 90){
        grades.push('A')
    }else if(get_student_score >= 80){
        grades.push('B')
    }else if(get_student_score >= 70){
        grades.push('C')
    }else if(get_student_score >= 60){
        grades.push('D')
    }else{
        grades.push('F')
    }

    student_names.push(get_student_name)
    student_scores.push(get_student_score)
}


console.log(`No.     Names     Scores      Grades
----------------------------------------------------`)
for(let index = 0; index < record_length; index++){
    console.log(`${index+1}       ${student_names[index]}       ${student_scores[index]}           ${grades[index]}
`)
}