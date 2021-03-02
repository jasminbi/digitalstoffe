import React from "react"
import heroStyles from "./hero.module.css"
import gif from "../gifs/digitalstoffe_pulse.gif"

export default function Hero() {
  return (
    <div className={heroStyles.hero}>
      <p>
        A T E L I E R <br /> <br /> F Ü R
      </p>
      <img className={heroStyles.logo} src={gif} alt="digitalstoffe_logo" />

    </div>
  )
}
