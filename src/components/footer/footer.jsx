import "./footer.scss"
import up from "../../assets/icon/up.png"
import { useEffect, useState, useRef } from "react"
export default function Footer(props) {
  const containerRef = useRef(null)
  const [down, setdown] = useState(false)
  const [height, setheight] = useState("")
    useEffect(() => {
        if (down) {
            containerRef.current.style.height = "70%"
          } else {
            containerRef.current.style.height = ""
          }
        return () => {

        };
    });
  const clickUp = () => {
    setdown(!down)

  }
  return (
    <div
      ref={containerRef}
      className={down ? "Footer-up":"Footer"}
    >
      <img
      onClick={clickUp}
        src={up}
        className={down ? "down-icon":"up-icon"}
        ></img>
    </div>
  )
}
