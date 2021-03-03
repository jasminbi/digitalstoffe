import React from "react"
import styles from "./card.module.css"

export default props => (
  <div className={styles.cardContainer}>
    <div className={styles.card}>
      <img className={styles.image} src={props.img}></img>
      <div className={styles.title}>{props.title}</div>
    </div>
  </div>
)
