import React from "react"
import styles from "./styles.module.css"
import ImageSwitcher from "../../theme/ImageSwitcher"

export default function Modal({
  isVisible = false,
  title,
  content,
  footer,
  onClose,
}) {
  const keydownHandler = ({ key }) => {
    switch (key) {
      case "Escape":
        onClose()
        break
      default:
    }
  }

  React.useEffect(() => {
    document.addEventListener("keydown", keydownHandler)
    return () => document.removeEventListener("keydown", keydownHandler)
  })

  return !isVisible ? null : (
    <div className={styles.modal} onClick={onClose}>
      <div
        className={styles.modal__dialog}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modal__header}>
          <div className={styles.modal__title}>{title}</div>
          <span className={styles.modal__close} onClick={onClose}>
            &times;
          </span>
        </div>
        <div className={styles.modal__body}>
          <div className={styles.modal__content}>
            {content}
            <ImageSwitcher
              lightImageSrc="/img/logo.svg?text=Light Logo"
              darkImageSrc="/img/logo_dark.svg?text=Dark Logo"
              className={styles.modal__logo}
              height={32}
              alt="Agnost Logo"
            />
          </div>
        </div>
        {/* {footer && <div className="modal-footer">{footer}</div>} */}
        <div className={styles.modal__footer} onClick={onClose}>
          {footer}
        </div>
      </div>
    </div>
  )
}
