import { useState, useCallback } from 'react'

const useFetch = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)

  const request = useCallback(async (url, options) => {
    let response
    let json

    try {
      setError(null)
      setLoading(true)
      response = await fetch(url, options)
      if (!response.ok) throw new Error(response.error)
      json = await response.json()
    } catch (err) {
      setError(err.message)
    } finally {
      setData(json)
      setLoading(false)
    }

    return {
      response,
      json
    }
  }, [])

  return {
    data,
    error,
    loading,
    request
  }
}

export default useFetch
