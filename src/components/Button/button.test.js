import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button from './button'

const defaultProps = {
    onClick: jest.fn()
  }

describe('test button component', () => {
    it('should render the correct default button', () => {
        // const wrapper = render(<Button {...defaultProps}>Button</Button>)
        // const element = wrapper.getByText('Button')
        // expect(element.tagName).toEqual('BUTTON')
        render(
            <Button>Button</Button>
        )
    })
})