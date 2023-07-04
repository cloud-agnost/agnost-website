import React from "react"
import { useColorMode } from "@docusaurus/theme-common"
import clsx from "clsx"
type Props = {
  alt?: string
  className?: string
  height?: number
  width?: number
  lightImageSrc: string
  darkImageSrc: string
}
const ImageSwitcher = ({
  lightImageSrc,
  darkImageSrc,
  className,
  alt,
  width,
  height,
}: Props) => {
  const { isDarkTheme } = useColorMode()

  return (
    <img
      loading="lazy"
      src={isDarkTheme ? darkImageSrc : lightImageSrc}
      alt={alt}
      className={clsx(className)}
      width={width}
      height={height}
    />
  )
}

export default ImageSwitcher
