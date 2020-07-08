import { useLocalStorage } from './useLocalStorage'
import { useEffect } from 'react'

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkmode', false)

  useEffect(() => {
    if(darkMode) {
      document.body.classList.add("dark-mode")
    } else {
      document.body.classList.remove("dark-mode")
    }
  }, [darkMode])

  return [darkMode, setDarkMode]
}