import React, { useState } from 'react'
import Card from '../../components/Card/Card'
import { Layout } from '../../components/Helpers/Layout'
import { PROJECTS_GET } from '../../endpoints'
import PropTypes from 'prop-types'
import Page from '../../components/Helpers/Page'
import LoadMore from '../../components/Helpers/LoadMore/LoadMore'
import PageHead from '../../components/Helpers/Head'

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
        description="Página de projetos do desenvolvedor Frontend Felipe Gomes. Veja aqui os melhores sites da internet."
        href="https://webdevfelipe.vercel.app/projects"
        author="Felipe Gomes | Desenvolvedor React.js"
        robots="index,follow"
        ogTitle="Web Dev Felipe | Projetos | Desenvolvedor React.js"
        ogDescription="Página de projetos do desenvolvedor Frontend Felipe Gomes. Veja aqui os melhores sites da internet."
        ogUrl="https://webdevfelipe.vercel.app/projects"
        ogSiteName="Web Dev Felipe"
        ogImage="https://drive.google.com/file/d/1XAXUrIv03Se4oogcnVtPR7frAn1b79GZ/view?usp=sharing"
        ogType="website"
        ogAlt="website logo"
        ogLocole="pt-BR"
        twitterTitle="Web Dev Felipe | Projetos | Desenvolvedor React.js"
        twitterDescription="Página de projetos do desenvolvedor Frontend Felipe Gomes. Veja aqui os melhores sites da internet."
        twitterUrl="https://webdevfelipe.vercel.app/projects"
        twitterCard="summary"
        twitterImage="https://drive.google.com/file/d/1XAXUrIv03Se4oogcnVtPR7frAn1b79GZ/view?usp=sharing"
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
