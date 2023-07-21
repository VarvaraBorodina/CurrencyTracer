import React from 'react'

import DropdownArrow from '@/components/icons/DropdownArrow'

import { Container, Input, Option, OptionContainer, Title } from './styled'
import { DropdownType } from './types'

class Dropdown extends React.Component<DropdownType, { isOpen: boolean }> {
  constructor(props: DropdownType) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  handleOnOptionClick = (optionName: string, id: number) => () => {
    this.setState({ isOpen: false })
    const { setTitle } = this.props
    setTitle(optionName, id)
  }

  render() {
    const { isOpen } = this.state
    const { title, id, options } = this.props

    return (
      <Container>
        <Input
          onClick={() => this.setState({ isOpen: true })}
          data-cy={`dropdown-input-${id}`}
          data-testid={`dropdown-input-${id}`}
        >
          <Title>{title}</Title>
          <DropdownArrow />
        </Input>
        {isOpen && (
          <OptionContainer data-cy={`dropdown-block-${id}`}>
            {options.map((option: string, index) => (
              <Option
                data-cy={`dropdown-block-${id}-${index}`}
                key={option}
                onClick={this.handleOnOptionClick(option, id)}
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
