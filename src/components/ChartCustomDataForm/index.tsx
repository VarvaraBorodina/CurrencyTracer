import React from 'react'

import ChartCustomInputObserver from '@/utils/ChartCustomInputObserver'
import { getLastMonthDates } from '@/utils/formatDate'

import { Button, Container, Input, Label, Title } from './styled'

class ChartCustomDataForm extends React.Component<
  Record<string, never>,
  { values: number[]; inputValue: string }
> {
  protected time: string[]

  constructor(props: any) {
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
      this.setState((prevState) => {
        const newState = [...prevState.values]
        newState.push(Number(inputValue))
        return {
          values: newState,
        }
      })
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
            <Title>Enter currency value for current data:</Title>
            <Label>{this.time[values.length]}:</Label>
            <Input
              value={inputValue}
              onChange={this.handleChangeValue}
              type="number"
              data-cy="custom-data-input"
              data-testid="custom-data-input"
              placeholder="Enter your data"
            />
            <Button
              type="button"
              onClick={this.handleInputButton}
              data-cy="custom-data-button"
            >
              Add data
            </Button>
          </>
        )}
      </Container>
    )
  }
}

export default ChartCustomDataForm
