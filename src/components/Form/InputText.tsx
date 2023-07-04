import React from "react"
import coCss from "../../css/contact.module.css"

type InputTextProps = {
  id: string
  isRequired: boolean
  register: Function
}

const InputText = ({ id, isRequired, register }: InputTextProps) => {
  return (
    <div className={coCss.contact__form__form__block}>
      <input
        className={coCss.contact__form__input}
        type="text"
        placeholder="hello@developer.com"
        id={id}
        required={isRequired}
        {...register(id)}
      />
    </div>
  )
}

export default InputText
