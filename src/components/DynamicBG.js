import React from 'react'
import sunny from '../res/bg/Sunny.png'
import duskdawn from '../res/bg/DuskDawn.png'
import clear from '../res/bg/Clear.png'
import sunnyCloudy from '../res/bg/SunnyCloudy.png'
import duskdawnCloudy from '../res/bg/DuskDawnCloudy.png'
import clearCloudy from '../res/bg/ClearCloudy.png'
export const DynamicBG = ({weather, forecast}) => {
    const today = new Date(`${forecast.location.localtime}`).getTime();
    const sunrise = new Date(`${forecast.forecast.forecastday[0].date} ${forecast.forecast.forecastday[0].astro.sunrise.substr(0,5)}`).getTime();
    const sunset = new Date(`${forecast.forecast.forecastday[0].date} ${forecast.forecast.forecastday[0].astro.sunset.substr(0,5)}`).getTime();
    let bg;
    if(weather.current.condition.code===1000){
        console.log("clear")
        if(weather.current.is_day===1){
            console.log("is day")
            if(Math.abs(today - sunrise)<3600000 ||Math.abs(today - sunset)<3600000){
                console.log("is dawndusk")
                bg = `url(${duskdawn})`
            }
            else{
                console.log("is not dawndusk")
                bg = `url(${sunny})`
            }
        }
        else{
            console.log("is night")
            if(Math.abs(today - sunrise)<3600000 ||Math.abs(today - sunset)<3600000){
                console.log("is dawndusk")
                bg = `url(${duskdawn})`
            }
            else{
                console.log("is not dawndusk")
                bg = `url(${clear})`
            }
        }
    }
    else if(weather.current.condition.code===1003 || weather.current.condition.code===1006 || weather.current.condition.code===1009 || weather.current.condition.code===1030){
        console.log("cloudy")
        if(weather.current.is_day===1){
            console.log("is day")
            if(Math.abs(today - sunrise)<3600000 ||Math.abs(today - sunset)<3600000){
                console.log("is dawnduskcloudy")
                bg = `url(${duskdawnCloudy})`
            }
            else{
                console.log("is not dawnduskcloudy")
                bg = `url(${sunnyCloudy})`
            }
        }
        else{
            console.log("is night")
            if(Math.abs(today - sunrise)<3600000 ||Math.abs(today - sunset)<3600000){
                console.log("is dawnduskcloudy")
                bg = `url(${duskdawnCloudy})`
            }
            else{
                console.log("is not dawnduskcloudy")
                bg = `url(${clearCloudy})`
            }
        }
    }
    else{
        // console.log("else")
        // if(weather.current.is_day===1){
        //     if(Math.abs(today - sunrise)<3600000 ||Math.abs(today - sunset)<3600000){
        //         bg = `url(${duskdawn})`
        //     }
        //     else{
        //         bg = `url(${sunny})`
        //     }
        // }
        // else{
        //     if(Math.abs(today - sunrise)<3600000 ||Math.abs(today - sunset)<3600000){
        //         bg = `url(${duskdawn})`
        //     }
        //     else{
        //         bg = `url(${clear})`
        //     }
        // }
    }
    return (
        <div className="bgcard" style={{backgroundImage: bg}}>
            
        </div>
    )
}