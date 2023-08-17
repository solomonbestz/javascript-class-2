import pkg from 'prompt-sync'

const input = pkg()

let score = 0
// const prev_questions = ['Biggest Animal?', 'General Overseer Of MFM', 'What continent is belgium?', 'Who founded Apple?', 'Who founded cells?', 'Tallest builing in the world?']
const answers = ['Whale', 'Daniel Olukoya', 'Africa', 'Steve Jobs', 'Robert Hooke', 'Whiz Khalifa']
const current_questions = []

// for(let num = 0; num < questions.length; num++){
//     console.log(questions[num])
//     let user_answer = input('Enter Answer: ')
//     if(user_answer.toLowerCase() === answers[num].toLowerCase()){
//         score++
//         console.log('Correct!!')
//         console.log(`You score is ${score}`)
//     }else{
//         console.log('InCorrect!!')
//         console.log(`You score is ${score}`)
//         console.log(`The answer is ${answers[num]}`)
//     }
// }

// questions.forEach((question, index) =>{
//     console.log(index, question)
// })

// let running = true
// let counter = 1
// let stopper = 1000

// while(running){
//     if(stopper === counter){
//         running = false
//     }
//     console.log(counter++)
// }