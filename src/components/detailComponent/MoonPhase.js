import React from 'react'
import waxingcrescent from '../../res/icons/Waxing Crescent.png'
import firstquarter from '../../res/icons/First Quarter.png'
import waxinggibbous from '../../res/icons/Waxing Gibbous.png'
import fullmoon from '../../res/icons/Full Moon.png'
import waninggibbous from '../../res/icons/Waning Gibbous.png'
import lastquarter from '../../res/icons/Last Quarter.png'
import waningcrescent from '../../res/icons/Waning Crescent.png'

const MoonPhase = ({forecast}) => {
    const currentPhase = forecast.forecast.forecastday[0].astro.moon_phase;
    return (
        <div className="moonphase">
          <p>MOONPHASE</p>
          <div className="moonPhasesImages">
            <div className={`phaseImg ${(currentPhase==="Waxing Crescent")? 'opaque' : ''}`}>
              <img src={waxingcrescent} alt="" />
            </div>
            <div className={`phaseImg ${(currentPhase==="First Quarter")? 'opaque' : ''}`}>
              <img src={firstquarter} alt="" />
            </div>
            <div className={`phaseImg ${(currentPhase==="Waxing Gibbous")? 'opaque' : ''}`}>
              <img src={waxinggibbous} alt="" />
            </div>
            <div className={`phaseImg ${(currentPhase==="Full Moon")? 'opaque' : ''}`}>
              <img src={fullmoon} alt="" />
            </div>
            <div className={`phaseImg ${(currentPhase==="Waning Gibbous")? 'opaque' : ''}`}>
              <img src={waninggibbous} alt="" />
            </div>
            <div className={`phaseImg ${(currentPhase==="Last Quarter")? 'opaque' : ''}`}>
              <img src={lastquarter} alt="" />
            </div>
            <div className={`phaseImg ${(currentPhase==="Waning Crescent")? 'opaque' : ''}`}>
              <img src={waningcrescent} alt="" />
            </div>
          </div>
          <p>{currentPhase}</p>
        </div>
    )
}

export default MoonPhase
