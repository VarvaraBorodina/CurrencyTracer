import React from 'react'

import TEXT from '@/constants/text'

import { ErrorProps, ErrorState } from './types'

class ErrorBoundary extends React.Component<ErrorProps, ErrorState> {
  constructor(props: ErrorProps) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError(): ErrorState {
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
