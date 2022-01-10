import React from "react"
import Layout from "../components/layout"
import Card from "../components/card"
import GuerillaPic from "../img/guerilla.jpg"

export default function Inside() {
  return (
    <Layout>
      <div>
        <h1>Guerilla Gallery inside absence</h1>
        <div>
          Der Zürcher Ida Platz wird zur Guerilla Gallerie für das was nicht da
          ist: Sounds in Abwesenheit (
          <a href="https://digitalstoffe.ch/inside">inside absence</a>).  
        </div>
        <img src={GuerillaPic} style={{ width: "50vw", padding: "50px" }} />
      </div>
    </Layout>
  )
}
