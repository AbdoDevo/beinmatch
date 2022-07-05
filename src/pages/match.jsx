import React,{ useEffect,useState }  from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import { Link } from 'react-router-dom'


const Container = styled.div`

 
    display: flex;
    flex-direction: column;
    margin: 5px 10px;
    align-items: center;
    min-height: 80vh;




`

const TodayMatch =styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;

        
`

const TextWrapper =styled.div`
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

const Title = styled.span`
width: 100%;
        text-align: center;

`



const MatchCard = styled.div`

   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 10px;


`

const Wrapper = styled.div`
   border: 1px #ccc solid;
   width: 100%;
   position: relative;
  
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
const TimingOrScore=styled.div`
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
        font-weight: bold;
      
`
const IframeContainer=styled.div`
  width: 100%;
    height: 500px;
`

const RedTextContainer=styled.div`
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
const Match = () => {
    const {idMatch}=useParams();
    const [match,setMAtch]=useState([]);

    useEffect(()=>{
        const sendRequest = async ()=>{
            try{
              const response = await  fetch (`https://beinmatch-9653c-default-rtdb.firebaseio.com/beinmatch/${idMatch}.json`);
              if(!response.ok){
                  throw new Error('Something went wrong');
              }
    
              const data= await response.json();
             setMAtch(data);
                
            }  catch(e){
                console.log(e.message);
        }
            }
            sendRequest();
    },[idMatch])

    if(!match){
        return <Container>No Match Founded!</Container>
    }
  return (
    <Container> 
        

                    <TodayMatch>
                        <TextWrapper>
                        
                            <Title>الصفحة الخاصة بنقل مباراة</Title>
                           
                        </TextWrapper>
               
                    </TodayMatch>
                    <Wrapper>
                    <MatchCard>
                <Team >
                        <ImageContainer><Logo src={match.LogoTeam2} /></ImageContainer>
                        <Name direction="left">{match.Team2}</Name>
                  
                </Team>

                <TimingOrScore>
                        {match.Time}
                </TimingOrScore>
                <Team >
                   
                <Name direction="left">{match.Team1}</Name>
                <ImageContainer>
                    <Logo src={match.LogoTeam1} />
                    </ImageContainer>
                        
                </Team>
        </MatchCard>
        <IframeContainer>
        <iframe allowfullscreen='true' frameborder='0' height='500px' scrolling='' src={match.Link}  width='100%'></iframe>

        </IframeContainer>
        </Wrapper>

        <RedTextContainer>
        Disclaimer: This content is provided and hosted by Another Website.
Be in Match is not responsible for and cannot be accountable for any of the content hosted on the third-party site.
For any legal complaints please contact the video/audio hosting provider.


        </RedTextContainer>
        <RedTextContainer>
           <Link to={`/`}>
           في حالة توقف البث إضغط هنا لتحديث المشغل
           </Link>

        </RedTextContainer>

     

       
    </Container>
  )
}
export default Match;
