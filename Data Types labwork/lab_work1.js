import pkg from 'prompt-sync'

const input = pkg()


// let user_first_name = input('Enter First Name: ')
// let userLastName = input('Enter Last Name: ')
// let age = Number(input('Enter Age: '))
// let currentYear = Number(input('Enter current year: '))

// let e_app = currentYear - age

// console.log(user_first_name + ' ' + userLastName + ', You are '+ age + 'years old and you came to earth in the year '+ e_app)

let user_weight = Number(input('Enter weight in pounds: '))

let kilogram = user_weight * 0.45

console.log(`Your weight in kilogram is ${kilogram}kg`)