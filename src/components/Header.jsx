import React from 'react'
import styled from 'styled-components'
import logoimage from '../aseests/logo44.png'
import {Link} from 'react-router-dom'
import { mobile } from '../Reponsitivity'

const Container = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0px 20%;
    background: #333333 url("https://beinmatchtv.tv/assets/images/bim/header.jpg");
    position: relative;
    margin: 0px auto;
    ${mobile({width : "100%"})};
`

const TopContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

`
const Logo = styled.img`
  cursor: pointer;
`


const AdsContainer = styled.div`
  width: 720px;
  height: 90px;

`

const TestWrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 1080px;
    background-color: black;
    margin: 0 auto;
  
   
`


const NavBar = styled.ul`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 1080px;
    margin: 0 auto;
    height: 50px;
    background-color: #083671;
    list-style: none;
    a{
      text-decoration: none;
      color: white;
    }
    

    ${mobile({width : "100%"})};

  

`



const ListItem=styled.div`
    float: right;
    display: flex;
    text-align: center;
    color: white;
     align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0px 15px;
    font-weight: bold;
    cursor: pointer;
    &:hover{

        background-color: #02164b;

    }
    
   


    
`
const Header = () => {
  return (
    <Container>
      <TopContainer>
        <AdsContainer>
        <script data-cfasync='false' type='text/javascript' src='//p440142.clksite.com/adServe/banners?tid=440142_862237_2'></script>
        </AdsContainer>
        <Link to="/">   <Logo src={logoimage}/></Link>
        </TopContainer>

        <NavBar>
        <Link to="/">
            <ListItem>
           مباريات اليوم
            </ListItem>
            </Link>
            <ListItem>
                أهداف و ملخصات
             </ListItem>
            
            <ListItem>
                فايسبوك
              </ListItem>
              <ListItem>
                تويتر
              </ListItem>
              <Link to="/advertiser">
              <ListItem>
               للاعلانات
              </ListItem>
              </Link> 
              <Link to="/dmca">
              <ListItem>
               DMCA
               
              </ListItem>
              </Link>
        </NavBar>
    </Container>
  )
}

export default Header;
