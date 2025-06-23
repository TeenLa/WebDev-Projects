//the api for the cities
const addisUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Addis%20Ababa?unitGroup=us&key=VBE7YQ9VKR9ZWD5HNHRUH77UX&contentType=json';
const adamaUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/adama?unitGroup=us&key=VBE7YQ9VKR9ZWD5HNHRUH77UX&contentType=json';
const bahirUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/bahir%20dar?unitGroup=us&key=VBE7YQ9VKR9ZWD5HNHRUH77UX&contentType=json';
const direUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/dire%20dawa?unitGroup=us&key=VBE7YQ9VKR9ZWD5HNHRUH77UX&contentType=json';
const mekelleUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/mekelle?unitGroup=us&key=VBE7YQ9VKR9ZWD5HNHRUH77UX&contentType=json';
const hawassaUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/hawassa?unitGroup=us&key=VBE7YQ9VKR9ZWD5HNHRUH77UX&contentType=json';

//DOM manipulation
const cities = document.getElementById("cities");
const time = document.getElementById("time");
const country = document.getElementById("country");
const city = document.getElementById("city");
const temp = document.getElementById("temp");
const prec = document.getElementById("prec");
const condition = document.getElementById("condition");
const windSpeed = document.getElementById("windSpeed");

//this function fetches for us
async function fetchFunction(api) {
  try{
    const response = await fetch(api);
    const data = await response.json();
    return data;
  }
  catch(err) {
    console.log("ERROR", err)
    return;
  }
}

async function fetcher() {
  if(cities.value === "AA") {
     const value = await fetchFunction(addisUrl);
     return value;
  }
  else if(cities.value === "AD") {
    const value = await fetchFunction(adamaUrl);
    return value;
  }
  else if(cities.value === "BD") {
    const value = await fetchFunction(bahirUrl);
    return value;
  }
  else if(cities.value === "DD") {
    const value = await fetchFunction(direUrl);
    return value;
  }
  else if(cities.value === "HW") {
    const value = await fetchFunction(hawassaUrl);
    return value;
  }
  else if(cities.value === "MK") {
    const value = await fetchFunction(mekelleUrl);
    return value;
  }
  else {
    return 0;
  }
}

async function currentPrinter() {
  const data = await fetcher();
  if(data === 0) {
    time.innerText = "We are the currentPrinter baby";
  }
  time.innerText = `Time: ${data.currentConditions.datetime}`;
  country.innerText = "Country:  Ethiopia";
  city.innerText = `City:  ${cities.options[cities.selectedIndex].text}`;
  temp.innerText = `Temperature:  ${data.currentConditions.temp}`
  prec.innerText = `Precipitation: ${data.currentConditions.precip}`
  condition.innerText = `Condition: ${data.currentConditions.conditions}`
  windSpeed.innerText = `Wind Speed: ${data.currentConditions.windspeed}`
}

currentPrinter();
cities.addEventListener("change", currentPrinter);

