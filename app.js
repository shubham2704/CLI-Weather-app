const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        city : {
            demand : true,
            alias : 'c',
            describe : 'Enter city name to fetch weather',
            string : true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

let encodedData = {
    encodedCity : encodeURIComponent(argv.city),
    api : 'http://api.openweathermap.org/data/2.5/',
    apiKey : 'da223011c27e04e2e57c4f860ba52b90'
};

let url = `${encodedData.api}weather?q=${encodedData.encodedCity}&APPID=${encodedData.apiKey}`;

axios.get(url).then((response) => {
    if (response.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find the City/Address')
    }

    // Prints the whole response object.
    //console.log(response.data);

    console.log();
    console.log(`_________________________________Showing Weather result For ${response.data.name}__________________________________`);
    console.log();
    console.log(`City : ${response.data.name} || Latitute : ${response.data.coord.lat} || Longitute : ${response.data.coord.lon}`);
    console.log(`Current tempreture is : ${(response.data.main.temp - 273.15).toFixed(2)}° C || It feels like ${(response.data.main.feels_like - 273.15).toFixed(2)}° C`);
    console.log();
    console.log(`Today's weather report : `);
    console.log();
    console.log(`Minimum Tempreture : ${(response.data.main.temp_min - 273.15).toFixed(2)}° C`);
    console.log(`Maximum Tempreture : ${(response.data.main.temp_max - 273.15).toFixed(2)}° C`);
    console.log(`Current Tempreture : ${(response.data.main.temp - 273.15).toFixed(2)}° C`);
    console.log(`Pressure : ${response.data.main.pressure}`);
    console.log(`Humidity : ${response.data.main.humidity}`);
    console.log(`Visibility : ${response.data.visibility }`);
    console.log(`Wind Speed: ${response.data.wind.speed}`);
    console.log();
    console.log('Thank you for using Weather App');
    console.log(`________________________________________________________________________________________________________________`);
}).catch((e) => {
    if (e.code === 'ENOTFOUND'){
        console.log('Unable to connect. Plaese Try again');
    }
    else{
        console.log(e.message);
    }
});