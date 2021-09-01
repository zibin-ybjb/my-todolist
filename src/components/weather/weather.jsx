import axios from "axios"
import { useEffect, useState } from "react"
import "./weather.scss"
const key = "7b8c7c85c3d24126875e24fe8da559c6"
const locUrl = `https://geoapi.qweather.com/v2/city/lookup?key=${key}&number=20`

export default function Weather(props) {
  const { weather } = props

  const [location, setlocation] = useState([])
  useEffect(() => {
    return () => {}
  })
  const getLoc = () => {
    axios.get(locUrl + "&location=" + "北京").then((res) => {
      console.log(res)
      let location = res.data.location
      console.log(location)
      setlocation(location)
    })
  }
  return (
    <div className="Weather">
      <div>{weather}</div>
      <button className="button" onClick={getLoc}>
        获取
      </button>
      <div className="loc-content">
        {location
          ? location.map((item) => {
              return (
                <div className="loc-item" key={item.name}>
                  <div>
                    <div>{item.name}</div>
                    <div>{item.country}</div>
                  </div>
                  <div>
                    <span>经度:{item.lat}</span>
                    <span>纬度:{item.lon}</span>
                    <span>时区:{item.tz}</span>
                  </div>
                  <span>评分:{item.rank}</span>
                </div>
              )
            })
          : ""}
      </div>
    </div>
  )
}
