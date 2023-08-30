import pkg from 'prompt-sync'


const input = pkg()

function quiz(question_list){
    const alphabets = ['A)', 'B)', 'C)', 'D)']
    let score = 0
    question_list.forEach((element, index) => {
        console.log(`${index+1}) ${element.question}`)
        for(let n = 0; n < element.list_of_answer.length; n++){
            console.log(`${alphabets[n]} ${element.list_of_answer[n]}`)
        }
        const user_answer = input('Enter Your Answer Here: ')
        if(user_answer.toLowerCase() === element.correct_answer){
            score += 2
            console.log(`Congratulations, You Earned ${score} points`)
        }else{
            console.log(`Olodoooo, Your point is ${score}`)
        }
    });
}

const question_list = [
    { 
        question: 'The year america gained independence?',
        list_of_answer: [1932, 1848, 2003, 1776],
        correct_answer: 'd'
    },
    {
        question: 'Who gave Nigeria her name?',
        list_of_answer: ['Ona Gerrard', 'Funke Akindele', 'Flora Shaw', 'Faith Hope'],
        correct_answer: 'c'
    },
    {
        question: 'The smallest state in Nigeria?',
        list_of_answer: ['Lagos', 'Kano', 'Ogun', 'Jos'],
        correct_answer: 'a'
    },
    {
        question: 'Who built the c++ programming language?',
        list_of_answer: ['Guido Van Rossum', 'Linu Trovard', 'Bjorn Stroustrup', 'Bill gate'],
        correct_answer: 'c'
    },
]


quiz(question_list)