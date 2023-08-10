import pkg from 'prompt-sync';

const input = pkg()

// let num_one = 10
// let num_two = 9

// let sum_num = num_one + num_two

// const his_name = 'john smith'
// const his_age = 20
// const existing = false

// console.log('Welcome '+ his_name + ', you are '+ his_age+ 'years old.')

// String
// Boolean
// Numbers (int, float)
// Undefind
// Null
// Objects

// let num_one = Number(input('Enter First Number: '))
// let num_two = Number(input('Enter Second Number: '))

// let sum_num = num_one + num_two

// console.log(`${num_one} + ${num_two} = ${sum_num}`)


let playing = true


while(playing){
    console.log('Player is playing')
    console.log(playing)

    let user_input = input('Enter Input: ')

    if(user_input === 'calling'){
        playing = false
        console.log('Player is not playing')
        console.log(playing)
    }
}