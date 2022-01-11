import React from "react"
import styles from "./index.module.css"
import { Link } from "gatsby"

import Hero from "../components/hero"
import Footer from "../components/footer"
import Card from "../components/card"
import InsidePic from "../img/inside-absence.jpeg"
import NotherePic from "../img/nothere.png"
import GuerillaPic from "../img/guerilla.jpg"
import P5 from "../components/p5"

function Landing() {
  return (
    <div>
      <Hero />
      <P5 />
      <div className={styles.about}>
        Wir - Jasmin Bissig, Annina Polivka und Franziska Bruecker - sind das
        Atelier für Digitalstoffe (°2020). Wir haben uns in diesem Kollektiv
        zusammen gefunden, um an der Schnittstelle zwischen analogen und
        digitalen Medien das Thema «Abwesenheit» zu behandeln. Wir verbinden die
        Arbeit mit neuen Medien mit unserem Fachwissen und useren Interessen aus
        verschiedenen Bereichen von Sounddesign über Performance bis Informatik.
      </div>
      <div className={styles.gallery}>
        <Link to="/guerilla">
          <Card img={GuerillaPic} title="Guerilla Gallery" />
        </Link>{" "}
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
