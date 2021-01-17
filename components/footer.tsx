import styled from "styled-components";

import React from "react";
import Button from "./Button";
import { device } from "../consts/theme";
import Logo from "./Svgs/logo";
import Image from "next/image";
import SmartCompBaseOnLogin from "./smartCompBaseOnLogin";

const Footer = () => {
  return (
    <Container>
      <ContentWrapper>
        <ImageContainer>
          <Image
            src="/circle-hashur.svg"
            alt="circle-hashur"
            width={130}
            height={130}
          />
        </ImageContainer>
        <Sentense>{`UNLOCK THE SKILLS FOE GENERATING "NEW MONEY"`}</Sentense>
        <Part2Container>
          <LogoContainer>
            <WhiteLogo />
          </LogoContainer>
          {/* <SignUpButton title="SIGN UP NOW" viewType="glow" to="/signup" /> */}
          {typeof window && (
            <SmartCompBaseOnLogin
              doesNotLogin={
                <SmartButton to="/signup" title="Sign Up" viewType="glow" />
              }
              loginWithoutSubscribed={
                <SmartButton
                  to="/account"
                  title="Get Artciles"
                  viewType="glow"
                />
              }
              loginWithSubscribed={
                <SmartButton to="/articles" title="Read Artciles" />
              }
            />
          )}
        </Part2Container>
      </ContentWrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 100vw;
  justify-content: center;
  height: 360px;
  bottom: 0;
  background-color: var(--primary-color-normal);
  flex-wrap: wrap;
`;
const ContentWrapper = styled.div`
  max-width: var(--page-max-width);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 0 2rem;
`;
const Sentense = styled.h3`
  font-family: Bebas Neue;
  font-style: normal;
  font-weight: normal;
  font-size: 56px;
  line-height: 67px;
  text-transform: capitalize;
  color: #ffffff;
  width: fit-content;
  @media ${device.laptop} {
    font-size: 40px;
    line-height: 48px;
  }
  @media (max-width: 400px) {
    font-size: 36px;
    line-height: 38px;
  }
  @media (max-width: 400px) {
    font-size: 30px;
    line-height: 38px;
  }
`;
const LogoContainer = styled.div`
  width: auto;
  opacity: 0.3;
  margin-left: 3rem;
  color: #dbdddc;
  mix-blend-mode: overlay;
  @media ${device.mobileL} {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    margin-bottom: 4rem;
  }
  @media ${device.tablet} {
    margin-left: 2rem;
    margin-top: 0.9rem;
  }
  @media ${device.mobileL} {
    margin: 0;
  }
`;
const SmartButton = styled(Button)`
  width: 358px;
  height: 88px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  /* Bg Color */

  color: #1d3330;
  @media ${device.laptop} {
    width: 252px;
    height: 61.94px;

    font-size: 16px;
    line-height: 20px;
  }
`;
const Part2Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 500px) {
    flex-direction: column;
    padding-bottom: 2rem;
    height: 45%;
  }
  @media ${device.tablet} {
    justify-content: space-between;
  }
`;
const WhiteLogo = styled(Logo)`
  @media ${device.mobileL} {
    width: 120%;
    height: 90%;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  right: 10rem;
  top: -38px;
`;
