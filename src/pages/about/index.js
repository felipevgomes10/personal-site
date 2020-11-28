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
      <PageHead
        title="Sobre | Web Dev Felipe"
        description="Página sobre o desenvolvedor Frontend Felipe Gomes. Veja aqui os melhores sites da internet."
        href="https://webdevfelipe.vercel.app/about"
        author="Felipe Gomes | Desenvolvedor React.js"
        robots="index,follow"
        ogTitle="Web Dev Felipe | Sobre | Desenvolvedor React.js"
        ogDescription="Página sobre o desenvolvedor Frontend Felipe Gomes. Veja aqui os melhores sites da internet."
        ogUrl="https://webdevfelipe.vercel.app/about"
        ogSiteName="Web Dev Felipe"
        ogImage="https://drive.google.com/file/d/1XAXUrIv03Se4oogcnVtPR7frAn1b79GZ/view?usp=sharing"
        ogType="website"
        ogAlt="website logo"
        ogLocole="pt-BR"
        twitterTitle="Web Dev Felipe | Sobre | Desenvolvedor React.js"
        twitterDescription="Página sobre o desenvolvedor Frontend Felipe Gomes. Veja aqui os melhores sites da internet."
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
        <Layout
          as="div"
          flex
          justify="space-between"
          align="center"
          resetHeight
        >
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
