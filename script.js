const cityInput=document.getElementById("city-input")
const City=document.getElementById("getCity");
const GetTime=document.getElementById("getTime");
const Temp=document.getElementById("temp");
const Title=document.getElementById("title");
const Humidity=document.getElementById("humidity-data");
const Windspeed=document.getElementById("wind-data");
const weather_images=document.getElementById("getimage");


async function sendreq(){
   
    const dateObj=new Date();
    const year=dateObj.getFullYear();
    const month=dateObj.getMonth();
    const todayDate=dateObj.getDate();
    const data=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityInput.value}/${year}-${month}-${todayDate}?key=JCZSLX6RL6PTAEHYTKGV78URS`);
    const result=await data.json();
    console.log(result);
    
    City.innerHTML=result.resolvedAddress;
    GetTime.innerHTML=result.days[0].datetime;
   
    
    Humidity.innerHTML=`${result.days[0].humidity}%`;
    Windspeed.innerHTML=`${result.days[0].windspeed}M/s`;
    Temp.innerHTML=`${result.days[0].temp}deg F`;
    Title.innerHTML=result.days[0].conditions;

    switch(result.days[0].conditions){
        case 'Clouds':
            weather_images.src="./images/cloud.png";
            break;
        case 'Clear':
            weather_images.src="./images/clear.png";
            break;
            case 'Rain':
            weather_images.src="./images/rain.png";
            break;
            case 'Mist':
            weather_images.src="./images/mist.png";
            break;
            case 'Snow':
            weather_images.src="./images/snow.png";
            break;
    }



    
}