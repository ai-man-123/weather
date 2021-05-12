import React from 'react'
import sunny from '../res/bg/Sunny.png'
import duskdawn from '../res/bg/DuskDawn.png'
import clear from '../res/bg/Clear.png'
import sunnyCloudy from '../res/bg/SunnyCloudy.png'
import duskdawnCloudy from '../res/bg/DuskDawnCloudy.png'
import clearCloudy from '../res/bg/ClearCloudy.png'

export const DynamicBG = ({weather, forecast}) => {
    const today = new Date(`${forecast.location.localtime}`).getTime();
    // console.log(today)
    const sunrise = new Date(`${forecast.forecast.forecastday[0].date} ${forecast.forecast.forecastday[0].astro.sunrise.substr(0,5)}`).getTime();
    // console.log(sunrise)
    const sunset = new Date(`${forecast.forecast.forecastday[0].date} ${forecast.forecast.forecastday[0].astro.sunset.substr(0,5)}`).getTime() + 43200000;
    // console.log(sunset)
    const code = weather.current.condition.code
    let bg;
    if(code===1000){
        console.log("clear")
        if(weather.current.is_day===1){
            console.log("is day")
            if(Math.abs(today - sunrise)<1800000 || Math.abs(today - sunset)<1800000){
                console.log("is dawndusk")
                console.log(`sunrise - ${Math.abs(today - sunrise)} sunset - ${Math.abs(today - sunset)}`)
                bg = `url(${duskdawn})`
            }
            else{
                console.log("is not dawndusk")
                console.log(`sunrise - ${Math.abs(today - sunrise)} sunset - ${Math.abs(today - sunset)}`)
                bg = `url(${sunny})`
            }
        }
        else{
            console.log("is night")
            if(Math.abs(today - sunrise)<1800000 || Math.abs(today - sunset)<1800000){
                console.log("is dawndusk")
                console.log(`sunrise - ${Math.abs(today - sunrise)} sunset - ${Math.abs(today - sunset)}`)
                bg = `url(${duskdawn})`
            }
            else{
                console.log("is not dawndusk")
                console.log(`sunrise - ${Math.abs(today - sunrise)} sunset - ${Math.abs(today - sunset)}`)
                bg = `url(${clear})`
            }
        }
    }
    else if(code===1003 || code===1006 || code===1009 || code===1030){
        console.log("cloudy")
        if(weather.current.is_day===1){
            console.log("is day")
            if(Math.abs(today - sunrise)<1800000 || Math.abs(today - sunset)<1800000){
                console.log("is dawnduskcloudy")
                console.log(`sunrise - ${Math.abs(today - sunrise)} sunset - ${Math.abs(today - sunset)}`)
                bg = `url(${duskdawnCloudy})`
            }
            else{
                console.log("is not dawnduskcloudy")
                console.log(`sunrise - ${Math.abs(today - sunrise)} sunset - ${Math.abs(today - sunset)}`)
                bg = `url(${sunnyCloudy})`
            }
        }
        else{
            console.log("is night")
            if(Math.abs(today - sunrise)<1800000 || Math.abs(today - sunset)<1800000){
                console.log("is dawnduskcloudy")
                console.log(`sunrise - ${Math.abs(today - sunrise)} sunset - ${Math.abs(today - sunset)}`)
                bg = `url(${duskdawnCloudy})`
            }
            else{
                console.log("is not dawnduskcloudy")
                console.log(`sunrise - ${Math.abs(today - sunrise)} sunset - ${Math.abs(today - sunset)}`)
                bg = `url(${clearCloudy})`
            }
        }
    }
    else{
        console.log("else")
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
    // const test = new Date("2021-05-11 06:22").getTime();
    // const test2 = new Date("2021-05-11 18:22").getTime();
    // console.log(test2 - test)
    return (
        <div className="bgcard" style={{backgroundImage: bg}}>
            
        </div>
    )
}