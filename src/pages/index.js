import React from "react"
import styles from "./index.module.css"

import Hero from "../components/hero"
import Footer from "../components/footer"
import Card from "../components/card"
import InsidePic from "../img/inside-absence.jpeg"
import NotherePic from "../img/nothere.png"

function Landing() {
  return (
    <div>
      <Hero />
      <div className={styles.gallery}>
        <Card img={InsidePic} title="inside absence" />
        <Card img={NotherePic} title="nothere.space" />
      </div>
      <Footer />
    </div>
  )
}

export default Landing
