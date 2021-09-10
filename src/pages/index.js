import React from "react"
import styles from "./index.module.css"
import { Link } from "gatsby"

import Hero from "../components/hero"
import Footer from "../components/footer"
import Card from "../components/card"
import InsidePic from "../img/inside-absence.jpeg"
import NotherePic from "../img/nothere.png"
import P5 from "../components/p5"

function Landing() {
  return (
    <div>
      <Hero />
      <P5 />
      <div className={styles.gallery}>
        <Link to="/inside">
          <Card img={InsidePic} title="inside absence" />
        </Link>
        <Link to="/nothere">
          <Card img={NotherePic} title="nothere.space" />
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default Landing
