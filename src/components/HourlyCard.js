import React, {useState, useRef} from 'react'
import { Line } from 'react-chartjs-2'

const HourlyCard = ({forecast, selectHourlyDay}) => {
    const timeRef = useRef(null)
    const [bar, setBar] = useState(true)
    const [line, setLine] = useState(false)
    let i=0;
    const data0 = []
    const data1 = []
    const data2 = []
    const label = []
    while(i<forecast.forecast.forecastday[0].hour.length){
        data0.push(forecast.forecast.forecastday[0].hour[i].temp_c)
        data1.push(forecast.forecast.forecastday[1].hour[i].temp_c)
        data2.push(forecast.forecast.forecastday[2].hour[i].temp_c)
        label.push(`${i}:00`)
        i++;
    }
    let dayNo = 0
    let databar = data0
    if(selectHourlyDay===0){
        dayNo = 0
        databar = data0
    }
    if(selectHourlyDay===1){
        dayNo = 1
        databar = data1
    }
    if(selectHourlyDay===2){
        dayNo = 2
        databar = data2
    }
    const barClicked = () =>{
        setBar(true)
        setLine(false)
    }
    const lineClicked = () =>{
        setBar(false)
        setLine(true)
    }
    const hr = parseInt(forecast.location.localtime.substr(11,2))
    let min
    if(hr<10)
        min = parseInt(forecast.location.localtime.substr(13,2))
    else
        min = parseInt(forecast.location.localtime.substr(14,2))
    const chrprogress = `${(Math.round(((hr*4 + 2) + ((min*100 / 60)/25))*100)/100)}%`
    const showtime = (e) =>{
            timeRef.current.style.opacity="1"
            timeRef.current.style.top=`${e.pageY - 15}px`
            timeRef.current.style.left=`${e.pageX - 12}px`
    }
    const dontshowtime = () =>{
        timeRef.current.style.opacity="0"
    }
    return (
        <div className="psuedoWeatherCard">
            <div className="floatLeft">
                <h3>Hourly Forecast</h3>
                <div className="chooser">
                    <button className={`${bar ? 'btnactive' : ''}`} onClick={barClicked}>Bar Graph</button>
                    <button className={`${line ? 'btnactive' : ''}`} onClick={lineClicked}>Line Graph</button>
                </div>
            </div>
            {
                bar && (
                    <div className="hourly">
                        {forecast.forecast.forecastday[dayNo].hour.map(hour=>(
                        <div className="hourlybar" key={Math.random()*Math.random()}>
                            <div className="bar" style={{height: `${Math.floor(hour.temp_c * Math.floor(250 / forecast.forecast.forecastday[dayNo].day.maxtemp_c)) - 25}px`, transition: "0.2s"}}></div>
                            <p style={{bottom: `${Math.floor(hour.temp_c * Math.floor(250 / forecast.forecast.forecastday[dayNo].day.maxtemp_c) - 15)}px`}}>{hour.temp_c}°c</p>
                        </div>
                        ))}
                        {(selectHourlyDay===0) && (
                        <div className="currenthour" onMouseOver={showtime} onMouseOut={dontshowtime} style={{left: chrprogress, height: `${Math.floor(forecast.forecast.forecastday[dayNo].hour[hr].temp_c * Math.floor(250 / forecast.forecast.forecastday[dayNo].day.maxtemp_c)) - 25}px`}}></div>
                        )}
                        <div className="currenttime" ref={timeRef}><p>{forecast.location.localtime.substr(11,5)}</p></div>
                    </div>
                )
            }
            {
                line && (
                    <div className="graphly">
                        <Line 
                            data = {{
                                labels: label,
                                datasets: [{
                                    data: databar,
                                    fill: true,
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                    borderColor: 'rgba(255, 255, 255, 0.4)',
                                    borderWidth: 2,
                                    lineTension: 0.4
                                }]
                            }}
                            options={{ 
                                scales: {
                                    x: {
                                        display: false,
                                        grid: {
                                            display: false
                                        }
                                    },
                                    y: {
                                        beginAtZero: true,
                                        display: false,
                                        grid: {
                                            display: false
                                        }
                                    }
                                },
                                maintainAspectRatio: false,
                                plugins: {
                                  legend: {
                                    display: false,
                                  }
                                },
                                elements: {
                                    point:{
                                        radius: 1
                                    }
                                },
                                animation: false
                            }}
                        />
                        <div className="absolutegraphlybar">
                            {forecast.forecast.forecastday[dayNo].hour.map(hour=>(
                            <div className="graphlybar" key={Math.random()*Math.random()}>
                                <p style={{bottom: `${Math.floor(hour.temp_c * Math.floor(250 / forecast.forecast.forecastday[dayNo].day.maxtemp_c ) - 15)}px`}}>{hour.temp_c}°c</p>
                            </div>
                            ))}
                        </div>
                        {(selectHourlyDay===0) && (
                        <div className="currenthour" onMouseOver={showtime} onMouseOut={dontshowtime} style={{left: chrprogress, height: `${Math.floor(forecast.forecast.forecastday[dayNo].hour[hr].temp_c * Math.floor(250 / forecast.forecast.forecastday[dayNo].day.maxtemp_c)) - 25}px`}}></div>
                        )}
                        <div className="currenttime" ref={timeRef}><p>{forecast.location.localtime.substr(11,5)}</p></div>
                    </div>
                )
            }
            <div className="hourlytime">
                <p>02:00</p>
                <p>06:00</p>
                <p>10:00</p>
                <p>14:00</p>
                <p>18:00</p>
                <p>22:00</p>
            </div>
        </div>
    )
}

export default HourlyCard
