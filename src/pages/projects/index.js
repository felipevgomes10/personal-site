import React, { useState } from 'react'
import Card from '../../components/Card/Card'
import { Layout } from '../../components/Helpers/Layout'
import { PROJECTS_GET } from '../../endpoints'
import PropTypes from 'prop-types'
import Page from '../../components/Helpers/Page'
import NoResult from '../../components/Helpers/NoResult/NoResult'

const Projects = ({ projectsData, user }) => {
  const [pages, setPages] = useState(2)
  const newPages = []

  for (let i = 2; i < pages; i++) {
    newPages.push(<Page index={i} key={i} user={user.username || 0} />)
  }

  return (
    <Layout
      flex
      justify="center"
      align="center"
      direction="column"
      padding="2.5rem"
    >
      {projectsData.map(({ title, content, id }) => (
        <Card key={id} projectName={title} projectDescription={content} />
      ))}
      {newPages}
      <NoResult onClick={() => setPages(pages + 1)}>Carregar mais</NoResult>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const { url, options } = PROJECTS_GET(1, 3, 'felipevgomes10')
  const response = await fetch(url, options)
  const projectsData = await response.json()

  return {
    props: {
      projectsData
    },
    revalidate: 86400
  }
}

export default Projects

Projects.propTypes = {
  projectsData: PropTypes.array,
  user: PropTypes.object
}
