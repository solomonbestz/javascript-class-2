import pkg from "prompt-sync";

const prompt = pkg();

let number = 22 //Number(prompt("Enter any number: "));

if (number % 2 != 0){
    console.log('Weird')
}else if(number % 2 == 0 && (number >= 2 && number <= 5)){
    console.log('Not Weird')
}else if(number % 2 == 0 && (number >= 6 && number <= 20)){
    console.log('Weird')
}else if(number % 2 == 0 && number > 20){
    console.log('Not Weird')
}

// if (number % 2 == 0 && number <= 5) {
//   console.log("Not weird");
// } else if (number % 2 == 0 && number <= 20) {
//   console.log("Weird");
// } else if (number % 2 == 0 && number >= 20) {
//   console.log("Not weird");
// } else {
//   console.log("Weird");
// }