import { useCallback, useState } from 'react'

const useForm = () => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(null)

  const validate = useCallback(value => {
    if (value.length === 0) {
      setError('Preencha o campo')
      return false
    } else {
      setError(null)
      return true
    }
  }, [])

  const onChange = useCallback(
    ({ target }) => {
      if (error) validate(target.value)
      setValue(target.value)
    },
    [error, validate]
  )

  return {
    value,
    error,
    validate: () => validate(value),
    onChange,
    onBlur: () => validate(value)
  }
}

export default useForm
