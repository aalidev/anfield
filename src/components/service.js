import React from "react"
import styled from "styled-components"
import BeerIcon from "../images/cheers.svg"
import SteikIcon from "../images/meat.svg"
import WineIcon from "../images/wine-glass.svg"

const StyledService = styled.div`
  max-width: 1232px;
  padding: 0 1rem;
  margin: 0 auto;
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));

  & > div {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 1rem 0;
    color: #252525;
    padding: 1rem 0;
  }

  h2 {
    margin: 0;
    margin-top: 0.4rem;
  }
`
const StyledIcon = styled.div`
  width: 50px;
  margin-right: 1rem;

  img {
    width: 100%;
    height: 100%;
  }
`
const Service = () => {
  return (
    <StyledService>
      <div>
        <StyledIcon>
          <img src={BeerIcon} />
        </StyledIcon>
        <div>
          <h2>FRESH FOOD</h2>
          <p>
            Donec lacinia magna sit amet arcu aliquet luctus maecenas vehicula.
          </p>
        </div>
      </div>
      <div>
        <StyledIcon>
          <img src={SteikIcon} />
        </StyledIcon>
        <div>
          <h2>CHEF'S SPECIALS</h2>
          <p>
            Donec lacinia magna sit amet arcu aliquet luctus maecenas vehicula.
          </p>
        </div>
      </div>
      <div>
        <StyledIcon>
          <img src={WineIcon} />
        </StyledIcon>
        <div>
          <h2>GOOD WINE</h2>
          <p>
            Donec lacinia magna sit amet arcu aliquet luctus maecenas vehicula.
          </p>
        </div>
      </div>
    </StyledService>
  )
}

export default Service
