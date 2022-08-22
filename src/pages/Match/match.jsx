import { fetchMatch } from "api/apis";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
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
          <iframe
            allowfullscreen="true"
            frameborder="0"
            height="500px"
            scrolling=""
            src={match.Link}
            width="100%"
          ></iframe>
        </IframeContainer>
      </Wrapper>

      <RedTextContainer>
        Disclaimer: This content is provided and hosted by Another Website. Be
        in Match is not responsible for and cannot be accountable for any of the
        content hosted on the third-party site. For any legal complaints please
        contact the video/audio hosting provider.
      </RedTextContainer>
      <RedTextContainer>
        <Link to={`/`}>في حالة توقف البث إضغط هنا لتحديث المشغل</Link>
      </RedTextContainer>
    </Container>
  );
};
export default Match;
