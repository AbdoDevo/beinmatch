import { fetchMatch, getMatchPage } from "api/apis";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Container,
  TodayMatch,
  TextWrapper,
  IframeContainer,
  ImageContainer,
  Logo,
  MatchCard,
  Name,
  RedTextContainer,
  Team,
  TimingOrScore,
  Title,
  Wrapper,
} from "./match.style";

const Match = () => {
  const { idMatch } = useParams();
  const [match, setMAtch] = useState([]);

  useEffect(() => {
    const sendrequest = async () => {

      const match = await fetchMatch(idMatch);
      setMAtch(match);
    };
    sendrequest();
  }, [idMatch]);

  if (!match) {
    return <Container>No Match Founded!</Container>;
  }

   
const Iframe=styled.iframe`
    padding-right: 20px;
  z-index:0 ;
  margin-top: -220px;

`



  return (
    <Container>
      <TodayMatch>
        <TextWrapper>
          <Title>الصفحة الخاصة بنقل مباراة</Title>
        </TextWrapper>
      </TodayMatch>
      <Wrapper>
        <MatchCard>
          <Team>
            <ImageContainer>
              <Logo src={match.LogoTeam2} />
            </ImageContainer>
            <Name direction="left">{match.Team2}</Name>
          </Team>

          <TimingOrScore>{match.Time}</TimingOrScore>
          <Team>
            <Name direction="left">{match.Team1}</Name>
            <ImageContainer>
              <Logo src={match.LogoTeam1} />
            </ImageContainer>
          </Team>
        </MatchCard>
        <IframeContainer>
          <div id="PlaceToPutTable"></div>
{/* <iframe             allowfullscreen="true"  height="500px"
            scrolling=""
                        width="100%"

 id="iframe" src="https://beinmatch.ma/home/live/11785/1/برشلونة_vs_فياريال" style="display:hidden;"></iframe> */}
          <Iframe
            height="800px"
            id="iframe"
            allowfullscreen="true"
            frameborder="0"
            scrolling=""
            // src={match.Link}
            width="100%"
            src={'https://beinmatch.ma/home/live/11806/1/ريال_بيتيس_vs_أتلتيكو_مدريد'}
            scrolling="no"
          ></Iframe>
        </IframeContainer>
      </Wrapper>

      {/* <RedTextContainer>
        Disclaimer: This content is provided and hosted by Another Website. Be
        in Match is not responsible for and cannot be accountable for any of the
        content hosted on the third-party site. For any legal complaints please
        contact the video/audio hosting provider.
      </RedTextContainer>
      <RedTextContainer>
        <Link to={`/`}>في حالة توقف البث إضغط هنا لتحديث المشغل</Link>
      </RedTextContainer> */}
    </Container>
  );
};
export default Match;
