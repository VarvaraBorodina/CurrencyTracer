import React, { ReactNode } from 'react'

import TEXT from '@/constants/text'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props
    if (hasError) {
      return <h1 data-testid="errorboundary">{TEXT.ERROR}</h1>
    }

    return children
  }
}

export default ErrorBoundary
