import { useEffect, useState } from 'react';
import './main.css';
import axios from "axios";
import MainComponent from './components/MainComponent';
import { DynamicBG } from './components/DynamicBG';
import FindMe from './components/FindMe';

function App() {
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [input, setInput] = useState('')
  useEffect(()=>{
      // if(navigator.geolocation){
      //   console.log(navigator.geolocation.getCurrentPosition())
      //   navigator.geolocation.getCurrentPosition(position =>{
      //     const locHandled = `${position.coords.latitude},${position.coords.longitude}`;
      //     getWeather(locHandled);
      //   })
      // }
      // else{
      //   alert("Location Denied. Default location set to New Delhi.");
      //   const locUnhandled = "New Delhi"
      //   getWeather(locUnhandled)
      // }
      if (input===''){
        const noGeoLocationHandle = () =>{
          alert('Location is turned off. Default location set to "New Delhi"')
          const locUnhandled = "New Delhi"
          getWeather(locUnhandled)
        }
        if (navigator.geolocation) {
          var timeoutInSeconds=1;
          var geotimeout=setTimeout(function() {
            noGeoLocationHandle()
          },timeoutInSeconds*1000+500); //plus 500 ms to allow the API to timeout normally
          navigator.geolocation.getCurrentPosition(position => {
            clearTimeout(geotimeout);
            const locHandled = `${position.coords.latitude},${position.coords.longitude}`;
            getWeather(locHandled);
          },
          function () {
            clearTimeout(geotimeout);
            noGeoLocationHandle()
          },
          {
            enableHighAccuracy:true,
            timeout: timeoutInSeconds*1000
          });
        }
        else{
          noGeoLocationHandle()
        }
      }
      else{
          console.log("bla")
          getWeather(input)
          console.log(input)
      }
  }, [input])
  const getWeather = async (location) =>{
    try{
      console.log(`Location updated to - ${location}`)
      const responseWeather =  await axios.get(`https://api.weatherapi.com/v1/current.json?key=493eecc7444e4bae8bb140053210905&q=${location}&aqi=yes`);
      const responseForecast =  await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=493eecc7444e4bae8bb140053210905&q=${location}&days=7&aqi=no&alerts=no`);
      setWeather(responseWeather.data)
      setForecast(responseForecast.data)
      console.log(responseWeather.data);
      console.log(responseForecast.data);
    }
    catch(error){
      alert('Please enter a valid "City", "City, Country" or "Latitude, Longitude".')
    }
  }
  return (
    <div className="App">
      {weather && forecast && (
        <div>
          <DynamicBG weather={weather} forecast={forecast}/>
          <FindMe setInput={setInput}/>
          <MainComponent weather={weather} forecast={forecast}/>
        </div>
      )}
    </div>
  );
}

export default App;
