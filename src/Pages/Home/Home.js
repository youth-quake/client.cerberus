import React from 'react'
import { Theme, Footer, Button } from '../../components'

import {
  Menu,
  WrapperOptions,
  Option,
  Container,
  Spot,
  Title,
  Subtitle,
  Presentation,
  Animation,
  Youthquake,
  Project,
  Wrapper,
  Content,
  Experience,
  Screen,
  Final,
  Image,
  WrapperImage,
  Disclaimer,
  TitleImage,
  Paragraph
} from './Home.style'

import run from '../../assets/img/run2.png'
import spot from '../../assets/img/spot.png'
import youthquake from '../../assets/img/Screenshot_15-1@2x.png'
import profile from '../../assets/img/profile.png'
import dashboard from '../../assets/img/dashboard.png'
import final from '../../assets/img/screen.png'

import share from '../../assets/img/share.png'
import money from '../../assets/img/money (3).png'
import learning from '../../assets/img/learning (1).png'

const Home = props => (
  <div>
    <Container>
      <Menu color={Theme.base_color}>
        <Option color={Theme.primary_color}><Youthquake src={youthquake} /></Option>
        <WrapperOptions>
          <Option to='#projeto'>O projeto</Option>
          <Option to='#sobre-nos'>Fórum</Option>
          <Option to='login'>Login</Option>
        </WrapperOptions>
        <Option to='#projeto'><Button>Cadastrar</Button></Option>
      </Menu>
    </Container>
    <Container>
      <Presentation>
        <Wrapper>
          <Spot src={spot} alt="Imagem ilustrativa" />
          <Title>Procura um financeiro estável?</Title>
          <Subtitle>Aqui você encontrará a solução para se organizar e viver em paz com seu bolso.</Subtitle>
          <Animation src={run} alt="Imagem ilustrativa" />
        </Wrapper>
        <Disclaimer>
            <WrapperImage>
              <Image src={money}></Image>
              <TitleImage>Tenha o controle</TitleImage>
              <p>Defina seus objetivos e tenha um controle das suas economias e gastos.</p>
            </WrapperImage>
            <WrapperImage>
              <Image src={learning}></Image>
              <TitleImage>Eduque-se</TitleImage>
              <p>No nosso fórum existem inúmeros materiais de estudo para você.</p>
            </WrapperImage>
            <WrapperImage>
              <Image src={share}></Image>
              <TitleImage>Compartilhe</TitleImage>
              <p>Adicione os seus amigos e compartilhe com eles suas conquistas e metas!</p>
            </WrapperImage>
          </Disclaimer>
          <Paragraph><a href="/cadastro">Cadastre-se</a> e descubra como você pode interagir e aprender!</Paragraph>
      </Presentation>
    </Container>
    <Project id="#projeto">
      <Container>
        <Content>
          <Title>Acompanhe o seu progresso!</Title>
          <Subtitle>Aqui você saberá em detalhes como está tendo progresso nos seus objetivos e como está controlando os seus gastos.</Subtitle>
          <Experience>
            <Screen>
              <p>Saiba o progresso dos seus objetivos</p>
              <img src={profile} alt="Objetivos cadastrados" />
            </Screen>
            <Screen>
              <p>Acompanhe seu progresso geral</p>
              <img src={dashboard} alt="Dashboard" />
            </Screen>
          </Experience>
        </Content>
      </Container>
    </Project>
    <Container>
      <Final>
        <img src={final} alt="Imagem ilustrativa" />
      </Final>
    </Container>
    <Footer />
  </div>
)

export default Home
