import pkg from 'prompt-sync'

const input = pkg()


let first_num = Number(input('Enter First Number: '))
let secon_num = Number(input('Enter second Number: '))

let operator = input('Enter Operator: ')

if(operator == '+'){
    console.log(`${first_num}${operator}${secon_num}=${first_num+secon_num}`)
}else if(operator == '-'){
    console.log(`${first_num}${operator}${secon_num}=${first_num-secon_num}`)
}