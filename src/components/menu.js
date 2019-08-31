import React from "react"
import styled from "styled-components"
import { Accordion } from "../components/accordion"

const StyledMenu = styled.div`
  color: #252525;
  h2 {
    text-align: center;
    font-size: 2.625rem;
    margin-bottom: 0;
  }

  .container > p {
    text-align: center;
    font-size: 1.5rem;
    margin-top: 0.2rem;
  }
`

const StyledMenuConatainer = styled.div``

const Menu = ({ data }) => {
  console.log("menu", data.allContentfulBeers.edges)
  const items = [
    {
      title: "Пиво",
      content: data.allContentfulBeers.edges,
    },
    {
      title: "Вино",
      content: data.allContentfulWines.edges,
    },
  ]
  return (
    <StyledMenu  id="menu">
      <div className="container">
        <h2>Меню</h2>
        <p>Описание к меню</p>
        <StyledMenuConatainer>
          <Accordion items={items}></Accordion>
        </StyledMenuConatainer>
      </div>
    </StyledMenu>
  )
}

export default Menu
