import React from 'react';
import styled from 'styled-components';
import ProductCard from '../components/cards/ProductCard';
import { filter } from '../utils/data';

const Container=styled.div`
  height:100%;
  // width:100%;
  border:1px solid red;
  display:flex;
  align-items:center;
  // justify-content:center;
  background:${({theme})=> theme.bg};

  @media (max-width:768px){
    flex-direction:column;
  }

`;
const Filters=styled.div`
  width:230px;
  height:90%;
  overflow-y:scroll;
  padding:20px 16px;
`;
const Menu=styled.div`
  display:flex;
  flex-direction:column;
  gap:4px;
`;
const FilterSection=styled.div``;
const Title=styled.div``;
const Products=styled.div``;
const CardWrapper=styled.div``;


function ShopListing() {
  return (
    <Container>
      <Filters>
        <Menu>

         

        </Menu>
      </Filters>
      <Products>
        <CardWrapper>
          <ProductCard/>
        </CardWrapper>
      </Products>
    </Container>
  )
}

export default ShopListing;
