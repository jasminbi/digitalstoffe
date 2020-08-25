import React from "react"
import heroStyles from "./hero.module.css"
import gif from "../gifs/digitalstoffe_pulse.gif"

export default function Hero() {
  return (
    <div className={heroStyles.hero}>
      <p>
        A T E L I E R <br /> F Ü R
      </p>
      <img className={heroStyles.logo} src={gif} alt="digitalstoffe_logo" />
      <div className={heroStyles.contact}>
        <p>Irgendwann gibts hier mehr.</p>
        <a href="mailto:hallo@digitalstoffe.ch">hallo@digitalstoffe.ch</a>
      </div>
    </div>
  )
}
