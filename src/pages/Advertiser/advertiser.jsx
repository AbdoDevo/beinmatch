import React from 'react'
import { Container, TodayMatch, TextWrapper, Title,Description,Text } from './advertiser.style';

const Advertiser = () => {
  return (
    <Container> 
        

                    <TodayMatch>
                        <TextWrapper>
                        
                            <Title>لإعلاناتكم على موقعنا</Title>
                           
                        </TextWrapper>
                        <Description>
                        <Text>لإعلانتكم على موقعنا يرجى مراسلتنا على العنوان الإلكتروني الظاهر تحت</Text>

                        <Text><a href="mailto:beinmatchmedia@gmail.com">beinmatchmedia@gmail.com</a></Text>


                 </Description>
                    </TodayMatch>


       
    </Container>
  )
}

export default Advertiser;
