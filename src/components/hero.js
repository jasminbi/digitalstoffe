import React from "react"
import styles from "./hero.module.css"
// import gif from "../gifs/digitalstoffe_pulse.gif"
import waves from "../img/waves.png"

export default function Hero() {
  return (
    <div className={styles.hero}>
      <p>A T E L I E R &nbsp;&nbsp;&nbsp;&nbsp;F Ü R</p>
      {/* <img className={styles.logo} src={gif} alt="digitalstoffe_logo" /> */}
      <img src={waves} className={styles.logo} />
      <p>D I G I T A L S T O F F E</p>
    </div>
  )
}
