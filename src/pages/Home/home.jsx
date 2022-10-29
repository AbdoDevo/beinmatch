import MatchContainer from 'components/MatchContainer';
import React,{useState,useEffect} from 'react'
import { useMobileMediaQuery } from 'utils';
import {Container, TextWrapper, Title, TodayMatch , Date} from './home.style'
import { observer } from 'mobx-react-lite'
import { values } from 'mobx'
import { useDispatch, useSelector } from 'react-redux';
import { setMatchs } from 'store/store';


const Home =() => {
  
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
                  const response = await  fetch ('https://bein-server.herokuapp.com/', {
                    method:'GET',
       headers:{'Content-Type': 'application/json'},

    });
                  console.log(response);
                //   if(!response.ok){
                //       throw new Error('Something went wrong');
                //   }
        
                  const data= await response.json();
                  let loadedItems=[];
                  console.log('data',data)
                  for(const keyItem in data){
                    
                      loadedItems.push({id:keyItem,details:data[keyItem]})
                  }
                 
                    setData(loadedItems);
                    setTodMatch(loadedItems.filter((item)=>item.details.score_team1===-1));
                    setYestMatch(loadedItems.filter((item)=>item.details.score_team1!==-1));
                    console.log()

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
                 return <MatchContainer id={item.id} key={item.id} ScoreTeam1={item.details.score_team1} LogoTeam1={item.details.image_team1} Team1={item.details.team1}  LogoTeam2={item.details.image_team2} Team2={item.details.team2} ScoreTeam2={item.details.score_team2}  Time={item.details.state} Type={item.details.match_type} State={item.details.state} />
                        })}
                                                
                  
                    </TodayMatch>

                    <TodayMatch>
                    <TextWrapper>
                        <Date></Date>
                            <Title>أهداف وملخصات مباريات أمس</Title>
                        
                        </TextWrapper>
                        {YestMatch && YestMatch.map((item)=>{
                            return <MatchContainer  id={item.id} key={item.id} ScoreTeam1={item.details.score_team1} LogoTeam1={item.details.image_team1} Team1={item.details.team1}  LogoTeam2={item.details.image_team2} Team2={item.details.team2} ScoreTeam2={item.details.score_team2}  Time={item.details.state} Type={item.details.match_type} State={item.details.state}/>
                        })}
                     
                    </TodayMatch>

          
      
    </Container>
  )
}

export default Home
