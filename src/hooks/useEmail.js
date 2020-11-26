import emailjs from 'emailjs-com'
import { useState, useCallback } from 'react'

const useEmail = () => {
  const [confirmation, setConfirmation] = useState(null)
  const [sending, setSending] = useState(null)
  const [warn, setWarn] = useState('')

  const sendEmail = useCallback(
    async (serviceId, templateId, templateParams, userId) => {
      let response
      try {
        setSending(true)
        response = await emailjs.send(
          serviceId,
          templateId,
          templateParams,
          userId
        )
        if (response.status === 200) {
          setConfirmation(true)
          setWarn('Email enviado com sucesso')
          return true
        }
      } catch (error) {
        setConfirmation(false)
        setWarn('Email não enviado')
        return false
      } finally {
        setSending(false)
      }
    },
    []
  )

  return {
    sendEmail,
    confirmation,
    sending,
    warn
  }
}

export default useEmail
