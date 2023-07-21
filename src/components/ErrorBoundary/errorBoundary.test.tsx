import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import ErrorBoundary from '.'

describe('Error Boundary', () => {
  test('Error Boundary catch error', () => {
    const ThrowError = () => {
      throw new Error('Test')
    }
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    )
    expect(screen.getByTestId('errorboundary')).toBeVisible()
  })
})
