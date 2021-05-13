import React from 'react'
import clear from '../res/bg/Clear.png'
import clearCloudy from '../res/bg/ClearCloudy.png'
import duskdawn from '../res/bg/DuskDawn.png'
import duskdawnCloudy from '../res/bg/DuskDawnCloudy.png'
import heavyRain from '../res/bg/HeavyRain.png'
import lightRain from '../res/bg/LightRain.png'
import mistFog from '../res/bg/MistFog.png'
import scorcher from '../res/bg/Scorcher.png'
import snow from '../res/bg/Snow.png'
import sunny from '../res/bg/Sunny.png'
import sunnyCloudy from '../res/bg/SunnyCloudy.png'

export const DynamicBG = ({weather, forecast}) => {
    const today = new Date(`${forecast.location.localtime}`).getTime();
    const sunrise = new Date(`${forecast.forecast.forecastday[0].date} ${forecast.forecast.forecastday[0].astro.sunrise.substr(0,5)}`).getTime();
    const sunset = new Date(`${forecast.forecast.forecastday[0].date} ${forecast.forecast.forecastday[0].astro.sunset.substr(0,5)}`).getTime() + 43200000;
    const code = weather.current.condition.code
    let bg;
    if(code===1000){
        if(weather.current.is_day===1){
            if(Math.abs(today - sunrise)<1800000 || Math.abs(today - sunset)<1800000){
                bg = `url(${duskdawn})`
            }
            else{
                if(forecast.current.temp_c>42){
                    bg = `url(${scorcher})`
                }
                else{
                    bg = `url(${sunny})`
                }
            }
        }
        else{
            if(Math.abs(today - sunrise)<1800000 || Math.abs(today - sunset)<1800000){
                bg = `url(${duskdawn})`
            }
            else{
                bg = `url(${clear})`
            }
        }
    }
    else if(code===1003 || code===1006 || code===1009){
        if(weather.current.is_day===1){
            if(Math.abs(today - sunrise)<1800000 || Math.abs(today - sunset)<1800000){
                bg = `url(${duskdawnCloudy})`
            }
            else{
                bg = `url(${sunnyCloudy})`
            }
        }
        else{
            if(Math.abs(today - sunrise)<1800000 || Math.abs(today - sunset)<1800000){
                bg = `url(${duskdawnCloudy})`
            }
            else{
                bg = `url(${clearCloudy})`
            }
        }
    }
    else if(code===1030 || code===1135 || code===1147){
        bg = `url(${mistFog})`
    }
    else if(code===1063 || code===1069 || code===1150 || code===1153 || code===1168 || code===1180 || code===1183 || code===1186 || code===1189 || code===1198 || code===1201 || code===1204 || code===1240 || code===1249){
        bg = `url(${lightRain})`
    }
    else if(code===1171 || code===1192 || code===1195 || code===1207 || code===1243 || code===1246 || code===1252){
        bg = `url(${heavyRain})`
    }
    else if(code===1066 || code===1072 || code===1114 || code===1117 || code===1210 || code===1213 || code===1216 || code===1219 || code===1222 || code===1225 || code===1237 || code===1255 || code===1258 || code===1261 || code===1264){
        bg = `url(${snow})`
    }
    else{
        if(weather.current.is_day===1){
            if(Math.abs(today - sunrise)<1800000 || Math.abs(today - sunset)<1800000){
                bg = `url(${duskdawn})`
            }
            else{
                bg = `url(${sunny})`
            }
        }
        else{
            if(Math.abs(today - sunrise)<1800000 || Math.abs(today - sunset)<1800000){
                bg = `url(${duskdawn})`
            }
            else{
                bg = `url(${clear})`
            }
        }
    }
    return (
        <div className="bgcard" style={{backgroundImage: bg}}>
            
        </div>
    )
}