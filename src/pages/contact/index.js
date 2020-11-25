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

const Contact = () => {
  const width = useMedia('(max-width: 50em)')
  const name = useForm()
  const email = useForm()
  const message = useForm()
  const { error, validation } = useError()

  const handleSubmit = useCallback(
    e => {
      e.preventDefault()
      const comparison =
        name.validate() && email.validate() && message.validate()
      const send = validation(comparison)
      if (send) console.log('enviou')
      else console.log('não enviar')
    },
    [validation, name, email, message]
  )

  return (
    <>
      <PageHead title="Entre em Contato | Web Dev Felipe" />
      <Layout
        grid
        columns={width ? '1fr' : '1fr 1fr'}
        justify="center"
        align="center"
      >
        {!width && <img alt="entrar em contato" src={formLarge} />}
        <Layout
          flex
          gridItem
          justifySelf="start"
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
            <Button margin="2.6rem 0 0">Enviar</Button>
            {error && <ErrorText>{error}</ErrorText>}
          </PageForm>
        </Layout>
      </Layout>
    </>
  )
}

export default Contact
