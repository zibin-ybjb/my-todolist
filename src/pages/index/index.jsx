import axios from "axios";
import { useState,useEffect } from "react";
import Weather from "../../components/weather/weather";
const key ="7b8c7c85c3d24126875e24fe8da559c6"
let location="116.41,39.92"
const url =`https://devapi.qweather.com/v7/weather/now?key=${key}&location=${location}`
export default function Index(props) {
    const [weather, setweather] = useState("");
    useEffect( ()=>{
        // axios.get(url).then((res)=>{
        //     let now = res.data.now;
        //     setweather(now)
        //     console.log(res);
        // })
        return () => {
        //等同于componentDidWillUnmount
        }
    } )

    return (
      <div >
          <Weather weather={weather}></Weather>
      </div>
    );
}