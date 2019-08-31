import React from "react"
import styled from "styled-components"
import media from "styled-media-query";

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1232px;
  padding: 0 1rem;
  margin: 4rem auto;

  ${media.greaterThan("medium")`
  flex-direction: row;  
  
  `}

`
const StyledMaps = styled.div`
  max-width: 100%;
  width: 100%;
  height: 400px;
  background: grey;
  border: 3px solid #252525;

  ${media.greaterThan("medium")`
    max-width: 50%;
  `}
`

const StyledContacts = styled.div`

${media.greaterThan("medium")`
  padding-left: 2rem;
  width: 50%;
`}
  h2 {
    font-size: 2.625rem;
    color: #252525;
    margin: 1rem 0;
  }

  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      font-size: 18px;
      margin: 0;
      line-height: 200%;
      color: grey;
      padding: 0;
      a {
        color: #252525;
      }
    }
  }
`

const Footer = () => {
  return <StyledFooter>
    <StyledMaps>
    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A5b86333fd98156bc7f1c7ed28dd0632a682ae7eb5e4dfab46d06b33a8aef40ad&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>      </StyledMaps>
    <StyledContacts>
      <h2>Контакты</h2>
      <ul>
        <li>Адрес: <a href="https://yandex.ru/maps/?um=constructor%3A5b86333fd98156bc7f1c7ed28dd0632a682ae7eb5e4dfab46d06b33a8aef40ad&source=constructorLink">Казыбек би 31</a></li>
        <li>Телефон: <a href="tel:8777777777">8 (777) 787 77 87</a></li>
      </ul>
    </StyledContacts>
  </StyledFooter>
}

export default Footer