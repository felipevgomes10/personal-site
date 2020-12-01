import React, { useContext } from 'react'
import Image from '../../components/Helpers/Image/Image'
import { Layout } from '../../components/Helpers/Layout'
import Title from '../../components/Helpers/Title/Title'
import {
  AboutLink,
  AboutText,
  AboutTitle
} from '../../styles/pages/about/indexStyles'
import Linkedin from '../../../public/linkedin.svg'
import GitHub from '../../../public/github.svg'
import Facebook from '../../../public/facebook.svg'
import PropTypes from 'prop-types'
import PageHead from '../../components/Helpers/Head'
import Button from '../../components/Helpers/Button/Button'
import Link from 'next/link'
import { ThemeContext } from 'styled-components'
import Arrow from '../../../public/arrow.svg'

const About = ({ data }) => {
  const { colors } = useContext(ThemeContext)

  return (
    <>
      <PageHead
        title="Sobre | Web Dev Felipe"
        description="Sobre do desenvolvedor web Felipe Gomes. Veja aqui os melhores sites da internet construídos com HTML, CSS, JavaScript, React e Next e outras tecnologias de ponta para a criação de sites para a web."
        href="https://webdevfelipe.vercel.app/about"
        author="Felipe Gomes | Desenvolvedor Web"
        robots="index,follow"
        ogTitle="Web Dev Felipe | Sobre | Desenvolvedor Web"
        ogDescription="Sobre do desenvolvedor web Felipe Gomes. Veja aqui os melhores sites da internet construídos com HTML, CSS, JavaScript, React e Next e outras tecnologias de ponta para a criação de sites para a web."
        ogUrl="https://webdevfelipe.vercel.app/about"
        ogSiteName="Web Dev Felipe"
        ogImage="https://webdevfelipe.com/wp-content/uploads/2020/12/logo-dark.png"
        ogType="website"
        ogAlt="website logo"
        ogLocole="pt-BR"
        twitterTitle="Web Dev Felipe | Sobre | Desenvolvedor Web"
        twitterDescription="Sobre do desenvolvedor web Felipe Gomes. Veja aqui os melhores sites da internet construídos com HTML, CSS, JavaScript, React e Next e outras tecnologias de ponta para a criação de sites para a web."
        twitterUrl="https://webdevfelipe.vercel.app/projects"
        twitterCard="summary"
        twitterImage="https://webdevfelipe.com/wp-content/uploads/2020/12/logo-dark.png"
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
          border={`10px solid ${colors.secondary}`}
          margin="4rem 0 0"
        />
        <Layout
          as="div"
          className="AboutWrapper"
          flex
          align="center"
          direction="column"
          resetHeight
        >
          <AboutTitle>Sobre Felipe</AboutTitle>
          <AboutText>
            {data.bio} Clique em Projetos na barra de navegação e veja alguns
            dos meus trabalhos, ou se preferir, clique em Contato e me diga o
            que posso fazer por você.
          </AboutText>
        </Layout>
        <Layout
          as="div"
          className="AboutWrapper"
          flex
          align="center"
          direction="column"
          resetHeight
        >
          <AboutTitle>Contato com Felipe</AboutTitle>
          <AboutText>
            felipe.vgomes10.dev@gmail.com <br /> frontender@webdevfelipe.com{' '}
            <br /> felipe.vgomes10@gmail.com
          </AboutText>
        </Layout>
        <Layout
          as="div"
          className="AboutWrapper"
          flex
          justify="center"
          align="center"
          direction="column"
          resetHeight
        >
          <AboutTitle>Mídias sociais</AboutTitle>
          <div>
            <AboutLink href={data.blog} target="_blank" rel="noreferrer">
              <Linkedin />
            </AboutLink>
            <AboutLink href={data.html_url} target="_blank" rel="noreferrer">
              <GitHub />
            </AboutLink>
            <AboutLink
              href="https://www.facebook.com/webdevfelipe"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook />
            </AboutLink>
          </div>
        </Layout>
        <Link href="/contact" passHref>
          <Button as="a" className="ButtonAsLink" margin="4rem 4rem 0">
            Contato <Arrow />
          </Button>
        </Link>
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
