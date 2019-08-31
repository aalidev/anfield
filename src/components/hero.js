import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledHero = styled.div`
  color: #fff;
  z-index: 12;

  h1 {
    font-size: 6.75rem;
    font-weight: 500;
    margin: 0;
    z-index: 999;
  }

  p {
    margin: 0;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  .bg-image {
    width: 100%;
    z-index: -1;
    height: 100vh;

    .image {
      width: 100%;
      height: 100%;
      background-size: cover;
    }
  }

  .container-title {
    position: absolute;
    overflow: hidden;
    top: 50%;
    left: 0;
    text-align: center;
    width: 100%;
    transform: translateY(-50%);
    z-index: 99;

    a {
      font-size: 1.5rem;
      color: #fff;
      border: 2px solid #fff;
      padding: 5px 15px;
    }
  }

  .container {
    height: 100vh;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
  }
`

const Hero = ({ data }) => {
  return (
    <StyledHero>
      <div className="container">
        <div className="container-title">
          <h1>Welcome</h1>
          <p>Лучшее место для просмотра матча</p>
          <a href="#menu"> Menu </a>
        </div>
      </div>
      <div className="bg-image">
        <Img
          fluid={data.allContentfulAsset.edges[0].node.fluid}
          className="image"
        />
      </div>
    </StyledHero>
  )
}

export default Hero
