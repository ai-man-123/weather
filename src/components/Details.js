import React from 'react';
import SunriseSunset from './detailComponent/SunriseSunset';
import MoonPhase from './detailComponent/MoonPhase';
import MoonriseMoonset from './detailComponent/MoonriseMoonset';

const Details = ({forecast}) => {
    return (
        <div className="psuedoWeatherCard">
            <h3 className="floatLeft">Day Details</h3>
            <div className="daydetails">
              <SunriseSunset forecast={forecast}/>
              <MoonriseMoonset forecast={forecast}/>
              <MoonPhase forecast={forecast} />
            </div>
        </div>
    )
}

export default Details
