import React from 'react'
import sunrise from '../../res/icons/sunrise.png'
import sunset from '../../res/icons/sunset.png'

const SunriseSunset = ({forecast}) => {
    return (
        <div className="gridCard">
          <div className="gridCardColumn">
            <p>SUNRISE</p>
            <div className="detailsInfo">
              <img src={sunrise} alt="" />
              <p>{forecast.forecast.forecastday[0].astro.sunrise.substr(0,5)}</p>
            </div>
          </div>
          <div className="gridCardColumn">
            <p>SUNSET</p>
            <div className="detailsInfo">
              <img src={sunset} alt="" />
              <p>{parseInt(forecast.forecast.forecastday[0].astro.sunset.substr(0,2))+12}:{forecast.forecast.forecastday[0].astro.sunset.substr(3,2)}</p>
            </div>
          </div>
        </div>
    )
}

export default SunriseSunset
