import React from "react"
import Layout from "../components/layout"
import Card from "../components/card"
import Pic from "../img/inside/IMG_4003.jpeg"
import Pic2 from "../img/inside/IMG_4012.jpeg"
import Pic3 from "../img/inside/IMG_4018.jpeg"
import Pic4 from "../img/inside/IMG_4020.jpeg"

export default function Inside() {
  return (
    <Layout>
      <div>
        <h1>inside absence</h1>
        <div>
          Die Installation beschäftigt sich mit dem, was nicht da ist: Der
          Abwesenheit. Das zeigt sich bereits auf den ersten Blick. Schaut die
          Besucherin in den Raum, ist nichts zu sehen.  Was nicht zu sehen ist,
          sind die virtuellen Soundblasen, aus denen die Installation zusammen
          gesetzt ist. Nähert man sich einer solchen Blase, ausgerüstet mit
          einem digitalen Medium und Kopfhörern, wird der darin enthaltene Sound
          ausgelöst. Die Besucherin hört also, was sie selber verursacht. Erst
          jetzt ist die Installation präsent. Im Kern der Installation befindet
          sich ein in sich geschlossenes Musikstück. Dieses Stück verteilt sich
          auf mehrere zusammenhängende Soundblasen. Je nach Position im Raum
          hört die Besucherin ein anderes Element des Stückes, nie das
          Gesamtwerk. In und um das Musikstück herum sind weitere, von der Musik
          unabhängige Soundblasen platziert. Sie enthalten neben gedanklichen
          Anregungen auch musikalische Erweiterungen zum Thema.  «inside
          absence» existiert ausschliesslich virtuell. Durch das digitale Medium
          erfährt man die Virtualität. Die Installation spielt mit dem Einfluss,
          den Körper und Virtualität aufeinander ausüben. Wo der Körper ist,
          wird Erfahrung möglich. Je nach Erfahrung, verhält sich der Körper
          anders, was wiederum andere, virtuelle Erfahrungen zulässt. Körper und
          Virtualität stehen also in einem ständigen, sehr engen Austausch,
          welcher die Zustände zwischen der Anwesenheit im Raum und der
          Anwesenheit in der Virtualität verwischt.   Das Atelier für
          Digitalstoffe (°2020) ist ein Kollektiv bestehend aus Jasmin Bissig,
          Annina Polivka und Franziska Bruecker. Sie haben sich zusammen
          gefunden, um an der Schnittstelle von analogen und digitalen Medien
          das Thema der Abwesenheit zu behandeln. Die Integration von neuen
          Medien in Verbindung mit dem Fachwissen der einzelnen Künstlerinnen,
          von Sounddesign über Performance bis Informatik, bilden die Basis
          ihrer Arbeit.  
        </div>
        <img src={Pic} style={{ width: "50vw", padding: "50px" }} />
        <img src={Pic2} style={{ width: "50vw", padding: "50px" }} />
        <img src={Pic3} style={{ width: "50vw", padding: "50px" }} />
        <img src={Pic4} style={{ width: "50vw", padding: "50px" }} />
      </div>
    </Layout>
  )
}
