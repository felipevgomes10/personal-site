import React from 'react'
import CardFeatured from '../components/Card/CardFeatured'
import PageHead from '../components/Helpers/Head'
import { Layout } from '../components/Helpers/Layout'
import Title from '../components/Helpers/Title/Title'
import { PROJECTS_ALL_GET } from '../endpoints'
import PropTypes from 'prop-types'
import logo from '../../public/logo.svg'

const Home = ({ data }) => {
  return (
    <>
      <PageHead
        title="Página Inicial | Web Dev Felipe"
        description="Página inicial do desenvolvedor web Felipe Gomes. Veja aqui os melhores sites da internet construídos com HTML, CSS, JavaScript, React, Next e outras tecnologias de ponta para a criação de sites para a web."
        href="https://webdevfelipe.vercel.app"
        author="Felipe Gomes | Desenvolvedor Web"
        robots="index,follow"
        ogTitle="Web Dev Felipe | Desenvolvedor Web"
        ogDescription="Página inicial do desenvolvedor web Felipe Gomes. Veja aqui os melhores sites da internet construídos com HTML, CSS, JavaScript, React, Next e outras tecnologias de ponta para a criação de sites para a web."
        ogUrl="https://webdevfelipe.vercel.app"
        ogSiteName="Web Dev Felipe"
        ogImage={logo}
        ogType="website"
        ogAlt="website logo"
        ogLocole="pt-BR"
        twitterTitle="Web Dev Felipe | Desenvolvedor Web"
        twitterDescription="Página inicial do desenvolvedor web Felipe Gomes. Veja aqui os melhores sites da internet construídos com HTML, CSS, JavaScript, React, Next e outras tecnologias de ponta para a criação de sites para a web."
        twitterUrl="https://webdevfelipe.vercel.app"
        twitterCard="summary"
        twitterImage={logo}
        twitterAlt="website logo"
        twitterCreator="@felipevgomes10"
      />
      <Layout
        flex
        justify="center"
        align="center"
        direction="column"
        margin="2.5rem 0"
        fromLeft
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
