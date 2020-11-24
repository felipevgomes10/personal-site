import React from 'react'
import { Btn } from './ProjectDeleteStyles'
import PropTypes from 'prop-types'
import { GET_LOCAL_TOKEN, PROJECT_DELETE } from '../../endpoints'
import { useRouter } from 'next/router'
import useFetch from '../../hooks/useFetch'

const ProjectDelete = ({ id }) => {
  const router = useRouter()
  const { request } = useFetch()

  const handleDelete = async () => {
    const confirmation = confirm(
      'Tem certeza que deseja prosseguir com essa ação?'
    )
    if (confirmation) {
      const token = GET_LOCAL_TOKEN()
      const { url, options } = PROJECT_DELETE(id, token)

      await request(url, options)
      router.push('/')
    }
  }

  return <Btn onClick={handleDelete}>Excluir</Btn>
}

export default ProjectDelete

ProjectDelete.propTypes = {
  id: PropTypes.number
}
