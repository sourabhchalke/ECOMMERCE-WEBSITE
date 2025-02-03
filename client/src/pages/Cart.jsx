import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px 10px;
  padding-bottom: 200px;
  height: 100%;
  display: flex;
  // align-items: center;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 768px) {
  
  }
  background: ${({ theme }) => theme.bg};
`;
const Section = styled.div`
 width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 22px;
  gap: 28px;
  // border:2px solid green;
`;
const Title = styled.p`
  font-size: 28px;
  font-weight: 500;
  display: flex;
  justify-content: ${({ center }) => (center ? "center" : "space-between")};
  align-items: center;
`;

const Wrapper = styled.div`
   display: flex;
  gap: 32px;
  width: 100%;
  // padding: 12px;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (max-width: 750px) {
    flex: 1.2;
  }
`;
const Table=styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  ${({ head }) => head && `margin-bottom: 22px`}
`;
const TableItem=styled.div`
   ${({ flex }) => flex && `flex: 1; `}
  ${({ bold }) =>
    bold &&
    `font-weight: 600; 
  font-size: 18px;`}
`;

const Counter=styled.div`
   display: flex;
  gap: 10px;
  border: 1px solid ${({ theme }) => theme.text_secondary + 40};
  border-radius: 8px;
  padding: 4px 12px;
`;
const Product=styled.div`
  border:1px solid red;
   display: flex;
  gap: 14px;
`;
const Img=styled.img`
  height:60px;
`;
const Details=styled.div``;
const Protitle=styled.div`
  font-size:16px;
  font-weight:500;
  color:${({theme})=>theme.primary};
`;
const Prodes=styled.div`
 font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Prosize=styled.div`
   font-size:14px;
  font-weight:500;
`;

const Right = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.secondary};
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (max-width: 750px) {
    flex: 1.2;
  }
`;
function Cart() {
  return (
    <Container>
      <Section>
        <Title>Your Shopping Card</Title>
        <Wrapper>
          <Left>
            <Table>
              <TableItem bold>Product</TableItem>
              <TableItem>Price</TableItem>
              <TableItem>Quantity</TableItem>
              <TableItem>SubTotal</TableItem>
            </Table>
            <Table>
              <TableItem>
                <Product>
                  <Img src="https://i.pinimg.com/236x/4c/6e/a8/4c6ea85bec9a25c43b159af08d4361cb.jpg"/>
                  <Details>
                    <Protitle>Title</Protitle>
                    <Prodes>Description</Prodes>
                    <Prosize>Size</Prosize>
                  </Details>
                </Product>
              </TableItem>
              <TableItem>500</TableItem>
              <TableItem>
                <Counter>
                  <div>-</div>2<div>+</div>
                </Counter>
              </TableItem>
              <TableItem>1000</TableItem>
            </Table>
          </Left>
          <Right>R</Right>
        </Wrapper>
      </Section>
    </Container>
  );
}

export default Cart;
