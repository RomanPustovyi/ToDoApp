import { useTheme } from '../features/theme/useTheme'
import { ReactComponent as MoonIcon } from '../assets/images/icon-moon.svg'
import { ReactComponent as SunIcon } from '../assets/images/icon-sun.svg'

export const ColorThemeButton = () => {
    const { isDarkMode, switchTheme } = useTheme()

    return (
        <button className='LightDarkMode' onClick={switchTheme}>
            {isDarkMode ? <SunIcon name='Sun' /> : <MoonIcon name='Moon' />}
        </button>
    )
}
