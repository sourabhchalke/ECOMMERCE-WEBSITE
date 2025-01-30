import React from "react";
import styled from "styled-components";
import homeImg from "../utils/Images/Header.png";

// Css
const Container = styled.div`
  padding: 20px 20px;
  height: 100%;
  width:100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 20px 12px;
  }
  background: ${({ theme }) => theme.bg};
`;
const Section = styled.div`
 
`;
const Img = styled.img`
  width: 100%;
  height: 700px;
  object-fit: cover;
`;

function Home() {
  return (
    <Container>
      <Section>
        <Img src={homeImg} />
      </Section>
    </Container>
  );
}

export default Home;
