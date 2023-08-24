import pkg from 'prompt-sync'

const input = pkg()



const courses = ['English', 'Maths', 'French', 'Biology', 'Physics', 'Chemistry', 'System Design', 'Stylistics', 'Data Processing']
const course_codes = [101, 101, 112, 110, 121, 106, 105, 103, 102]
const units = [3, 4, 2, 2, 4, 3, 5, 4, 3]
const scores = []
const grade_points = []
const quality_points = []
let total_quality_point = 0
let total_unit = 0


for(let index = 0; index < courses.length; index++){
    let score = Number(input(`Enter ${courses[index]} ${course_codes[index]} score: `))
    scores.push(score)
    if(score >= 70){
        grade_points.push(5)
    }else if(score >= 60){
        grade_points.push(4)
    }else if(score >= 50){
        grade_points.push(3)
    }else if(score >= 40){
        grade_points.push(2)
    }else{
        grade_points.push(0)
    }
}

for(let index = 0; index < units.length; index++){
    quality_points.push(units[index] * grade_points[index])
}

for(let index = 0; index < units.length; index++){
    total_quality_point += quality_points[index]
    total_unit += units[index]
}

let CGPA = total_quality_point / total_unit
console.log(quality_points)
console.log(total_quality_point)

console.log(`CGPA: ${CGPA}`)