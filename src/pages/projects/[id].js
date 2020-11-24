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

const Project = ({ data }) => {
  const router = useRouter()
  const [technologies, setTechnologies] = useState([])
  const width = useMedia('(max-width: 50em)')

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
      <PageHead title={`${data.title} | Web Dev Felipe`} />
      <Layout
        grid
        columns={width ? '1fr' : '1fr 1fr'}
        justify="center"
        align="center"
      >
        <img alt={data.title} src={data.src} />
        <Layout
          flex
          justify="flex-start"
          align="center"
          direction="column"
          padding="5.2rem"
          fromLeft
        >
          <Title text={data.title} />
          <Description>{data.content}</Description>
          <Layout
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
  data: PropTypes.object.isRequired
}
