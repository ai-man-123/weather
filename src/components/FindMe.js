import React, { useState } from 'react'
import findme from '../res/icons/findme.png'

const FindMe = ({setInput}) => {
    const [localInput, setLocalInput] = useState('')
    const weatherInput = (e) =>{
        setLocalInput(e.target.value)
    }
    const searchWeather = (e) =>{
        e.preventDefault()
        setLocalInput('')
        setInput(localInput)
    }
    return (
        <div className="searchbox">
            <form>
                <input type="text" placeholder="Search your city" onChange={weatherInput} value={localInput}/>
                <button onClick={searchWeather}><img src={findme} alt="" /></button>
            </form>
        </div>
    )
}

export default FindMe
