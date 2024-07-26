import { useEffect, useState } from 'react'

export const useTheme = () => {
    const [isSystemUseDarkTheme, setSystemUseDarkTheme] = useState()
    const [isUserPreferDarkTheme, setUserPreferDarkTheme] = useState(undefined)

    useEffect(() => {
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')
        setSystemUseDarkTheme(prefersDarkScheme.matches)

        const handleChange = (e) => {
            setSystemUseDarkTheme(e.matches)
        }

        prefersDarkScheme.addEventListener('change', handleChange)

        return () => {
            prefersDarkScheme.removeEventListener('change', handleChange)
        }
    }, [])

    const switchTheme = () => {
        let nextTheme
        if (typeof isUserPreferDarkTheme === 'undefined') {
            nextTheme = isSystemUseDarkTheme ? 'light' : 'dark'
            setUserPreferDarkTheme(!isSystemUseDarkTheme)
        } else {
            nextTheme = isUserPreferDarkTheme ? 'light' : 'dark'
            setUserPreferDarkTheme(!isUserPreferDarkTheme)
        }
        const root = document.documentElement
        root.style.colorScheme = nextTheme
    }

    return {
        isDarkMode: isUserPreferDarkTheme ?? isSystemUseDarkTheme,
        switchTheme
    }
}
