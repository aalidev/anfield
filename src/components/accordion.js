import React, { useState } from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"

export const StyledAccordion = styled.div`
  --accordion-font-size: 1rem;

  grid-area: accordion;
  width: 100%;
  transition: all 0.5s ease;
`

const StyledIconPlaceholder = styled.div`
  margin-right: 0.3rem;
    transition: transform 0.3s ease-in-out;

  /* ${props =>
    props.reverted &&
    css`
      transform: rotate(180deg);
    `} */
`

const StyledToggler = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  font-size: var(--accordion-font-size);
  line-height: 150%;
  color: var(--grey-800);
  padding: 9px 0;
  cursor: pointer;

  p {
    margin: 0;
  }

  .content {
    display: flex;
    align-items: center;
    border: 2px solid #252525;
    width: 100%;

    ${props =>
      props.reverted &&
      css`
        background: #252525;
        color: #fff;
      `}

    &:hover {
      background: #252525;
      color: #fff;
    }

    p {
      line-height: 100%;
      font-size: 36px;
      padding-left: 0.625rem;

      svg {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 1rem;
        margin-bottom: 2px;
        background-size: cover;
        transition: all 0.2s ease;
        ${props =>
          props.reverted &&
          css`
            transform: rotate(180deg);
          `}
      }
    }
  }
`

const StyledExpansionPanel = styled.div`
  margin-bottom: 0.8rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--grey-300);
  }
`

const StyledExpansionPanelHeader = styled.div``

const StyledExpansionPanelContent = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(auto, 600px));
  grid-gap: 1.5rem;
  grid-template-rows: 1fr;

  & > div {
    padding: 0.5rem 2rem;
    display: flex;
    align-items: center;
  }

  ${props =>
    props.opened &&
    css`
      max-height: 300px;
    `}

  a {
    color: inherit;
    font-size: 14px;
    line-height: 34px;
    display: block;
    padding: 4px 5px 0 43px;
    text-decoration: underline;
  }
`

const StyledMenu = styled.div`
  font-size: 1rem;
  display: flex;

  span {
    width: 100%;
    position: relative;
    padding: 0 1rem;

    &::after {
      position: absolute;
      top: 0;
      content: "";
      display: block;
      width: 89%;
      height: 2px;
      background-image: linear-gradient(
        90deg,
        #999,
        #999 75%,
        transparent 75%,
        transparent 100%
      );
      background-size: 10px 1px;
      border: none;
    }
  }

  .menu-name,
  .menu-price {
    margin: 0;
    font-size: 18px;
    font-weight: 500;
  }

  .menu-name {
    max-width: 200px;
    width: 100%;
  }

  .menu-price {
    margin-left: auto;
    position: relative;

    &::after {
      content: "\u20B8";
      display: block;
      position: absolute;
      top: 0;
      right: -1rem;
    }
  }
`

export const Accordion = ({ items }) => {
  const [currentIndex, SetCurrentIndex] = useState(null)

  const handleClick = i => {
    if (!items || !items.length) {
      return null
    }

    if (currentIndex !== null) {
      SetCurrentIndex(null)
      currentIndex === i ? SetCurrentIndex(null) : SetCurrentIndex(i)
    } else {
      SetCurrentIndex(i)
    }
  }

  return (
    <StyledAccordion>
      {items.map((data, i) => (
        <StyledExpansionPanel key={i}>
          <StyledExpansionPanelHeader>
            <StyledToggler
              onClick={() => handleClick(i)}
              reverted={currentIndex === i}
            >
              <div className="content">
                <p>
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 451.847 451.847"
                  >
                    <g>
                      <path
                        d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
		c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
		c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                  {data.title}
                </p>
              </div>
              <StyledIconPlaceholder></StyledIconPlaceholder>
            </StyledToggler>
          </StyledExpansionPanelHeader>

          <StyledExpansionPanelContent opened={currentIndex === i}>
            {data.content &&
              data.content.map(
                menu =>
                  menu.title && (
                    <>
                    <p>{menu.title}</p>
                      {menu.fields && menu.fields.map(data => ( 
                      <StyledMenu>
                        <p className="menu-name">{data.node.name}</p>
                        <span></span>
                        <p className="menu-price">{data.node.price}</p>
                      </StyledMenu>
                      ))} 
                    </> 
                  )
              )}
          </StyledExpansionPanelContent>
        </StyledExpansionPanel>
      ))}
    </StyledAccordion>
  )
}

Accordion.propTypes = {
  icon: PropTypes.string,
}

Accordion.defaultProps = {
  icon: "forte",
}
