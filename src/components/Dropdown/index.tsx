import React from 'react'

import DropdownArrow from '../DropdownArrow'
import { Container, Input, Option, OptionContainer, Title } from './styled'

type DropdownType = {
  title: string
  setTitle: (newTitle: string, id: number) => void
  id: number
  options: string[]
}
class Dropdown extends React.Component<DropdownType, { isOpen: boolean }> {
  constructor(props: DropdownType) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  handleOnOptionClick = (optionName: string, id: number) => {
    this.setState({ isOpen: false })
    const { setTitle } = this.props
    setTitle(optionName, id)
  }

  render() {
    const { isOpen } = this.state
    const { title, id, options } = this.props

    return (
      <Container>
        <Input onClick={() => this.setState({ isOpen: true })}>
          <Title>{title}</Title>
          <DropdownArrow />
        </Input>
        {isOpen && (
          <OptionContainer>
            {options.map((option: string) => (
              <Option
                key={option}
                onClick={() => this.handleOnOptionClick(option, id)}
              >
                {option}
              </Option>
            ))}
          </OptionContainer>
        )}
      </Container>
    )
  }
}

export default Dropdown
