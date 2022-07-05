import MatchContainer from 'components/MatchContainer';
import React,{useState,useEffect} from 'react'
import { useMobileMediaQuery } from 'utils';
import {Container, TextWrapper, Title, TodayMatch , Date} from './home.style'



const Home = () => {
 
    let today = new window.Date();

    let date=today.getDate() + "/"+ parseInt(today.getMonth()+1) +"/"+today.getFullYear();
        const [data,setData]=useState([]);
        const [TodMatch,setTodMatch]=useState([]);
        const [YestMatch,setYestMatch]=useState([]);

    const isMobile=useMobileMediaQuery();
    console.log('isMobile',isMobile);
        useEffect(()=>{
            const sendRequest = async ()=>{
                try{
                  const response = await  fetch ('https://beinmatch-9653c-default-rtdb.firebaseio.com/beinmatch.json');
                  if(!response.ok){
                      throw new Error('Something went wrong');
                  }
        
                  const data= await response.json();
                  let loadedItems=[];
            
                  for(const keyItem in data){
                    
                      loadedItems.push({id:keyItem,details:data[keyItem]})
                  }
                 
                    setData(loadedItems);
                    setTodMatch(loadedItems.filter((item)=>item.details.State!==-1));
                    setYestMatch(loadedItems.filter((item)=>item.details.State===-1));
                }  catch(e){
                    console.log(e.message);
            }
                }
                sendRequest();
        },[])
  return (
    <Container> 
          

        

                    <TodayMatch>
                        <TextWrapper>
                        <Date>{date}</Date>
                            <Title>مباريات اليوم</Title>
                        
                        </TextWrapper>
                        {TodMatch && TodMatch.map((item)=>{ 
                 return <MatchContainer id={item.id} key={item.id} ScoreTeam1={item.details.ScoreTeam1} LogoTeam1={item.details.LogoTeam1} Team1={item.details.Team1}  LogoTeam2={item.details.LogoTeam2} Team2={item.details.Team2} ScoreTeam2={item.details.ScoreTeam2}  Time={item.details.Time} Type={item.details.Type} State={item.details.State} />
                        })}
                                                
                  
                    </TodayMatch>

                    <TodayMatch>
                    <TextWrapper>
                        <Date></Date>
                            <Title>أهداف وملخصات مباريات أمس</Title>
                        
                        </TextWrapper>
                        {YestMatch && YestMatch.map((item)=>{
                            return <MatchContainer id={item.id} key={item.id} ScoreTeam1={item.details.ScoreTeam1} LogoTeam1={item.details.LogoTeam1} Team1={item.details.Team1}  LogoTeam2={item.details.LogoTeam2} Team2={item.details.Team2} ScoreTeam2={item.details.ScoreTeam2}  Time={item.details.Time} Type={item.details.Type} State={item.details.State}/>
                        })}
                     
                    </TodayMatch>

          
      
    </Container>
  )
}

export default Home
