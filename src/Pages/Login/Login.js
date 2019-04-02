import React from 'react'
import { Theme, Button, Input, Anchor, Password } from 'afrodite'
import styled from 'styled-components'


const Body = styled.body`
  padding: 0px;
  margin: 0px;
  height: 100%;
  width: 100%;
`

const Wrapper = styled.div`
  width: 300px;
  margin: 15% auto;
  display: flex;
  flex-flow: column;
  justify-content: center;
`

const Right = styled.div`
  height: 610px;
  width: 40%;
  float: right;
  display: flex;
`
const Left = styled.div`
  height: 630px;
  width: 60%;
  float: left;
  background-color: #472F91;
  color: white;
  background: #472f91;
	background: -moz-linear-gradient(top, #472f91 1%, #2989d8 91%, #0079c2 100%);
	background: -webkit-linear-gradient(top, #472f91 1%, #2989d8 91%, #0079c2 100%);
	background: linear-gradient(to bottom, #472f91 1%, #2989d8 91%, #0079c2 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#472f91',
	endColorstr='#0079c2', GradientType=0);
`

const Login = (props => {
  const {
    data
  } = props

  return (
    <Body>
      <Left/>
    <Right>
      <Wrapper>
        <h3>Youthquake</h3>
        <Input color={Theme.base_color} data={data} placeholder={'Digite seu login'} />
        <Password color={Theme.base_color} placeholder={'Digite sua senha'} />
        <Button style={{color: Theme.base_color}} color={Theme.secondary_color}>Sign-in</Button>
        <p>Não tem sua conta ainda? <Anchor>Cadastre-se</Anchor></p>
      </Wrapper>
    </Right>
    </Body>
  )
})

export default Login
