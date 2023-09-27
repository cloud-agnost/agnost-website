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
  loading: "lazy" | "eager" | undefined
}
const ImageSwitcher = ({
  lightImageSrc,
  darkImageSrc,
  className,
  alt,
  width,
  height,
  loading,
}: Props) => {
  const dark = useColorMode().colorMode === "dark"

  return (
    <img
      loading={loading ? loading : "lazy"}
      src={dark ? darkImageSrc : lightImageSrc}
      alt={alt}
      className={clsx(className)}
      width={width}
      height={height}
    />
  )
}

export default ImageSwitcher
