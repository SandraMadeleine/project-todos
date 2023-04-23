import React from 'react'
import styled from 'styled-components'

const HeaderTitle = styled.h1`
  font-family: 'Quicksand', sans-serif;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 40px;
  text-align: center;
`
const Header = () => {
  return (
    <HeaderTitle>Your very own to do-list</HeaderTitle>
  )
}

export default Header