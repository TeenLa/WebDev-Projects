//the api for the cities
const addisUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Addis%20Ababa?unitGroup=us&key=VBE7YQ9VKR9ZWD5HNHRUH77UX&contentType=json';
const adamaUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/adama?unitGroup=us&key=VBE7YQ9VKR9ZWD5HNHRUH77UX&contentType=json';
const bahirUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/bahir%20dar?unitGroup=us&key=VBE7YQ9VKR9ZWD5HNHRUH77UX&contentType=json';
const direUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/dire%20dawa?unitGroup=us&key=VBE7YQ9VKR9ZWD5HNHRUH77UX&contentType=json';
const mekelleUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/mekelle?unitGroup=us&key=VBE7YQ9VKR9ZWD5HNHRUH77UX&contentType=json';
const hawassaUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/7.05%2C%2038.467?unitGroup=us&key=VBE7YQ9VKR9ZWD5HNHRUH77UX&contentType=json';

//DOM manipulation
      // current weather
const cities = document.getElementById("cities");
const time = document.getElementById("time");
const country = document.getElementById("country");
const city = document.getElementById("city");
const temp = document.getElementById("temp");
const prec = document.getElementById("prec");
const condition = document.getElementById("condition");
const windSpeed = document.getElementById("windSpeed");
const video = document.getElementById("video");
const map = document.getElementById("map");

      // Daily weather
const date = document.getElementById("date");
const tempMax = document.getElementById("temp-max");
const tempMin = document.getElementById("temp-min");
const tempAve = document.getElementById("temp-average");
const humidity = document.getElementById("humidity");
const precipitation = document.getElementById("prec-daily");
const windspeed = document.getElementById("windspeed")
const pressure = document.getElementById("pressure");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");
const description = document.getElementById("descrip");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const rightFrame = document.getElementsByClassName("rightFrame");

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
     map.innerHTML = `
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d69190.50758362512!2d38.717901606565874!3d8.994087337689303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1750717015731!5m2!1sen!2set"
        width="1210" height="150" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
     `
     
     return value;
  }
  else if(cities.value === "AD") {
    const value = await fetchFunction(adamaUrl);
    map.innerHTML = `
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9530.201661145933!2d39.25879619636955!3d8.527680338656051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b1f65036ecb0f%3A0x6babded8f5e67ef6!2sAdama!5e0!3m2!1sen!2set!4v1751448879065!5m2!1sen!2set"
        width="1210" height="150" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
     `
    return value;
  }
  else if(cities.value === "BD") {
    const value = await fetchFunction(bahirUrl);
    map.innerHTML = `
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4738.36844687508!2d37.38600981771148!3d11.588177700693878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1644d23307d78069%3A0xab0b134f632dff8!2sBahir%20Dar!5e0!3m2!1sen!2set!4v1751448991389!5m2!1sen!2set" 
        width="1210" height="150" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
     `
    return value;
  }
  else if(cities.value === "DD") {
    const value = await fetchFunction(direUrl);
    map.innerHTML = `
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3642.2831503267194!2d41.85659420327138!3d9.605386949446245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x163101db1195c6e7%3A0x10209694f03469cc!2sDire%20Dawa!5e0!3m2!1sen!2set!4v1751449051995!5m2!1sen!2set"
        width="1210" height="150" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
     `
    return value;
  }
  else if(cities.value === "HW") {
    const value = await fetchFunction(hawassaUrl);
    map.innerHTML = `
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4566.013670831489!2d38.49315959445443!3d7.048262798903905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b14573a067b82b%3A0xa82c1a9985db8f16!2sHawassa!5e0!3m2!1sen!2set!4v1751449114725!5m2!1sen!2set"
        width="1210" height="150" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
     `
    return value;
  }
  else if(cities.value === "MK") {
    const value = await fetchFunction(mekelleUrl);
    map.innerHTML = `
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5340.724137816129!2d39.47037576292319!3d13.496061313266491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x166afd46467c7649%3A0xe61495b1f6a300cc!2sMekele!5e0!3m2!1sen!2set!4v1751449184791!5m2!1sen!2set"
        width="1210" height="150" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
     `
    return value;
  }
  else {
    map.innerHTML = `The fetcher or the map is not workig`;
  }
}

function tempConverter(value) {
  return (5/9 * (value - 32)).toFixed(2);
}

async function currentPrinter() {
  const data = await fetcher();
  
  let conditions = data.currentConditions.conditions;
  if(data === 0) {
    time.innerText = "We are the currentPrinter baby";
  }
  time.innerText = `Time of fetch: ${data.currentConditions.datetime}`;
  country.innerText = "Country:  Ethiopia";
  city.innerText = `City:  ${cities.options[cities.selectedIndex].text}`;
  temp.innerText = `Temperature:  ${tempConverter(data.currentConditions.temp)} Celcius`
  prec.innerText = `Precipitation: ${data.currentConditions.precip}`
  condition.innerText = `Condition: ${conditions}`
  windSpeed.innerText = `Wind Speed: ${data.currentConditions.windspeed} mph`

  const splitCondition = conditions.split(", ");
  const conditionsLowerCase = splitCondition.map((con)=> {
    return con.toLowerCase();
  });

  if(conditionsLowerCase[0] === "clear") {
    video.innerHTML = `
            <video autoplay loop muted>
            <source src="media/ClearP.mp4" type="video/mp4">
            <p>The video is on Local file</p>
            </video>
            `;
  }
  else if(conditionsLowerCase[0] === "cloudy" || conditionsLowerCase[0] === "partially cloudy") {
    video.innerHTML = `
            <video autoplay loop muted src="media/Partially Cloudy.mp4" type="video/mp4">
            <p>The video is on Local file</p>
            </video>
            `;
  }
  else if(conditionsLowerCase[0] === "mostly cloudy") {
    video.innerHTML = `
            <video autoplay loop muted src="media/Mostly Cloudy.mp4" type="video/mp4">
            <p>The video is on Local file</p>
            </video>
            `;
  }
  else if(conditionsLowerCase[0] === "rain" || conditionsLowerCase[0] === "heavy rain" || conditionsLowerCase[0] === "light rain" || conditionsLowerCase === "drizzle") {
    video.innerHTML = `
            <video autoplay loop muted src="media/rain.mp4" type="video/mp4">
            <p>The video is on Local file</p>
            </video>
            `;
  }
  else if(conditionsLowerCase[0] === "fog" || conditionsLowerCase[0] === "mist" || conditionsLowerCase[0] === "smoke") {
    video.innerHTML = `
            <video autoplay loop muted src="media/Fog.mp4" type="video/mp4">
            <p>The video is on Local file</p>
            </video>
            `;
  }
  else if(conditionsLowerCase[0] === "snow" || conditionsLowerCase[0] === "light snow" || conditionsLowerCase[0] === "heavy snow") {
    video.innerHTML = `
            <video autoplay loop muted src="media/snow.mp4" type="video/mp4">
            <p>The video is on Local file</p>
            </video>
            `;
  }
  else if(conditionsLowerCase[0] === "ice pellets" || conditionsLowerCase[0] === "sleet" || conditionsLowerCase[0] === "freezing rain" || conditionsLowerCase === "hail") {
    video.innerHTML = `
            <video autoplay loop muted src="media/ice pellets.mp4" type="video/mp4">
            <p>The video is on Local file</p>
            </video>
            `;
  }
  else if(conditionsLowerCase[0] === "thunderstorm") {
    video.innerHTML = `
            <video autoplay loop muted src="media/thunderstorm.mp4" type="video/mp4">
            <p>The video is on Local file</p>
            </video>
            `;
  }
  else if(conditionsLowerCase[0] === "dust") {
    video.innerHTML = `
            <video autoplay loop muted src="dust.mp4" type="video/mp4">
            <p>The video is on Local file</p>
            </video>
            `;
  }
  else if(conditionsLowerCase[0] === "sandstorm") {
    video.innerHTML = `
            <video autoplay loop muted src="media/sandstorm.mp4" type="video/mp4">
            <p>The video is on Local file</p>
            </video>
            `;
  }
  else if(conditionsLowerCase[0] === "overcast") {
    video.innerHTML = `
            <video autoplay loop muted src="media/overcast.mp4" type="video/mp4">
            <p>The video is on Local file</p>
            </video>
            `;
  } 
  else {
    video.innerHTML = null;
  } 
}

async function dailyPrinter() {
  const dailyData = await fetcher();
  let i = 0;
  function dailyDisplay() {
    const dailyDescription = dailyData.days[i].description;
    date.innerText = `Date: ${dailyData.days[i].datetime}`;
    tempMax.innerText = `Maximun Temperature: ${tempConverter(dailyData.days[i].tempmax)} Celcius`;
    tempMin.innerText = `Minimum Temperature: ${tempConverter(dailyData.days[i].tempmin)} Celcius`;
    tempAve.innerText = `Temperature: ${tempConverter(dailyData.days[i].temp)} Celcius`;
    humidity.innerText = `Humidity: ${dailyData.days[i].humidity}`;
    precipitation.innerText = `Precipitation: ${dailyData.days[i].precip}`;
    windspeed.innerText = `Windspeed: ${dailyData.days[i].windspeed}`;
    pressure.innerText = `Pressure: ${dailyData.days[i].pressure}`;
    sunrise.innerText = `Sunrise: ${dailyData.days[i].sunrise}`;
    sunset.innerText = `Sunset: ${dailyData.days[i].sunset}`;
    description.innerText = `${dailyDescription}`;

    //background that matches the weather for the day
    const descriptionLowerCase = dailyDescription.toLowerCase();
    if(descriptionLowerCase.includes("sunny")) {
      rightFrame[0].style.cssText = `background: linear-gradient(to bottom, #f9d423, #ff4e50);`;
    }
    else if(descriptionLowerCase.includes("overcast") && descriptionLowerCase.includes("cloudy")) {
      rightFrame[0].style.cssText = `background: linear-gradient(to bottom, #757f9a, #d7dde8);`;
    }
    else if(descriptionLowerCase.includes("cloudy")) {
      rightFrame[0].style.cssText = `background: linear-gradient(to bottom, #83a4d4, #b6fbff);`;
    }
    else if(descriptionLowerCase.includes("rain")) {
      rightFrame[0].style.cssText = `background: linear-gradient(to bottom, #667db6, #0082c8);`;
    }
    else if(descriptionLowerCase.includes("thunderstorm") || descriptionLowerCase.includes("storm")) {
      rightFrame[0].style.cssText = `background: linear-gradient(to bottom, #485563, #29323c);`;
    }
    else if(descriptionLowerCase.includes("snow")) {
      rightFrame[0].style.cssText = `background: linear-gradient(to bottom, #e0eafc, #cfdef3);`;
    }
    else if(descriptionLowerCase.includes("fog") || descriptionLowerCase.includes("mist")) {
      rightFrame[0].style.cssText = `background: linear-gradient(to bottom, #bdc3c7, #2c3e50);`;
    }
    else if(descriptionLowerCase.includes("windy")) {
      rightFrame[0].style.cssText = `background: linear-gradient(to bottom, #74ebd5, #acb6e5);`;
    }
    else if(descriptionLowerCase.includes("hot")) {
      rightFrame[0].style.cssText = `background: linear-gradient(to bottom, #f83600, #f9d423);`;
    }
    else if(descriptionLowerCase.includes("cold")) {
      rightFrame[0].style.cssText = `background: linear-gradient(to bottom, #83a4d4, #b6fbff);`;
    }
  }

  dailyDisplay();
  nextBtn.addEventListener("click", ()=> {
    if(i <= 13) {
      i++;
      dailyDisplay();
    }
  });
  backBtn.addEventListener("click", ()=> {
    if(i > 0) { 
      i--;
      dailyDisplay();
    }
  });
}

currentPrinter();
dailyPrinter();
cities.addEventListener("change",()=> {
  currentPrinter();
  dailyPrinter();
});