import React from 'react'
import Image from '../../components/Helpers/Image/Image'
import { Layout } from '../../components/Helpers/Layout'
import Title from '../../components/Helpers/Title/Title'
import { AboutLink, AboutText } from '../../styles/pages/about/indexStyles'
import Linkedin from '../../../public/linkedin.svg'
import GitHub from '../../../public/github.svg'
import PropTypes from 'prop-types'
import PageHead from '../../components/Helpers/Head'

const About = ({ data }) => {
  return (
    <>
      <PageHead title="Sobre | Web Dev Felipe" />
      <Layout
        flex
        justify="center"
        align="center"
        direction="column"
        padding="4rem"
        fromTop
      >
        <Title text="Olá, eu sou o Felipe" />
        <Image
          alt={data.name}
          src={data.avatar_url}
          height="26.5rem"
          width="26.5rem"
          overflowHidden={true}
          radius="50%"
          margin="4rem 0 0"
        />
        <AboutText>
          {data.bio} Clique em Projetos na barra de navegação e veja alguns dos
          meus trabalhos, ou se preferir, clique em Entrar em contato e me diga
          o que posso fazer por você.
        </AboutText>
        <Layout flex justify="space-between" align="center" resetHeight>
          <AboutLink href={data.blog} target="_blank" rel="noreferrer">
            <Linkedin />
          </AboutLink>
          <AboutLink href={data.html_url} target="_blank" rel="noreferrer">
            <GitHub />
          </AboutLink>
        </Layout>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const response = await fetch('https://api.github.com/users/felipevgomes10')
  const data = await response.json()

  return {
    props: {
      data
    },
    revalidate: 86400
  }
}

export default About

About.propTypes = {
  data: PropTypes.object
}
