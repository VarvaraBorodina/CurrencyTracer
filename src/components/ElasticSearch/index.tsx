import React from 'react'

import SearchIcon from '../SearchIcon'
import { Container, Input, Option, OptionContainer, SearchLine } from './styled'

type ElasticSearchType = {
  title: string
  options: string[]
  changeValue: (newValue: string) => void
}

type ElasticSearchState = {
  showOptions: boolean
  value: string
  filteredOptions: string[]
}

class ElasticSearch extends React.Component<
  ElasticSearchType,
  ElasticSearchState
> {
  constructor(props: ElasticSearchType) {
    super(props)
    const { options } = this.props
    this.state = {
      showOptions: false,
      value: '',
      filteredOptions: options,
    }
  }

  getFilteredOptions = (includedValue: string): string[] => {
    const { options } = this.props
    if (includedValue === '') {
      return options
    }
    return options.filter((option) =>
      option.toLocaleLowerCase().includes(includedValue.toLocaleLowerCase())
    )
  }

  handleChangeInputValue: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const { value } = event.target
    this.setState({ value, filteredOptions: this.getFilteredOptions(value) })
  }

  handleInputFocus = () => {
    this.setState({ showOptions: true })
  }

  handleOnOptionClick = (option: string) => {
    this.setState({
      value: option,
      showOptions: false,
      filteredOptions: this.getFilteredOptions(option),
    })
    const { changeValue } = this.props
    changeValue(option)
  }

  render() {
    const { showOptions, value, filteredOptions } = this.state
    const { title } = this.props
    const { handleChangeInputValue, handleInputFocus, handleOnOptionClick } =
      this

    return (
      <Container data-cy="search">
        <SearchLine>
          <Input
            value={value}
            onChange={handleChangeInputValue}
            onFocus={handleInputFocus}
            placeholder={title}
            data-cy="search-input"
            data-testid="search-input"
          />
          <SearchIcon />
        </SearchLine>
        {showOptions && (
          <OptionContainer data-cy="search-block">
            {filteredOptions.map((option: string, index) => (
              <Option
                key={option}
                onClick={() => handleOnOptionClick(option)}
                data-cy={`search-block-${index}`}
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

export default ElasticSearch
