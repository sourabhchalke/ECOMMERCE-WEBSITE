import React from 'react';
import styled from 'styled-components';
import ProductCard from '../components/cards/ProductCard';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 20px 12px;
  }
  background: ${({ theme }) => theme.bg};
`;
const Section = styled.div``;
const Title = styled.p`
  margin: 30px 0px;
  font-size: 28px;
  font-weight: 500px;
  display: flex;
  justify-content: ${({ center }) => (center ? "center" : "center")};
  align-items: center;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;

  @media screen and (max-width:320px){
    gap: 0px;
  }
`;

function Favourite() {
  return (
    <Container>
      <Section>
        <Title>Your Favourites</Title>
        <CardWrapper>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </CardWrapper>
      </Section>
    </Container>
  )
}

export default Favourite;
