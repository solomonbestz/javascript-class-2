import pkg from 'prompt-sync'


const input = pkg()



const car = {
    car_name: 'lexus',
    production_date: 2023,
    type_engine: 'v6',
    mode_of_powering_engine: 'fuel',
    engine_sound: function (){
        return('Vhooom')
    }
}
console.log(car.engine_sound())