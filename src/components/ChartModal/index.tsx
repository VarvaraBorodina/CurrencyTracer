import React from 'react'

import ChartParamsObserver, {
  ObserverFunction,
} from '@/utils/ChartParamsObserver'

import { Container, Content } from './styled'

class ChartModal extends React.Component<
  Record<string, never>,
  { isModalActive: boolean }
> {
  timerId: ReturnType<typeof setTimeout> | null

  constructor(props: any) {
    super(props)
    this.state = {
      isModalActive: false,
    }
    this.timerId = null
  }

  componentDidMount(): void {
    ChartParamsObserver.subscribe(this.handleChartCanBeCreated)
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      clearTimeout(this.timerId)
    }
  }

  handleChartCanBeCreated: ObserverFunction = () => {
    this.setState({ isModalActive: true })
    this.timerId = setTimeout(() => {
      this.setState({ isModalActive: false })
    }, 1000)
  }

  render() {
    const { isModalActive } = this.state
    return (
      isModalActive && (
        <Container>
          <Content>
            <h1>Chart can be created!</h1>
          </Content>
        </Container>
      )
    )
  }
}
export default ChartModal
