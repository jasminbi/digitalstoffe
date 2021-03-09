import React from "react"
import Header from "../components/header"

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div style={{ margin: "20vh auto", maxWidth: 650, padding: "0 1rem" }}>
        {children}
      </div>
    </div>
  )
}
