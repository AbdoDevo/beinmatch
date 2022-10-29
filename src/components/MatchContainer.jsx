import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 5px 15px;
    border: 1px #ccc solid;
    border-radius: 10px;
`

const MatchCard = styled.div`

   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 10px;

`

const Team = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: space-between;

`
const ImageContainer=styled.div`
        width: 70px;
        height: 70px;
        border-radius: 50%;
        
        background-color: #b8b5b5;
        display: flex;
    justify-content: center;
    align-items: center;
 
`

const Logo = styled.img`
              width: 70px;
        height: 70px;
        border-radius: 50%;
        border: 3px #b8b5b5 solid ;
        

`

const Name=styled.span`
    font-size: 20px;
    font-weight: bold;
    margin-left: ${props=>props.team="left" && "30px"};
    margin-right: ${props=>props.team="right" && "30px"};

`

const ButtonContaier=styled.div`
            flex:1;
            display: flex;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
   
    background: #3498db;
    border-radius: 5px;
    border: solid thin;
    color: #ffffff;
    font-size: 18px;
    padding: 7px 4px 7px 4px;
    text-decoration: none;
    width: 100px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.2s ease;
    &:hover{
        background-color: #135c8d;
    }
    margin: 0px 20px;
  
`

const Details = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   border-top: 1px #ccc solid;
   padding: 5px;
   background-color: #f4f4f0;
   
`

const Text = styled.span`
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    color: #333;
   
    float: right;
`

const Score=styled.div`
        background-color: #ccc;
       border-radius: 5px;
        padding: 3px 10px;
        font-weight: bold;
        font-size: 22px;

`

const MatchContainer = (props) => {
  return (
    <Container>
        <MatchCard>
                <Team >
                        <ImageContainer><Logo src={props.LogoTeam2}/></ImageContainer>
                        <Name direction="left">{props.Team2}</Name>
                  
                </Team>

                <ButtonContaier>
                {props.ScoreTeam2!==-1 && <Score>{props.ScoreTeam2}</Score>}
               <Link to={`/home/live/${props.id}`}> <Button>{props.ScoreTeam1!==-1 ? "شاهد الأهداف" : "شاهد المباراة"} </Button></Link>
                {props.ScoreTeam1!==-1 && <Score>{props.ScoreTeam1}</Score>}
                </ButtonContaier>
                <Team >
                   
                <Name direction="left">{props.Team1}</Name>
                <ImageContainer>
                    <Logo src={props.LogoTeam1} />
                    </ImageContainer>
                        
                </Team>
        </MatchCard>

        <Details>
            <Text>{props.Time}</Text>
            <Text>{props.Type}</Text>
        </Details>
    </Container>
  )
}

export default MatchContainer
