import React from "react"
import Layout from "../components/layout"
import Pic from "../img/vrlab/besucherin.jpg"
import Pic2 from "../img/vrlab/besucher.jpg"
import Pic3 from "../img/vrlab/digitalstoffe.jpg"
import Pic4 from "../img/vrlab/podium.jpg"
import Pic5 from "../img/vrlab/vorhang.jpg"

export default function Inside() {
  return (
    <Layout>
      <div>
        <h1>ABSENCE:IS</h1>
        <div>
          Das Kleintheater Luzern hat die Spielzeit 2021/22 als «hybrid»
          deklariert. Im Verlauf des Jahres wird erprobt, wie sich bestimmte
          digitale Kommunikationswege eignen, um das Theaterprogramm zu ergänzen
          oder zu transformieren. In Zusammenarbeit mit der Hochschule Luzern
          (HSLU) wurden dafür die Räume des Kleintheaters virtuell nachgebildet,
          so dass diese auch in Virtual Reality (VR) bespielt werden können. Auf
          eine öffentliche Ausschreibung im Herbst 2021 wurden fünf Gruppen von
          Kunstschaffenden ausgewählt, um in Begleitung von Forschungsgruppen
          der HSLU Informatik und Design und Kunst in VR zu experimentieren.
          https://www.kleintheater.ch/digitale-buehne
        </div>
        <img src={Pic} style={{ width: "50vw", padding: "50px" }} />
        <img src={Pic2} style={{ width: "50vw", padding: "50px" }} />
        <img src={Pic3} style={{ width: "50vw", padding: "50px" }} />
        <img src={Pic4} style={{ width: "50vw", padding: "50px" }} />
        <img src={Pic5} style={{ width: "50vw", padding: "50px" }} />
      </div>
    </Layout>
  )
}
