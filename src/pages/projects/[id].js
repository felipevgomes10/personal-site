import React, { useEffect, useState } from 'react'
import { PROJECTS_GET, PROJECT_GET } from '../../endpoints'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { Layout } from '../../components/Helpers/Layout'
import Title from '../../components/Helpers/Title/Title'
import { Description } from '../../styles/pages/projects/[id]Styles'
import Tag from '../../components/Tag/Tag'
import Iframe from '../../components/Iframe/Iframe'
import useMedia from '../../hooks/useMedia'
import Loader from '../../components/Helpers/Loader/Loader'
import PageHead from '../../components/Helpers/Head'
import ProjectDelete from '../../components/Delete/ProjectDelete'
import Image from '../../components/Helpers/Image/Image'
import Link from 'next/link'
import Button from '../../components/Helpers/Button/Button'
import Arrow from '../../../public/arrow.svg'

const Project = ({ data, login }) => {
  const router = useRouter()
  const [technologies, setTechnologies] = useState([])
  const tablet = useMedia('(max-width: 60em)')
  const mobile = useMedia('(max-width: 31.25em)')

  useEffect(() => {
    if (data) {
      setTechnologies(() => {
        const split = data.technologies.split(', ')
        return split
      })
    }
  }, [data])

  if (router.isFallback) {
    return (
      <>
        <PageHead title="Carregando... | Web Dev Felipe" />
        <Layout flex justify="center" align="center">
          <Loader />
        </Layout>
      </>
    )
  }
  return (
    <>
      <PageHead
        title={`${data.title} | Web Dev Felipe`}
        description={`Projeto ${data.title} do desenvolvedor web Felipe Gomes. Veja aqui os melhores sites da internet construídos com HTML, CSS, JavaScript, React, Next e outras tecnologias de ponta para a criação de sites para a web.`}
        href={`https://webdevfelipe.vercel.app/projects/${data.id}`}
        author="Felipe Gomes | Desenvolvedor Web"
        robots="index,follow"
        ogTitle="Web Dev Felipe | Projeto | Desenvolvedor Web"
        ogDescription={`Projeto ${data.title} do desenvolvedor web Felipe Gomes. Veja aqui os melhores sites da internet construídos com HTML, CSS, JavaScript, React, Next e outras tecnologias de ponta para a criação de sites para a web.`}
        ogUrl={`https://webdevfelipe.vercel.app/projects/${data.id}`}
        ogSiteName="Web Dev Felipe"
        ogImage={data.src}
        ogType="website"
        ogAlt="website logo"
        ogLocole="pt-BR"
        twitterTitle="Web Dev Felipe | Projeto | Desenvolvedor Web"
        twitterDescription={`Projeto ${data.title} do desenvolvedor web Felipe Gomes. Veja aqui os melhores sites da internet construídos com HTML, CSS, JavaScript, React, Next e outras tecnologias de ponta para a criação de sites para a web.`}
        twitterUrl={`https://webdevfelipe.vercel.app/projects/${data.id}`}
        twitterCard="summary"
        twitterImage={data.src}
        twitterAlt="website logo"
        twitterCreator="@felipevgomes10"
      />
      <Layout
        grid
        columns={tablet ? '1fr' : '1fr 1fr'}
        justify="center"
        align="center"
      >
        {!tablet && <Image alt={data.title} src={data.src} />}
        <Layout
          as="div"
          flex
          justify="center"
          align="center"
          direction="column"
          padding={mobile && login ? '5.2rem 5.2rem 12.2rem' : '5.2rem'}
          position="relative"
          fromLeft
        >
          {login && <ProjectDelete id={data.id} />}
          <Title text={data.title} />
          <Description>{data.content}</Description>
          <Layout
            as="div"
            flex
            flexItem
            justify="flex-start"
            align="center"
            wrap="wrap"
            alignSelf="flex-start"
            margin=" 0 5.2rem 5.2rem"
            resetHeight
          >
            <p>Tecnologias utilizadas:</p>
            {technologies &&
              technologies.map(technology => (
                <Tag key={technology}>{technology}</Tag>
              ))}
          </Layout>
          <Iframe src={data.video} />
          <Link href="/contact" passHref>
            <Button as="a" className="ButtonAsLink" margin="5.2rem 5.2rem 0">
              Contato <Arrow />
            </Button>
          </Link>
        </Layout>
      </Layout>
    </>
  )
}

export const getStaticPaths = async () => {
  const { url, options } = PROJECTS_GET(1, 3, 0)
  const response = await fetch(url, options)
  const json = await response.json()
  const paths = json.map(({ id }) => {
    return { params: { id: id.toString() } }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async ({ params }) => {
  const { url, options } = PROJECT_GET(params.id)
  const response = await fetch(url, options)
  const data = await response.json()

  return {
    props: {
      data
    },
    revalidate: 43200
  }
}

export default Project

Project.propTypes = {
  data: PropTypes.object.isRequired,
  login: PropTypes.bool
}
