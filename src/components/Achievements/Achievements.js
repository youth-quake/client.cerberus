import React from 'react'
import styled from 'styled-components'
import { Theme, Button as ButtonWithTheme } from '..'
import Trofeu from '../../assets/img/trofeu.png'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  padding: 10px;

  & > img {
    margin: 10px;
  }
`

const Title = styled.h3`
  width: 100%;
  min-width: 819px;
  margin: 0;
  font-size: 28px;  
  font-family: ${Theme.font.font_family};
  font-weight: bold;
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Button = styled(ButtonWithTheme)`
  width: 120px;
`

const Badge = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: baseline;
  align-items: center;
  padding: 10px;
  height: 150px;
  width: 180px;
  margin: 20px 10px; 

  & > span {
    cursor: default;
    font-weight: bold;
    box-sizing: border-box;
    font-family: ${Theme.font.font_family};
    color: ${Theme.colors.secondary_color};
  }

  & > p {
    cursor: default;
    box-sizing: border-box;
    font-family: ${Theme.font.font_family};
    font-size: 14px;
    color: ${Theme.colors.secondary_color};
    margin: 10px 0;
  }
`

const Image = styled.img`
  height: 120px;
  width: 120px;
`

export const Achievements = ({ achievements }) => (
  <div>
    <Title>
      Todas as conquistas
      <Button>Conquistas</Button>
    </Title>
    <Container>
      {achievements.map(item => (
        <Badge key={item.idAchievement.idAchievement}>
          <Image src={Trofeu} />
          <span>{item.idAchievement.name}</span>
          <p>{item.idAchievement.description}</p>
        </Badge>
      )
      )}
    </Container>
  </div>
)