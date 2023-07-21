import { Theme } from '@/components/GlobalThemeProvider/types'
import { COLOR_THEMES } from '@/constants/themes'
import { useTypedSelector } from '@/hooks'

const MenuIcon = () => {
  const theme: Theme = useTypedSelector((state) => {
    return state.theme.theme
  })
  return (
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6H20M4 12H20M4 18H20"
        stroke={COLOR_THEMES[theme].TEXT_COLOR}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
      />
    </svg>
  )
}

export default MenuIcon
