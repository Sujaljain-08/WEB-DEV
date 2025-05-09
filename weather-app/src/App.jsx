import { useState } from 'react'
import './App.css'
import SearchBar from './searchBar'
import InfoBox from './InfoBox'

function App() {
  const [data, setData] = useState({"request":{"type":"City","query":"New Delhi, India","language":"en","unit":"m"},"location":{"name":"New Delhi","country":"India","region":"Delhi","lat":"28.600","lon":"77.200","timezone_id":"Asia\/Kolkata","localtime":"2025-05-09 17:07","localtime_epoch":1746810420,"utc_offset":"5.50"},"current":{"observation_time":"11:37 AM","temperature":34,"weather_code":296,"weather_icons":["https:\/\/cdn.worldweatheronline.com\/images\/wsymbols01_png_64\/wsymbol_0017_cloudy_with_light_rain.png"],"weather_descriptions":["Light Rain"],"astro":{"sunrise":"05:35 AM","sunset":"07:01 PM","moonrise":"04:14 PM","moonset":"03:30 AM","moon_phase":"Waxing Gibbous","moon_illumination":88},"air_quality":{"co":"658.6","no2":"5.735","o3":"190","so2":"33.3","pm2_5":"86.58","pm10":"475.45","us-epa-index":"4","gb-defra-index":"4"},"wind_speed":9,"wind_degree":174,"wind_dir":"S","pressure":1005,"precip":0,"humidity":39,"cloudcover":75,"feelslike":33,"uv_index":1,"visibility":5,"is_day":"yes"}});
  console.log(data);
  return (
    <>
      <h1>Weather app</h1>
      <SearchBar setData={setData}></SearchBar>
      <InfoBox data={data}></InfoBox>
    </>
  )
}

export default App
