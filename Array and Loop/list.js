import pkg from 'prompt-sync'

const input = pkg()

let score = 0
const questions = ['Biggest Animal?', 'General Overseer Of MFM', 'What continent is belgium?', 'Who founded Apple?', 'Who founded cells?', 'Tallest builing in the world?']
const answers = ['Whale', 'Daniel Olukoya', 'Africa', 'Steve Jobs', 'Robert Hooke', 'Whiz Khalifa']


for(let num = 0; num < questions.length; num++){
    console.log(questions[num])
    let user_answer = input('Enter Answer: ')
    if(user_answer.toLowerCase() === answers[num].toLowerCase()){
        score++
        console.log('Correct!!')
        console.log(`You score is ${score}`)
    }else{
        console.log('InCorrect!!')
        console.log(`You score is ${score}`)
        console.log(`The answer is ${answers[num]}`)
    }
}