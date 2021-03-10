import React from "react"
import waves from "../img/waves.png"
import { Link } from "gatsby"
import styles from "./header.module.css"

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img className={styles.logo} src={waves}></img>
      </Link>
    </header>
  )
}
