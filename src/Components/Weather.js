import React, {useState, useEffect} from 'react'
import axios from 'axios'



export default function Weather() {
    const [weather, setWeather] = useState(null)
    const getWeather = async () => {
       const data =  await axios.get('http://10.108.166.31:8000/api/v1/weather')
       console.log(data.data.data)
       setWeather(data.data.data)
    }
    useEffect(()=>{
        getWeather()
    }, [])
    console.log(weather)
  return (
    <div className="container">
        <h2>Weather in Mangalore: {weather}</h2>
    </div>
  )
}
