import React, { useEffect } from 'react'
import { Layout } from '../../components/Helpers/Layout'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import Title from '../../components/Helpers/Title/Title'

const AddProject = ({ login }) => {
  const router = useRouter()

  useEffect(() => {
    if (!login) router.push('/')
  }, [router, login])

  return (
    <Layout flex justify="center" align="center">
      <Title text="Em construção" />
    </Layout>
  )
}

export default AddProject

AddProject.propTypes = {
  login: PropTypes.bool
}
