import React from 'react'
import { Description } from './dmca.style';
import { Container, TodayMatch, TextWrapper, Title, Text} from './dmca.style';


const DMCA = () => {
  return (
    <Container> 
        

                    <TodayMatch>
                        <TextWrapper>
                        
                            <Title>DMCA</Title>
                           
                        </TextWrapper>
                        <Description>
                        <Text>All the video content found on the Be in Match is not hosted on our servers nor is created or uploaded by us </Text>

                        <Text>Be in Match simply acts as a search engine that finds videos from websites like YouTube, DailyMotion, Metacafe and other video portals</Text>

                        <Text>Be in Match is not responsible for external websites content</Text>

                        <Text>If you find that some of the content violates your rights you may request for that content to be brought down at the host that is responsible for the content</Text>

                        <Text>That will ensure that the content is removed from Be in Match and other search engines that may have indexed the content</Text>


                 </Description>
                    </TodayMatch>


       
    </Container>
  )
}

export default DMCA;
