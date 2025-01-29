import React from "react";
import styled from "styled-components";
import Modal from "@mui/material/Modal";
import LogoImg from '../utils/Images/logo2.png';
import AuthImg from '../utils/Images/AuthImage.png';

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background: ${({ theme }) => theme.bg};
`;
const Left = styled.div`
  flex: 1;
  position: relative;
  @media screen and (max-width : 768px){
  display:none;
`;
const Logo=styled.img`
  width:20%;
  position:absolute;
  left:10px;
  top:10px;
  z-index:10;
`;
const Image=styled.img`
  position:relative;
  height:100%;
  width:100%;
  object-fit:cover;
`;

const Right = styled.div`
  flex: 1;
  position: relative;
  background: ${({ theme }) => theme.black};
  display:flex;
  flex-direction:column;
  padding:40px;
  gap:16px;
  align-items:center;
  justify-content:center;

`;

const Authentication = ({ openAuth, setOpenAuth }) => {
  return (
    <Modal open={openAuth} onClose={() => setOpenAuth(false)}>
      <Container>
        <Left>
          <Logo src={LogoImg}/>
          <Image src={AuthImg}/>
        </Left>
        <Right>R</Right>
      </Container>
    </Modal>
  );
};

export default Authentication;
