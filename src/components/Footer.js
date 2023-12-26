import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
        <div className="footer">Copyright  &copy; 2023 TGL Productions</div>
    </Wrapper>
  )



}

export default Footer

const Wrapper = styled.div`
.footer{
  position: relative;

    background-color: black;
    height: 2.5rem;
    font-size: 1.4rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}

`;