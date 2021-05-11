import React from 'react'
import moonrise from '../../res/icons/moonrise.png'
import moonset from '../../res/icons/moonset.png'

const MoonriseMoonset = ({forecast}) => {
    return (
        <div className="gridCard">
          <div className="gridCardColumn">
            <p>MOONRISE</p>
            <div className="detailsInfo">
              <img src={moonrise} alt="" />
              <p>{forecast.forecast.forecastday[0].astro.moonrise.substr(0,5)}</p>
            </div>
          </div>
          <div className="gridCardColumn">
            <p>MOONSET</p>
            <div className="detailsInfo">
              <img src={moonset} alt="" />
              <p>{parseInt(forecast.forecast.forecastday[0].astro.moonset.substr(0,2))+12}:{forecast.forecast.forecastday[0].astro.moonset.substr(3,2)}</p>
            </div>
          </div>
        </div>
    )
}

export default MoonriseMoonset
