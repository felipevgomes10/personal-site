import React, { useState } from 'react'
import Card from '../../components/Card/Card'
import { Layout } from '../../components/Helpers/Layout'
import { PROJECTS_GET } from '../../endpoints'
import PropTypes from 'prop-types'
import Page from '../../components/Helpers/Page'
import LoadMore from '../../components/Helpers/LoadMore/LoadMore'
import PageHead from '../../components/Helpers/Head'
import logo from '../../../public/logo.svg'

const Projects = ({ projectsData, user }) => {
  const [pages, setPages] = useState(2)
  const newPages = []
  const userName = !user ? 0 : user.username

  for (let i = 2; i < pages; i++) {
    newPages.push(<Page index={i} key={i} user={userName} />)
  }

  return (
    <>
      <PageHead
        title="Projetos | Web Dev Felipe"
        description="Projetos do desenvolvedor web Felipe Gomes. Veja aqui os melhores sites da internet construídos com HTML, CSS, JavaScript, React, Next e outras tecnologias de ponta para a criação de sites para a web."
        href="https://webdevfelipe.vercel.app/projects"
        author="Felipe Gomes | Desenvolvedor Web"
        robots="index,follow"
        ogTitle="Web Dev Felipe | Projetos | Desenvolvedor Web"
        ogDescription="Projetos do desenvolvedor web Felipe Gomes. Veja aqui os melhores sites da internet construídos com HTML, CSS, JavaScript, React, Next e outras tecnologias de ponta para a criação de sites para a web."
        ogUrl="https://webdevfelipe.vercel.app/projects"
        ogSiteName="Web Dev Felipe"
        ogImage={logo}
        ogType="website"
        ogAlt="website logo"
        ogLocole="pt-BR"
        twitterTitle="Web Dev Felipe | Projetos | Desenvolvedor Web"
        twitterDescription="Projetos do desenvolvedor web Felipe Gomes. Veja aqui os melhores sites da internet construídos com HTML, CSS, JavaScript, React, Next e outras tecnologias de ponta para a criação de sites para a web."
        twitterUrl="https://webdevfelipe.vercel.app/projects"
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
        padding="2.5rem"
        fromTop
      >
        {projectsData.map(({ title, content, id }) => (
          <Card
            key={id}
            projectName={title}
            projectDescription={content}
            id={id}
          />
        ))}
        {newPages}
        <LoadMore onClick={() => setPages(pages + 1)}>Carregar mais</LoadMore>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const { url, options } = PROJECTS_GET(1, 3, 0)
  const response = await fetch(url, options)
  const projectsData = await response.json()

  return {
    props: {
      projectsData
    },
    revalidate: 60
  }
}

export default Projects

Projects.propTypes = {
  projectsData: PropTypes.array,
  user: PropTypes.object
}
