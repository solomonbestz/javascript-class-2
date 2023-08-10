import pkg from 'prompt-sync'

const input = pkg()


console.log('DON SANTOS MAFIANS PARTY')

let have_gun = input('Do you have a gun? (yes or no): ')
let have_tatoo =  input('Do you have a parabellum tatoo? (yes or no): ')


if(have_gun.toLowerCase() === 1 && have_tatoo.toLowerCase() === 1){
    console.log('You are eligible and you have recieved your ticket')
}else{
    console.log('You are not eligible and you can not recieve your ticket')
}

