import React from "react";
import styled from "styled-components";
import homeImg from "../utils/Images/Header.png";
import  {category}  from "../utils/data";
import ProductCategoryCard from '../components/cards/ProductCategoryCard';

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

const Title=styled.p`
  font-size:28px;
  font-weight:500px;
  display:flex;
  justify-content:${({center})=>(center?"center":"center")};
  align-items:center;
`;
const CardWrapper=styled.div`
  display:flex;
  flex-wrap:wrap;
  gap:24px;
  justify-content:center;
`;

function Home() {
  return (
    <Container>
      <Section>
        <Img src={homeImg} />
      </Section>

      <Section>
        <Title>Shop By Categories</Title>

        <CardWrapper>
          {category.map((category)=>{
            
            return  <ProductCategoryCard category={category} />
            
          })}
        </CardWrapper>

      </Section>

      <Section>
        <Title>Our BestSeller</Title>
      </Section>
    </Container>
  );
}

export default Home;
