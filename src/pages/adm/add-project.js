import React, { useCallback, useEffect, useState } from 'react'
import { Layout } from '../../components/Helpers/Layout'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import Title from '../../components/Helpers/Title/Title'
import Image from '../../components/Helpers/Image/Image'
import formProjects from '../../../public/form-projetos-large.jpg'
import PageForm from '../../components/Form/PageForm'
import FormInput from '../../components/Form/Input/FormInput'
import useForm from '../../hooks/useForm'
import FormTextArea from '../../components/Form/Textarea/FormTextArea'
import Button from '../../components/Helpers/Button/Button'
import useFetch from '../../hooks/useFetch'
import { GET_LOCAL_TOKEN, PROJECT_POST } from '../../endpoints'
import ErrorText from '../../components/Helpers/Error/Error'
import useMedia from '../../hooks/useMedia'
import PageHead from '../../components/Helpers/Head'

const AddProject = ({ login }) => {
  const router = useRouter()
  const projectName = useForm()
  const description = useForm()
  const videoLink = useForm()
  const technologies = useForm()
  const [image, setImage] = useState({})
  const [featured, setFeatured] = useState(false)
  const { loading, request } = useFetch()
  const [error, setError] = useState(null)
  const width = useMedia('(max-width: 50em)')

  useEffect(() => {
    if (!login) router.push('/')
  }, [router, login])

  const handleImage = useCallback(({ target }) => {
    setImage({
      raw: target.files[0],
      preview: URL.createObjectURL(target.files[0])
    })
  }, [])

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault()
      setError(null)
      const token = GET_LOCAL_TOKEN()
      const validate =
        projectName.validate() &&
        description.validate() &&
        videoLink.validate() &&
        technologies.validate() &&
        Object.entries(image).length !== 0

      if (validate) {
        const formData = new FormData()
        formData.append('projectName', projectName.value)
        formData.append('description', description.value)
        formData.append('videoLink', videoLink.value)
        formData.append('technologies', technologies.value)
        formData.append('img', image.raw)
        formData.append('featured', featured)

        const { url, options } = PROJECT_POST(formData, token)
        await request(url, options)
        router.push('/projects')
      } else {
        setError(true)
      }
    },
    [
      projectName,
      description,
      videoLink,
      technologies,
      image,
      featured,
      request,
      router
    ]
  )

  return (
    <>
      <PageHead title="Adicionar Projeto | Web Dev Felipe" />
      <Layout
        grid
        columns={width ? '1fr' : '1fr 1fr'}
        justify="center"
        align="center"
      >
        <Image alt="formulário dos projetos" src={formProjects} />
        <Layout
          flex
          gridItem
          justifySelf="start"
          justify="center"
          align="center"
          margin="3.8rem"
          fromLeft
        >
          <PageForm handleSubmit={handleSubmit}>
            <Title text="Cadastrar projeto" />
            <FormInput
              id="formProject"
              margin="2.6rem 0 1rem"
              label="Nome do projeto"
              type="text"
              placeholder="Nome do projeto aqui..."
              value={projectName.value}
              onChange={projectName.onChange}
              onBlur={projectName.onBlur}
              error={projectName.error}
            />
            <FormTextArea
              id="formDescription"
              margin="2.6rem 0 1rem"
              label="Descrição"
              placeholder="Breve descrição do projeto aqui..."
              value={description.value}
              onChange={description.onChange}
              onBlur={description.onBlur}
              error={description.error}
            />
            <FormInput
              id="formLink"
              margin="2.6rem 0 1rem"
              label="Link do vídeo"
              type="url"
              placeholder="Link do vídeo aqui..."
              value={videoLink.value}
              onChange={videoLink.onChange}
              onBlur={videoLink.onBlur}
              error={videoLink.error}
            />
            <FormInput
              id="formTechnologies"
              margin="2.6rem 0 1rem"
              label="Tecnologias"
              type="text"
              placeholder="Tecnologias utilizadas aqui..."
              value={technologies.value}
              onChange={technologies.onChange}
              onBlur={technologies.onBlur}
              error={technologies.error}
            />
            <FormInput
              other={true}
              display="block"
              id="formFile"
              margin="2.6rem 0 1rem"
              label="Imagem do Projeto"
              type="file"
              onChange={handleImage}
            />
            <FormInput
              other={true}
              labelInline={true}
              id="formCheckbox"
              margin="2.6rem 1.5rem 1rem 0"
              label="Destaque"
              type="checkbox"
              value="featured"
              checked={featured}
              onChange={() => setFeatured(!featured)}
            />
            {loading ? (
              <Button margin="2.6rem 0 0" disabled>
                Postando...
              </Button>
            ) : (
              <Button margin="2.6rem 0 0">Postar</Button>
            )}
            {error && <ErrorText>Preencha todos os campos</ErrorText>}
          </PageForm>
        </Layout>
      </Layout>
    </>
  )
}

export default AddProject

AddProject.propTypes = {
  login: PropTypes.bool
}
