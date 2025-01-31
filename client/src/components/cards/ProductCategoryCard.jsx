import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Card = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-out;
  cursor: pointer;

  @media screen and (max-width: 320px) {
    width: 250px;
  }
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 6px;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }
`;
const Image = styled.img`
  height: 300px;
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
  width: 90%;
  position: absolute;
  z-index: 10;
  color: ${({ theme }) => theme.text_primary};
  bottom: 20px;
  left: 50;
  right: 50;
  display: flex;
  gap: 12px;
`;
const Button = styled.div`
  width: 100%;
  padding: 12px 20px;
  background: white;
  border-radius: 12px;
  text-align: center;
  font-weight: 500;

  @media screen and (max-width: 320px) {
    padding: 8px 12px;
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    padding: 8px 14px;
    font-size: 15px;
  }
`;
const Sale = styled.div`
  position: absolute;
  z-index: 10;
  color: ${({ theme }) => theme.text_primary};
  top: 10px;
  right: 10px;
  font-weight: 500px;
  color: white;
  background: ${({ theme }) => theme.green};
  padding: 3px 6px;
  border-radius: 5px;

  @media screen and (max-width: 320px) {
    padding: 2px 4px;
    font-size: 12px;
  }
    @media screen and (max-width: 768px) {
    padding: 3px 5px;
    font-size: 14px;
  }
`;

const ProductCategoryCard = ({ category }) => {
  const navigate = useNavigate();

  return (
    <Card>
      <Top>
        <Image src={category.img} />
        <Menu>
          <Button>{category.name}</Button>
        </Menu>
        <Sale>{category.off}</Sale>
      </Top>
    </Card>
  );
};

export default ProductCategoryCard;
