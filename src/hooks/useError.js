import { useState, useCallback } from 'react'

const defaultMessage = 'Preencha todos os campos'

const useError = (message = defaultMessage) => {
  const [error, setError] = useState(null)

  const validation = useCallback(
    comparison => {
      if (comparison) {
        setError(null)
        return true
      } else {
        setError(message)
        return false
      }
    },
    [message]
  )

  return {
    error,
    validation
  }
}

export default useError
