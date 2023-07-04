import React from "react"
import coCss from "../../css/index/contact.module.css"

type InputTextProps = {
  id: string
  isRequired: boolean
  register: Function
  children: React.ReactNode
}

const InputTextarea = ({
  id,
  isRequired,
  register,
  children,
}: InputTextProps) => {
  return (
    <div>
      <label htmlFor={id}>{children}</label>

      <textarea
        className={coCss.contact__form__textarea}
        type="text"
        id={id}
        required={isRequired}
        {...register(id)}
      />
    </div>
  )
}

export default InputTextarea
