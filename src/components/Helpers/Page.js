import React from 'react'
import PropTypes from 'prop-types'
import useSWR from 'swr'
import Card from '../Card/Card'
import { PROJECTS_GET } from '../../endpoints'

function Page({ index, user }) {
  const { url, options } = PROJECTS_GET(index, 3, user)
  const { data } = useSWR(url, async () => {
    const response = await fetch(url, options)
    const data = await response.json()

    return data
  })

  if (!data) return <p className="loading">Carregando...</p>
  return data.map(item => (
    <Card
      key={item.id}
      projectName={item.title}
      projectDescription={item.content}
      id={item.id}
    />
  ))
}

export default Page

Page.propTypes = {
  index: PropTypes.number,
  user: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
