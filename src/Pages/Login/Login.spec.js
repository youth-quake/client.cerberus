import React from 'react'
import { render } from 'react-testing-library'
import Login from './Login'

const component = props => (
  <Login />
)

describe('Login', () => {
  test('', () => {
    const { getByTestId } = render(component)
    const login = getByTestId('login-form')
    expect(login).toBeInTheDocument()
  })
})