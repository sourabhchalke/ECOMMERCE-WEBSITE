import React from "react";
import styled from "styled-components";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.primary};
`;
const Span = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 90};
`;

const TextButton=styled.div`
  width: 100%;
  margin:10px 0;
  text-align: end;
  color: ${({ theme }) => theme.text_primary + 90};
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
  font-weight: 500;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

function SignIn() {
  return (
    <Container>
      <div>
        <Title>Welcome to Shop-Cart</Title>
        <Span>Please login with your details</Span>
      </div>
      <div>
        <TextInput label="Email Address" placeholder="Enter Your Email" />
        <TextInput label="Password" placeholder="Enter Your Password" />
        
        <TextButton>Forget Password?</TextButton>

        <Button text="SignIn" />
      </div>
    </Container>
  );
}

export default SignIn;
