const key = 'f23abcd6f26c453399a173758230908';
const inputField = document.getElementById('input-field');
const searchButton = document.getElementById('search-button');
const errorMessage = document.getElementById('error');
const resultMessage = document.getElementById('result-message');
const image = document.getElementById('image');
const countryRslt = document.getElementById('country');
const latRslt = document.getElementById('lat');
const lonRslt = document.getElementById('lon');
const celRslt = document.getElementById('cel');
const fahrRslt = document.getElementById('fahr');
const feelRslt = document.getElementById('feel');
const lstUpdatedRslt = document.getElementById('lstUpdated');
const descRslt = document.getElementById('desc');
const windRslt = document.getElementById('wind');
const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');
const result3 = document.getElementById('result3');




let icon ="";
let country = ""
let lat = "";
let long = "";
let cel = "";
let feel ="";
let fahr = "";
let lstUpdated = "";
let desc = "";
let wind = "";

searchButton.addEventListener('click', function(){
    let city = inputField.value;
    if(city){
        getWeatherData(city)
    }else {
        console.log("No City Entered")
    }
})

async function getWeatherData(arg) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${arg}`);
        const data = await response.json();
        console.log(data)

        country = data.location.country;
        lat = data.location.lat;
        long = data.location.lon;
        cel = data.current.temp_c;
        fahr = data.current.temp_f;
        lstUpdated = data.current.last_updated;
        desc = data.current.condition.text;
        wind = data.current.wind_kph;
        feel = data.current.feelslike_c;
        icon = data.current.condition.icon;
        image.setAttribute('src', `${icon}`);
        
        // hide error meesage
        errorMessage.style.display = "none";

        //display result
        resultMessage.style.display = "flex";

     } catch (error) {

        // display error Message
        errorMessage.style.display = "block";

        //Hide result
        resultMessage.style.display = "none";
        
        
    }

    // Update DOM with fetched Data from API call
    countryRslt.textContent = ` ${country}`;
    latRslt.innerHTML = `Lat: ${lat}&deg`;
    lonRslt.innerHTML = `Lon: ${long}&deg`;
    celRslt.innerHTML = `${cel} &degC `;
    fahrRslt.innerHTML = ` ${fahr} &degF`;
    feelRslt.innerHTML = `Feels like: ${feel} &degC`;
    descRslt.textContent = ` ${desc}`;
    windRslt.textContent = `Wind: ${wind} km/h`;
    
}