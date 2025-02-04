import React from 'react';
import styled from 'styled-components';
import {Rating} from '@mui/material';
import {FavoriteBorder, FavoriteRounded} from '@mui/icons-material';
import Button from '../components/Button';

const Container=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:90%;
    margin:30px 0px;

    @media screen and (max-width:768px){
        margin:150px 0px 0px 0px;
    }
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
`;

// Left Part Start
const ImageWrapper=styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
`;
const Image=styled.img`
    height:450px;
    border-radius:15px;

    @media screen and (max-width:768px){
        height:380px;
    
    }
`;

// Right Part Start
const Details=styled.div`
    flex:1;
    padding:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    
`;
const Title=styled.div`
    font-size:20px;
    font-weight:600;
    margin:6px 0px;
    color:${({theme})=>theme.text_primary};
`;
const Name=styled.div`
    font-size:16px;
    font-weight:400;
    margin:6px 0px;
    color:${({theme})=>theme.text_primary};
`;
const Price=styled.div`
    display:flex;
    align-items:center;
    gap:8px;
    font-size:17px;
    font-weight:500;
    color:${({theme})=>theme.text_primary};

    margin:6px 0px;
`;
const Span=styled.div`
    font-size:14px;
    font-weight:400;
    color:${({theme})=>theme.text_primary};
    text-decoration:line-through;
    text-decoration-color:${({theme})=>theme.text_secondary};
`;
const Percent=styled.div`
    font-size:16px;
    font-weight:500;
    color:${({theme})=>theme.green};
`;
const Desc=styled.div`
    font-size:16px;
    font-weight:400;
    color:${({theme})=>theme.text_primary};
    margin:6px 0px;
`;
const Sizes=styled.div`
    display:flex;
    flex-direction:column;
    font-size:16px;
    font-weight:500px;
`;
const Items=styled.div`
    display:flex;
    gap:16px;
    margin:6px 0px;
`;
const Item=styled.div`
    border:1px solid ${({theme})=>theme.primary};
    width:40px;
    height:40px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    ${({selected,theme})=>selected && `background:${theme.primary};color:white`};

`;
const ButtonWrapper=styled.div`
    display:flex;
    gap:14px;
    margin:10px 0px;
`;

function ProductDetails() {
  return (
    <Container>
        <Wrapper>
            <ImageWrapper>
                <Image src='https://i.pinimg.com/236x/4c/6e/a8/4c6ea85bec9a25c43b159af08d4361cb.jpg'/>
            </ImageWrapper>
            <Details>
                <div>
                    <Title>Title</Title>
                    <Name>Name</Name>
                </div>
                <Rating/>
                <Price>
                    120
                    <Span>200</Span>
                    <Percent>40% Off</Percent>
                </Price>
                <Desc>Product Description</Desc>
                <Sizes>
                    <Items>
                        <Item selected>S</Item>
                        <Item>L</Item>
                        <Item>XL</Item>
                    </Items>
                </Sizes>
                <ButtonWrapper>
                    <Button text="Add to Cart" outlined/>
                    <Button text="Buy Now"/>
                    <Button outlined  leftIcon={<FavoriteBorder /> }/>
                </ButtonWrapper>
            </Details>
        </Wrapper>
    </Container>
  )
}

export default ProductDetails;
