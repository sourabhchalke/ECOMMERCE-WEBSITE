import React from 'react';
import styled from 'styled-components';

const Container=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:90%;

    border:1px solid red;
`;
const Wrapper=styled.div`
    flex:1;
    width:100%;
    display:flex;
    gap:10px;
    justify-content:center;

    @media screen and (max-width:768px){
        flex-direction:column;
        justify-content:center;
    }

    border:1px solid green;
`;
const ImageWrapper=styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;


    border:1px solid blue;
`;
const Image=styled.img`
    height:450px;
    border-radius:15px;

    @media screen and (max-width:768px){
        height:380px;
    
    }
`;

const Details=styled.div`
    flex:1;

    border:1px solid yellow;
`;


function ProductDetails() {
  return (
    <Container>
        <Wrapper>
            <ImageWrapper>
                <Image src='https://i.pinimg.com/236x/4c/6e/a8/4c6ea85bec9a25c43b159af08d4361cb.jpg'/>
            </ImageWrapper>
            <Details>D</Details>
        </Wrapper>
    </Container>
  )
}

export default ProductDetails;
