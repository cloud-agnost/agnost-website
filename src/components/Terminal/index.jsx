import React, { useEffect } from "react"
import styles from "./styles.module.css"

function Underscore() {
  const underscoreFlash = () => {
    const underscore = document.getElementById("underscore")
    underscore?.classList.toggle("hidden")
  }

  useEffect(() => {
    // subscribe
    const interval = setInterval(underscoreFlash, 400)
    // unsubscribe
    return () => clearInterval(interval)
  })

  return (
    <div id="underscore" className={styles.underscore}>
      &#95;
    </div>
  )
}

function TerminalText({ phrase }) {
  let lettercount = 1
  let reverse = false
  let wait = false

  const typeEffect = async () => {
    const text = document.getElementById("text")
    text.innerHTML = phrase.substring(0, lettercount)
    const callable = !reverse ? typeOutWord : backspace
    await handleReverse()
    if (!waiting()) callable()
  }

  const waiting = () => {
    return (
      wait ||
      (lettercount === phrase.length + 1 && !reverse) ||
      (lettercount === 0 && reverse)
    )
  }

  const typeOutWord = () => {
    if (lettercount < phrase.length + 1) lettercount++
  }

  const backspace = () => {
    if (lettercount > 0) lettercount--
  }

  const handleReverse = async () => {
    if (!reverse && lettercount === phrase.length + 1) await toggleReverse()
    if (reverse && lettercount === 0) await toggleReverse()
  }

  const toggleReverse = () => {
    reverse = !reverse
    wait = true

    return new Promise((resolve) => {
      setTimeout(() => {
        wait = false
        resolve()
      }, 3000)
    })
  }

  useEffect(() => {
    // subscribe
    const interval = setInterval(typeEffect, 80)
    // unsubscribe
    return () => clearInterval(interval)
  })

  return <span id="text" />
}

export function Terminal({ phrase }) {
  return (
    <div>
      <div className={styles.terminal}>
        <span> &gt;&nbsp;&nbsp;</span>
        <TerminalText phrase={phrase} />
        <Underscore />
      </div>
    </div>
  )
}
