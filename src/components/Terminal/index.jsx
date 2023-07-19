import React, { useEffect, useState } from "react"
import styles from "./styles.module.css"

function Underscore() {
  const underscoreFlash = () => {
    const underscore = document.getElementById("underscore")
    underscore?.classList.toggle("hidden")
  }

  useEffect(() => {
    const interval = setInterval(underscoreFlash, 400)
    return () => clearInterval(interval)
  })

  return (
    <div id="underscore" className={styles.underscore}>
      &#95;
    </div>
  )
}

function TerminalText({ phrases }) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  let lettercount = 1
  let reverse = false
  let wait = false

  const typeEffect = async () => {
    const text = document.getElementById("text")
    text.innerHTML = phrases[phraseIndex].substring(0, lettercount)
    const callable = !reverse ? typeOutWord : backspace
    await handleReverse()
    if (!waiting()) callable()
  }

  const waiting = () => {
    return (
      wait ||
      (lettercount === phrases[phraseIndex].length + 1 && !reverse) ||
      (lettercount === 0 && reverse)
    )
  }

  const typeOutWord = () => {
    if (lettercount < phrases[phraseIndex].length + 1) lettercount++
  }

  const backspace = () => {
    if (lettercount > 0) lettercount--
  }

  const handleReverse = async () => {
    if (!reverse && lettercount === phrases[phraseIndex].length + 1)
      await toggleReverse()
    if (reverse && lettercount === 0) await toggleReverse()
  }

  const toggleReverse = () => {
    reverse = !reverse
    wait = true

    return new Promise((resolve) => {
      setTimeout(() => {
        wait = false
        resolve()
        if (reverse) {
          if (phraseIndex < phrases.length - 1) {
            setPhraseIndex(phraseIndex + 1)
            lettercount = 1
          } else {
            setPhraseIndex(0)
            lettercount = 1
          }
        }
      }, 3000)
    })
  }

  useEffect(() => {
    const interval = setInterval(typeEffect, 80)
    return () => clearInterval(interval)
  })

  return <span id="text" />
}

export function Terminal() {
  return (
    <div>
      <div className={styles.terminal}>
        <span> &gt;&nbsp;&nbsp;</span>
        <TerminalText
          phrases={[
            "helm repo add cloud-agnost",
            "helm install agnost cloud-agnost/base",
          ]}
        />
        <Underscore />
      </div>
    </div>
  )
}
