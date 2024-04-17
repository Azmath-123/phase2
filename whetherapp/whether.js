const readlineSync = require('readline-sync');
const axios = require('axios');


//Weather CLI Application

/*
Input from the User using ReadlineSync
Fetch the weather Data from an API (openweather)
Store this Data in a JSON File
*/
console.clear();
 //let cityname = readlineSync.question('Enter the city Name : ');
//let cityname2 = readlineSync.question('Enter the second city Name : ');

const weatherAPIKey = 'c4edd504c04a48f9c18a2abf1364b2db';

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// function getWeatherData(cityname,weatherAPIKey){
//     axios.get(https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${weatherAPIKey})
//     .then((result)=>{
//         console.log(result.data);
//     })
//     .catch((error)=>{
//         console.error(error);
//     })
// }
let cityname = readlineSync.question('Enter the city Name : ');
let cityname2 = readlineSync.question('Enter the city Name 2: ');
async function getWeatherData(cityname, cityname2 ,weatherAPIKey) {
    try {
        let result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${weatherAPIKey}`);
        console.log(result.data)
         let result2 = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityname2}&appid=${weatherAPIKey}`);
         console.log(result2.data)
    } catch (error) {
        console.error(error)
    }
}

getWeatherData(cityname, cityname2,weatherAPIKey)
