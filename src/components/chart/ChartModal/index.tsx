import React from 'react'

import ChartCustomInputObserver from '@/utils/chartCustomInputObserver'
import ChartParamsObserver from '@/utils/chartParamsObserver'

import { Container, Content } from './styled'

class ChartModal extends React.Component<
  object,
  { isModalActive: boolean; message: string }
> {
  timerId: ReturnType<typeof setTimeout> | null

  constructor(props: object) {
    super(props)
    this.state = {
      isModalActive: false,
      message: '',
    }
    this.timerId = null
  }

  componentDidMount(): void {
    ChartParamsObserver.subscribeModal(this.handleChartCanBeCreated)
    ChartCustomInputObserver.subscribeModal(this.handleChartCanBeCreated)
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      clearTimeout(this.timerId)
    }
  }

  handleChartCanBeCreated = (message: string) => {
    this.setState({ isModalActive: true, message })
    this.timerId = setTimeout(() => {
      this.setState({ isModalActive: false })
    }, 1000)
  }

  render() {
    const { isModalActive, message } = this.state
    return (
      isModalActive && (
        <Container>
          <Content data-cy="chart-modal">
            <h1>{message}</h1>
          </Content>
        </Container>
      )
    )
  }
}
export default ChartModal
