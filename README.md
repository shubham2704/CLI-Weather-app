# CLI Weather App

A simple command-line/CLI weather app. With the help of this app we can check the weather report of any city.

### Note : Add your API details in app.js, at line no. 21 & 22. 

## Features

The app Generates the report and provide the information of the following:

- Current Tempreture
- Minimum Temreture
- Maximum Tempreture
- Feels Like
- Humidity
- Visibility
- Wind Speed
- Pressure
- latitude of the city
- Logitute of the city

## Usage

In order to use this app you need to download or clone this repository on your local machine  for this run the below command in your terminal/powershell/cmd

```
git clone https://github.com/shubham2704/CLI-Notes-App.git
```

- After runnig the above command the app ready to use.

```
[ -c ] command is use to fetch the weather for city followed by the city name
```

#### Fetching weather report

```
node app.js -c delhi
```

## Weather report format

```
_________________________________Showing Weather result For Delhi__________________________________

City : Delhi || Latitute : 28.67 || Longitute : 77.22
Current tempreture is : 19.79° C || It feels like 18.76° C

Today's weather report :

Minimum Tempreture : 18.00° C
Maximum Tempreture : 21.67° C
Current Tempreture : 19.79° C
Pressure : 1021
Humidity : 63
Visibility : 3500
Wind Speed: 2.6

Thank you for using Weather App
________________________________________________________________________________________________________________
```