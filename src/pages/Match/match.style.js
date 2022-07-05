// @ts-nocheck
import styled from 'styled-components'


export const Container = styled.div`

 
    display: flex;
    flex-direction: column;
    margin: 5px 10px;
    align-items: center;
    min-height: 80vh;




`

export const TodayMatch =styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;

        
`

export const TextWrapper =styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;

        background-color: #ccc;
        font-family: Arial;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    padding: 8px 10px;
    float: right;
`

export const Title = styled.span`
width: 100%;
        text-align: center;

`



export const MatchCard = styled.div`

   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 10px;


`

export const Wrapper = styled.div`
   border: 1px #ccc solid;
   width: 100%;
   position: relative;
  
`

export const Team = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: space-between;

`
export const ImageContainer=styled.div`
        width: 70px;
        height: 70px;
        border-radius: 50%;
        
        background-color: #b8b5b5;
        display: flex;
    justify-content: center;
    align-items: center;
 
`

export const Logo = styled.img`
              width: 70px;
        height: 70px;
        border-radius: 50%;
        border: 3px #b8b5b5 solid ;
        

`

export const Name=styled.span`
    font-size: 20px;
    font-weight: bold;
    margin-left: ${props=>props.team="left" && "30px"};
    margin-right: ${props=>props.team="right" && "30px"};

`
export const TimingOrScore=styled.div`
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
        font-weight: bold;
      
`
export const IframeContainer=styled.div`
  width: 100%;
    height: 500px;
`

export const RedTextContainer=styled.div`
    width: 100%;
    color : red;
    text-align: center;
    border : 1px #ccc solid;
    font-size: 12px;
    padding: 10px 20px;
    a{
        text-decoration: none;
        font-weight: bold;
        font-size: 15px;

    }
    a:hover{
        color: #fab44c;
    }

`