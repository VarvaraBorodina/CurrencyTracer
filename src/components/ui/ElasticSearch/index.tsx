import React from 'react'

import { ReactComponent as SearchIcon } from '@/assets/icons/SearchIcon.svg'
import TEXT from '@/constants/text'

import {
  Container,
  Input,
  Option,
  OptionContainer,
  SearchButton,
  SearchLine,
} from './styled'
import { ElasticSearchState, ElasticSearchType } from './types'

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
  }

  render() {
    const { showOptions, value, filteredOptions } = this.state
    const { title, changeValue } = this.props
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
          <SearchButton type="button" onClick={() => changeValue(value)}>
            <SearchIcon />
          </SearchButton>
        </SearchLine>
        {showOptions && (
          <OptionContainer data-cy="search-block">
            {filteredOptions.length ? (
              filteredOptions.map((option: string, index) => (
                <Option
                  key={option}
                  onClick={() => handleOnOptionClick(option)}
                  data-cy={`search-block-${index}`}
                >
                  {option}
                </Option>
              ))
            ) : (
              <Option>{TEXT.SEARCH_NOT_FOUND}</Option>
            )}
          </OptionContainer>
        )}
      </Container>
    )
  }
}

export default ElasticSearch
