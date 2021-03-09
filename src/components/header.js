import React from "react"
import logo from "../img/waves.png"
import { Link } from "gatsby"

export default function Header() {
  return (
    <div>
      <Link to="/">
        <img src={logo}></img>
      </Link>
      <p>atelier für digitalstoffe.</p>
    </div>
  )
}
