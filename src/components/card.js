import React from "react"
import styles from "./card.module.css"

export default props => (
  <div className={styles.cardContainer}>
    <div className={styles.card}>
      <div className={styles.title}>{props.title}</div>
      <img className={styles.image} src={props.img}></img>
    </div>
  </div>
)
