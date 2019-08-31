import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Logo from "../images/logo.png"
import media from "styled-media-query"

const StyledHeader = styled.header`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 999;

  .container {
    display: flex;
    align-items: center;
  }

  h2 {
    display: inline-block;
    font-size: 1.5rem;
    margin: 0;
    color: #fff;
    font-weight: 500;
    padding: 10px 0;

    ${media.greaterThan("medium")`
      font-size: 2rem;
    `}

    span {
      font-size: 0.75rem;
      display: block;
      text-align: center;
      color: #fbfbfb;

      ${media.greaterThan("medium")`
        font-size: 0.875rem;
    `}
    }
  }
`

const StyledLogo = styled.div`
  max-width: 30px;
  margin-right: 1.5rem;

  ${media.greaterThan("medium")`
  max-width: 40px;
  `}

  img {
    width: 100%;
    margin: 0;
    display: inline-block;
  }
`

const StyledList = styled.ul`
  display: flex;
  list-style: none;
  margin-left: auto;

  li {
    margin-right: 1rem;
  }

  a {
    font-size: 0.875rem;
    font-weight: 500;
    color: #fff;
    text-decoration: none;

    ${media.greaterThan("medium")`
      font-size: 1rem;
    `}

    &:hover {
      color: #b0a8b9;
    }
  }
`

const Header = () => (
  <StyledHeader>
    <div className="container">
      <StyledLogo>
        <img src={Logo} />
      </StyledLogo>
      <h2>
        Anfield <span>pub & bar</span>
      </h2>
      <StyledList>
        <li>
          <a href="#">Главная</a>
        </li>
        <li>
          <a href="#menu">Меню</a>
        </li>
        <li>
          <a href="#contact">Контакты</a>
        </li>
      </StyledList>
    </div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
