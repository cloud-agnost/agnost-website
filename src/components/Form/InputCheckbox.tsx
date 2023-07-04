import React from "react"
import coCss from "../../css/contact.module.css"

type InputCheckboxProps = {
  id: string
  isRequired: boolean
  register: any
  children: React.ReactNode
}

const InputCheckbox = ({
  id,
  children,
  isRequired,
  register,
}: InputCheckboxProps) => {
  return (
    <div className={coCss.contact__form__checkbox}>
      <input type="checkbox" {...register(id)} id={id} required={isRequired} />
      <label htmlFor={id}>{children}</label>
    </div>
  )
}

export default InputCheckbox
