import React, { useState } from "react";
import styled from "styled-components";
import Modal from "@mui/material/Modal";
import LogoImg from "../utils/Images/logo2.png";
import AuthImg from "../utils/Images/AuthImage.png";
import { Close } from "@mui/icons-material";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

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
const Logo = styled.img`
  width: 20%;
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 10;
`;
const Image = styled.img`
  position: relative;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Right = styled.div`
  flex: 1;
  position: relative;
  // background: ${({ theme }) => theme.black};
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;
const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  border-radius: 50%;
  padding: 4px;
  width: 32px;
  height: 32px;
  border: 1px solid ${({ theme }) => theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${({ theme }) => theme.primary + 20};
  }
`;

const Text = styled.p`
  display: flex;
  gap: 10px;
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 16px;
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;
const TextButton = styled.div`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
`;

const Authentication = ({ openAuth, setOpenAuth }) => {
  const [login, setLogin] = useState(true);

  return (
    <Modal open={openAuth} onClose={() => setOpenAuth(false)}>
      <Container>
        <Left>
          <Logo src={LogoImg} />
          <Image src={AuthImg} />
        </Left>
        <Right>
          <CloseButton>
            <Close onClick={() => setOpenAuth(false)} />
          </CloseButton>

          {login ? (
            <>
              <SignIn />
              <Text>
                Don't have an account ? <TextButton onClick={()=> setLogin(false)}>SignUp</TextButton>
              </Text>
            </>
          ) : (
            <>
              <SignUp />
              <Text>
                Already have an account  <TextButton onClick={()=> setLogin(true)}>SignIn</TextButton>
              </Text>
            </>
          )}
        </Right>
      </Container>
    </Modal>
  );
};

export default Authentication;
