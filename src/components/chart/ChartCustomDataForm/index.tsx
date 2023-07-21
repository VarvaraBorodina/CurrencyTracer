import React from 'react'

import TEXT from '@/constants/text'
import ChartCustomInputObserver from '@/utils/chartCustomInputObserver'
import { getLastMonthDates } from '@/utils/formatDate'

import { Button, Container, Input, Label, Title } from './styled'

class ChartCustomDataForm extends React.Component<
  object,
  { values: number[]; inputValue: string }
> {
  protected time: string[]

  constructor(props: object) {
    super(props)
    this.state = {
      values: [],
      inputValue: '',
    }
    this.time = getLastMonthDates()
  }

  handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value })
  }

  handleInputButton = () => {
    const { inputValue, values } = this.state
    if (
      values.length < this.time.length &&
      !Number.isNaN(Number(inputValue)) &&
      inputValue !== ''
    ) {
      const number = Number(inputValue)
      if (number > 0 && number < 2) {
        this.setState((prevState) => {
          const newState = [...prevState.values]
          newState.push(number)
          return {
            values: newState,
          }
        })
      }
    }
    if (values.length + 1 === this.time.length) {
      ChartCustomInputObserver.notify({ values, time: this.time })
    }
  }

  render() {
    const { inputValue, values } = this.state
    return (
      <Container data-cy="custom-data-form">
        {values.length < this.time.length && (
          <>
            <Title>{TEXT.INPUT_TITLE}</Title>
            <Label>{this.time[values.length]}:</Label>
            <Input
              value={inputValue}
              onChange={this.handleChangeValue}
              type="number"
              data-cy="custom-data-input"
              data-testid="custom-data-input"
              placeholder={TEXT.INPUT_PLACEHOLDER}
            />
            <Button
              type="button"
              onClick={this.handleInputButton}
              data-cy="custom-data-button"
            >
              {TEXT.INPUT_BUTTON}
            </Button>
          </>
        )}
      </Container>
    )
  }
}

export default ChartCustomDataForm
