import React from "react"
import styles from "./index.module.css"
import { Link } from "gatsby"

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
        <Link to="/inside">
          <Card img={InsidePic} title="inside absence" />
        </Link>
        <a
          href="https://giwww.nothere.space"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card img={NotherePic} title="nothere.space" />
        </a>
      </div>
      <Footer />
    </div>
  )
}

export default Landing
