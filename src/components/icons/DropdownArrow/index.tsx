import { Theme } from '@/components/GlobalThemeProvider/types'
import { COLOR_THEMES } from '@/constants/themes'
import { useTypedSelector } from '@/hooks'

import Container from './styled'

const DropdownArrow = () => {
  const theme: Theme = useTypedSelector((state) => {
    return state.theme.theme
  })
  return (
    <Container>
      <svg
        width="21"
        height="15"
        viewBox="0 0 21 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.1345 15C9.68434 15 9.23418 14.7911 8.87879 14.3436L0.515313 3.81153C-0.171771 2.94629 -0.171771 1.51417 0.515313 0.648931C1.2024 -0.21631 2.33964 -0.21631 3.02673 0.648931L10.1345 9.5997L17.2423 0.648931C17.9293 -0.21631 19.0666 -0.21631 19.7537 0.648931C20.4408 1.51417 20.4408 2.94629 19.7537 3.81153L11.3902 14.3436C11.0348 14.7911 10.5847 15 10.1345 15Z"
          fill={COLOR_THEMES[theme].CARD_BORDER_COLOR}
        />
      </svg>
    </Container>
  )
}

export default DropdownArrow
