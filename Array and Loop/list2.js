import pkg from 'prompt-sync'

const input = pkg()
const current_questions = []

let quest_len = Number(input('Enter Number Of Questions: '))

for(let num = 0; num < quest_len; num++){
    let user_question = input(`Enter Question ${num+1}: `)
    current_questions.push(user_question)
}

console.log(current_questions)