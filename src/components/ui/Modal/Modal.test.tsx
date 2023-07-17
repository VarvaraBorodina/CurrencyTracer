import 'jest-styled-components'

import { fireEvent, render as RTLrender, screen } from '@testing-library/react'

import MockWrapper from '@/components/MockWrapper'

import Modal from '.'

const render = (component: React.ReactElement) =>
  RTLrender(<MockWrapper>{component}</MockWrapper>)

const mockSetActive = jest.fn()

describe('Check Modal', () => {
  it('set active false on click', async () => {
    render(<Modal setIsActive={mockSetActive}>Test</Modal>)
    fireEvent.click(screen.getByTestId('modal'))
    expect(mockSetActive).toBeCalledWith(false)
  })
})
