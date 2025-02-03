import React from "react";
import styled from "styled-components";
import { Rating } from "@mui/material";
import {
  AddShoppingCartOutlined,
  FavoriteBorder,
} from "@mui/icons-material";

const Card = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin:30px 0px;
  @media screen and (max-width: 320px) {
    width: 250px;
  }
`;
const Image = styled.img`
  height: 320px;
  width: 100%;
  border-radius: 6px;
  object-fit: cover;
  transition: all 0.3s ease-out;
  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 320px) {
    height: 250px;
  }
`;
const Menu = styled.div`
  position: absolute;
  z-index: 10;
  color: ${({ theme }) => theme.text_primary};
  top: 14px;
  right: 14px;
  display: none;
  flex-direction: column;
  gap: 12px;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 6px;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }

  &:hover ${Menu} {
    display: flex;
  }
`;
const MenuItem = styled.div`
  border-radius: 50%;
  width: 18px;
  height: 18px;
  background: white;
  padding: 8px;
  // display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
`;
const Rate = styled.div`
  position: absolute;
  z-index: 10;
  color: ${({ theme }) => theme.text_primary};
  bottom: 8px;
  left: 8px;
  padding: 4px 8px;
  border-radius: 4px;
  background: white;
  display: flex;
  align-items: center;
  opacity: 0.9;
`;

const Details = styled.div`
  display: flex;
  gap: 6px;
  flex-direction: column;
  padding: 4px 10px;
`;
const Title = styled.p`
  font-size: 16px;
  font-weight: 700px;
  color: ${({ theme }) => theme.text_primary};
`;
const Des = styled.div`
  font-size: 16px;
  font-weight: 400px;
  color: ${({ theme }) => theme.text_primary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 500px;
`;
const Span = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 60};
  text-decoration: line-through;
  text-decoration-color: ${({ theme }) => theme.text_secondary + 50};
`;
const Percent = styled.div`
  font-size: 14px;
  font-weight: 500px;
  color: ${({ theme }) => theme.green};
`;

function ProductCard() {
  return (
    <Card>
      <Top>
        <Image src="https://assets0.mirraw.com/images/11782208/3283579_long_webp.webp?1696934926" />
        <Menu>
          <MenuItem>
            <AddShoppingCartOutlined
              sx={{ color: "inherit", fontSize: "20px" }}
            />
          
          </MenuItem>
          <MenuItem>
            <FavoriteBorder sx={{ color: "red", fontSize: "20px" }} />
          </MenuItem>
        </Menu>
        <Rate>
          <Rating />
        </Rate>
      </Top>

      <Details>
        <Title>Title</Title>
        <Des>Description</Des>
        <Price>
          1200<Span>1500</Span>
          <Percent>20% Off</Percent>
        </Price>
      </Details>
    </Card>
  );
}

export default ProductCard;
