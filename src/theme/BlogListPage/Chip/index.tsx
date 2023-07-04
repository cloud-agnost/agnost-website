import clsx from "clsx"
import React from "react"
import styles from "./styles.module.css"

type Skin = "primary" | "secondary"
type Size = "small" | "medium" | "large"

type Props = {
  label: string
  permalink: string
  color: string
  backgroundColor: string
  className?: string
  skin?: Skin
  size?: Size
  active?: boolean
}

const skins: { [key in Skin]: string } = {
  primary: styles.skinPrimary,
  secondary: styles.skinSecondary,
}

const sizes: { [key in Size]: string } = {
  small: styles.sizeSmall,
  medium: styles.sizeMedium,
  large: styles.sizeLarge,
}

export const Chip = ({
  label,
  permalink,
  className,
  color,
  backgroundColor,
  skin = "primary",
  size = "medium",
  active,
}: Props) => (
  <a
    className={clsx(styles.root, className, skins[skin], sizes[size], {
      [styles.active]: active,
    })}
    href={permalink}
    style={{
      backgroundColor,
      color,
      borderColor: color,
    }}
  >
    {label}
  </a>
)
