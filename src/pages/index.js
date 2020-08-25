import React from "react"
import gif from "../gifs/digitalstoffe_pulse.gif"

export default function Home() {
  return (
    <div>
      <img src={gif} alt="digitalstoffe_logo" />
      <p>Bald sind wir da.</p>
      <a href="mailto:hallo@digitalstoffe.ch">hallo@digitalstoffe.ch</a>
    </div>
  )
}
