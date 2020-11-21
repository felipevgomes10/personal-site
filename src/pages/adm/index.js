import React, { useCallback, useEffect } from 'react'
import { Layout } from '../../components/Helpers/Layout'
import Image from '../../components/Helpers/Image/Image'
import formAdm from '../../../public/form-adm-large.jpg'
import PageForm from '../../components/Form/PageForm'
import Title from '../../components/Helpers/Title/Title'
import FormInput from '../../components/Form/Input/FormInput'
import Button from '../../components/Helpers/Button/Button'
import useForm from '../../hooks/useForm'
import useFetch from '../../hooks/useFetch'
import { TOKEN_POST, USER_GET } from '../../endpoints'
import ErrorText from '../../components/Helpers/Error/Error'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import useMedia from '../../hooks/useMedia'

const Adm = ({ setLogin, setUser }) => {
  const user = useForm()
  const password = useForm()
  const router = useRouter()
  const width = useMedia('(max-width: 50em)')

  useEffect(() => {
    router.prefetch('/adm/add-project')
  }, [router])

  const { data, loading, request } = useFetch()
  const { url, options } = TOKEN_POST({
    username: user.value,
    password: password.value
  })

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault()
      if (user.validate() && password.validate()) {
        const { response, json } = await request(url, options)
        if (response.ok) {
          window.localStorage.setItem('userToken', json.token)
          setLogin(true)
          const { url, options } = USER_GET(json.token)
          const data = await request(url, options)
          setUser(data.json)
          router.push('/adm/add-project')
        }
      }
    },
    [user, password, options, request, url, setLogin, router, setUser]
  )
  return (
    <Layout
      grid
      columns={width ? '1fr' : '1fr 1fr'}
      justify="center"
      align="center"
    >
      {!width && <Image alt="form-adm-image" src={formAdm} />}
      <Layout flex justify="center" align="center">
        <PageForm handleSubmit={handleSubmit}>
          <Title text="Login do Administrador" />
          <FormInput
            id="userForm"
            margin="2.6rem 0 1rem"
            label="Usuário"
            type="text"
            placeholder="Digite aqui..."
            value={user.value}
            onChange={user.onChange}
            onBlur={user.onBlur}
            error={user.error}
          />
          <FormInput
            id="passwordForm"
            margin="2.6rem 0 1rem"
            label="Senha"
            type="password"
            placeholder="Senha aqui..."
            value={password.value}
            onChange={password.onChange}
            onBlur={password.onBlur}
            error={password.error}
          />
          {data === undefined && <ErrorText>Usuário não encontrado</ErrorText>}
          {loading ? (
            <Button margin="2.6rem 0 0" disabled>
              Entrando...
            </Button>
          ) : (
            <Button margin="2.6rem 0 0">Entrar</Button>
          )}
        </PageForm>
      </Layout>
    </Layout>
  )
}

export default Adm

Adm.propTypes = {
  setLogin: PropTypes.func
}
