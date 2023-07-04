import React from "react"
import { Chip } from "../Chip"
import styles from "./styles.module.css"

export type Props = {
  items: Array<{
    name: string
    permalink: string
    color: string
    backgroundColor: string
  }>
  activeChip?: string
}

export const Chips = ({ items, activeChip }: Props) => (
  <div className={styles.root}>
    {items.map(({ name, permalink, color, backgroundColor }) => (
      <Chip
        key={permalink}
        className={styles.chip}
        color={color}
        backgroundColor={backgroundColor}
        label={name}
        permalink={permalink}
        active={activeChip === permalink}
      />
    ))}
  </div>
)
