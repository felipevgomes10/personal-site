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
import Image from '../../components/Helpers/Image/Image'

const Contact = ({ SERVICE_ID, TEMPLATE_ID, USER_ID }) => {
  const name = useForm()
  const email = useForm()
  const message = useForm()
  const { error, validation } = useError()
  const { sendEmail, confirmation, sending, warn } = useEmail()
  const tablet = useMedia('(max-width: 50em)')

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
      <PageHead
        title="Entre em Contato | Web Dev Felipe"
        description="Entre em contato com o desenvolvedor web Felipe Gomes. Peça aqui os melhores sites da internet construídos com HTML, CSS, JavaScript, React, Next e outras tecnologias de ponta para a criação de sites para a web."
        href="https://webdevfelipe.vercel.app/contact"
        author="Felipe Gomes | Desenvolvedor Web"
        robots="index,follow"
        ogTitle="Web Dev Felipe | Contato | Desenvolvedor Web"
        ogDescription="Entre em contato com o desenvolvedor web Felipe Gomes. Peça aqui os melhores sites da internet construídos com HTML, CSS, JavaScript, React, Next e outras tecnologias de ponta para a criação de sites para a web."
        ogUrl="https://webdevfelipe.vercel.app/contact"
        ogSiteName="Web Dev Felipe"
        ogImage="https://webdevfelipe.com/wp-content/uploads/2020/12/logo-dark.png"
        ogType="website"
        ogAlt="website logo"
        ogLocole="pt-BR"
        twitterTitle="Web Dev Felipe | Contato | Desenvolvedor Web"
        twitterDescription="Entre em contato com o desenvolvedor web Felipe Gomes. Peça aqui os melhores sites da internet construídos com HTML, CSS, JavaScript, React, Next e outras tecnologias de ponta para a criação de sites para a web."
        twitterUrl="https://webdevfelipe.vercel.app/contact"
        twitterCard="summary"
        twitterImage="https://webdevfelipe.com/wp-content/uploads/2020/12/logo-dark.png"
        twitterAlt="website logo"
        twitterCreator="@felipevgomes10"
      />
      <Layout
        grid
        columns={tablet ? '1fr' : '1fr 1fr'}
        justify={tablet ? 'stretch' : 'center'}
        align={tablet ? 'stretch' : 'center'}
      >
        {!tablet && <Image alt="entrar em contato" src={formLarge} />}
        <Layout
          as="div"
          flex
          justify="center"
          align="center"
          direction="column"
          margin="3.8rem"
          resetHeight={tablet}
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
