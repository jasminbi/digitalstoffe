import React from "react"
import Layout from "../components/layout"
import NotherePic from "../img/nothere.png"

export default function Nothere() {
  return (
    <Layout>
      <div>
        <h1>nothere.space</h1>
        <div>
          nothere.space dient uns als (digitalen) Raum, um Arbeiten und Gedanken
          zum Thema Abwesenheit auszustellen. Die Gallerie ist Work-in-Progress,
          Prototyp und Spielplatz ohne Anspruch, jemals vollendet zu sein.
        </div>
        <a
          href="https://www.nothere.space"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={NotherePic} style={{ width: "50vw", padding: "50px" }} />
        </a>
      </div>
    </Layout>
  )
}
