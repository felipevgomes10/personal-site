import React, { useCallback } from 'react'
import PageHead from '../../components/Helpers/Head'
import { Layout } from '../../components/Helpers/Layout'
import Title from '../../components/Helpers/Title/Title'
import useMedia from '../../hooks/useMedia'
import formLarge from '../../../public/form-large.jpg'
import PageForm from '../../components/Form/PageForm'
import FormInput from '../../components/Form/Input/FormInput'
import FormTextArea from '../../components/Form/Textarea/FormTextArea'
import useForm from '../../hooks/useForm'
import Button from '../../components/Helpers/Button/Button'
import useError from '../../hooks/useError'
import ErrorText from '../../components/Helpers/Error/Error'
import useEmail from '../../hooks/useEmail'
import PropTypes from 'prop-types'
import ConfirmationText from '../../components/ConfirmationText/ConfirmationText'

const Contact = ({ SERVICE_ID, TEMPLATE_ID, USER_ID }) => {
  const tablet = useMedia('(max-width: 50em)')
  const name = useForm()
  const email = useForm()
  const message = useForm()
  const { error, validation } = useError()
  const { sendEmail, confirmation, sending, warn } = useEmail()

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault()
      const comparison =
        name.validate() && email.validate() && message.validate()

      const send = validation(comparison)
      if (send) {
        const result = await sendEmail(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            from_name: name.value,
            to_name: 'Felipe',
            message: message.value,
            reply_to: email.value
          },
          USER_ID
        )

        if (result) {
          name.setValue('')
          email.setValue('')
          message.setValue('')
        }
      }
    },
    [
      validation,
      name,
      email,
      message,
      sendEmail,
      SERVICE_ID,
      TEMPLATE_ID,
      USER_ID
    ]
  )

  return (
    <>
      <PageHead title="Entre em Contato | Web Dev Felipe" />
      <Layout
        grid
        columns={tablet ? '1fr' : '1fr 1fr'}
        justify="center"
        align="center"
      >
        {!tablet && <img alt="entrar em contato" src={formLarge} />}
        <Layout
          as="div"
          flex
          gridItem
          justifySelf={tablet ? 'initial' : 'start'}
          justify="center"
          align="center"
          direction="column"
          margin="3.8rem"
          fromLeft
        >
          <PageForm handleSubmit={handleSubmit}>
            <Title text="Entre em contato" />
            <FormInput
              id="username"
              margin="2.6rem 0 1rem"
              label="Nome"
              type="text"
              placeholder="Seu nome aqui..."
              value={name.value}
              onChange={name.onChange}
              onBlur={name.onBlur}
              error={name.error}
            />
            <FormInput
              id="userEmail"
              margin="2.6rem 0 1rem"
              label="Email"
              type="email"
              placeholder="Seu email aqui..."
              value={email.value}
              onChange={email.onChange}
              onBlur={email.onBlur}
              error={email.error}
            />
            <FormTextArea
              id="userMessage"
              margin="2.6rem 0 1rem"
              label="Por que entrou em contato?"
              placeholder="Seu texto aqui..."
              value={message.value}
              onChange={message.onChange}
              onBlur={message.onBlur}
              error={message.error}
            />
            {sending ? (
              <Button margin="2.6rem 0 0" disabled>
                Enviando...
              </Button>
            ) : (
              <Button margin="2.6rem 0 0">Enviar</Button>
            )}
            {error && <ErrorText>{error}</ErrorText>}
            {sending === false && (
              <ConfirmationText confirm={confirmation}>{warn}</ConfirmationText>
            )}
          </PageForm>
        </Layout>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      SERVICE_ID: process.env.SERVICE_ID,
      TEMPLATE_ID: process.env.TEMPLATE_ID,
      USER_ID: process.env.USER_ID
    }
  }
}

export default Contact

Contact.propTypes = {
  SERVICE_ID: PropTypes.string,
  TEMPLATE_ID: PropTypes.string,
  USER_ID: PropTypes.string
}
