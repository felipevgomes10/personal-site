import React from 'react'
import CardFeatured from '../components/Card/CardFeatured'
import PageHead from '../components/Helpers/Head'
import { Layout } from '../components/Helpers/Layout'
import Title from '../components/Helpers/Title/Title'
import { PROJECTS_ALL_GET } from '../endpoints'
import PropTypes from 'prop-types'

const Home = ({ data }) => {
  return (
    <>
      <PageHead title="Página Inicial | Web Dev Felipe" />
      <Layout
        flex
        justify="center"
        align="center"
        direction="column"
        margin="2.5rem 0"
      >
        <Title text="Projetos destaques" />
        {data.map(({ id, content, title, src }) => (
          <CardFeatured
            key={id}
            projectName={title}
            projectDescription={content}
            id={id}
            src={src}
          />
        ))}
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const { url, options } = PROJECTS_ALL_GET()
  const response = await fetch(url, options)
  const json = await response.json()
  const data = json.filter(project => project.featured === 'true')

  return {
    props: {
      data
    },
    revalidate: 43200
  }
}

export default Home

Home.propTypes = {
  data: PropTypes.array
}
