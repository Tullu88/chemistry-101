import React from "react";
import styles from '../styles/Home.module.css'
import Navigation from "../components/navigation/Navigation";

export default function Home() {
  return (
    <div className={styles.container}>
        <Navigation/>
      <h1>Hello world</h1>
    </div>
  )
}
