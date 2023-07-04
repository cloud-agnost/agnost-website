import React, { useEffect } from "react"

import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import Modal from "../../components/ModalV"

import InputText from "./InputText"

import coCss from "../../css/contact.module.css"
import clsx from "clsx"

type FormValues = {
  email: string
}

const formDefaultValues = {
  email: "",
}

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm)
    .required(),
})

const Form = () => {
  const { register, handleSubmit, reset, formState } = useForm<FormValues>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
    defaultValues: formDefaultValues,
  })

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset()
    }
  }, [formState, reset])

  const [isModal, setModal] = React.useState(false)

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    // eslint-disable-next-line no-console
    setModal(true)
    const response = await fetch(
      "https://c4-na.altogic.com/e:6474a0b6b19ad9247245c34d/lead",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    // eslint-disable-next-line no-console
    console.log(
      "Hello developer, we sent your message here to log for you",
      response,
    )
  }

  return (
    <div className={clsx(coCss["contact--form"])}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={coCss.contact__form__form__block}>
          <InputText id="email" isRequired register={register} />
          <button className={coCss.contact__form__submit__button} type="submit">
            Get Notified
          </button>
        </div>

        <div className={coCss.contact__form__form__block}>
          <Modal
            isVisible={isModal}
            title="Your message has been sent successfully."
            content={
              <p>
                Thanks!,
                <br />
                <br />
                We&apos;ll do our best to get you a reply in short order. We
                will also just automatically sent you copy of your message, so
                you will have that to refer back to, if needed. Thank you for
                writing us. <br />
                <br />
              </p>
            }
            footer={
              <button
                className={coCss.contact__form__cancel__button}
                type="submit"
              >
                Close
              </button>
            }
            onClose={() => setModal(false)}
          />
        </div>
      </form>
    </div>
  )
}

export default Form
