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
        Das Atelier für Digitalstoffe (°2020) ist ein Kollektiv bestehend aus
        Jasmin Bissig, Annina Polivka und Franziska Bruecker. Sie haben sich
        zusammen gefunden, um an der Schnittstelle von analogen und digitalen
        Medien das Thema der Abwesenheit zu behandeln. Die Integration von neuen
        Medien in Verbindung mit dem Fachwissen der einzelnen Künstlerinnen, von
        Sounddesign über Performance bis Informatik, bilden die Basis ihrer
        Arbeit.
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
