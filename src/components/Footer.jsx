import React from 'react'
import styled from 'styled-components'
import Logo from '../aseests/logo44.png'
import {Link} from 'react-router-dom'

const Container = styled.div`
        width: 60%;
        height: 30px;
        background: #333;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
         
    font-family: Tahoma;
    font-size: 8px;
        color: #ccc;
        padding: 5px 10px;
`
const Left = styled.div`
    flex: 1 ;
    margin-left: 2px;
    margin-top: 3px;
    text-align: left;
  
    
`
const Center = styled.div`
   flex: 1 ;
   margin-left: 2px;
    margin-top: 3px;
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
   
`
const Image=styled.img`
    height: 40px;
    

`
const Right = styled.div`
 flex: 1 ;
 text-align: end;
 margin-left: 2px;
    margin-top: 3px;
    a{
      text-decoration: none;
      color: white;
      font-weight: bold;
    }

`


const Footer = () => {
  return (
    <Container>
      <Left> NaDev برمجة وتصميم شركة </Left>
      <Center>
          <Image src={Logo} />
      </Center>
      <Right>Be in Match © 2016-2021 |<Link to="/dmca"> DMCA</Link></Right>
    </Container>
  )
}

export default Footer
