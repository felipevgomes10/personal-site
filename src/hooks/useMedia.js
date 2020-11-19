import { useCallback, useEffect, useState } from 'react'

const useMedia = media => {
  const [width, setWidth] = useState()

  const handleResize = useCallback(() => {
    const { matches } = window.matchMedia(media)
    setWidth(matches)
  }, [media])

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return width
}

export default useMedia
