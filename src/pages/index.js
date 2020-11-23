import React from 'react'
import PageHead from '../components/Helpers/Head'
import { Layout } from '../components/Helpers/Layout'
import Title from '../components/Helpers/Title/Title'

const Home = () => {
  return (
    <>
      <PageHead title="Página Inicial | Web Dev Felipe" />
      <Layout flex justify="center" align="center">
        <Title text="Em construção" />
      </Layout>
    </>
  )
}

export default Home
