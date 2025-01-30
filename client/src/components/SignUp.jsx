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

function SignUp() {
  return (
    <Container>
      <div>
        <Title>Create New Account</Title>
        <Span>Please enter your details to create a new account</Span>
      </div>
      <div>
      <TextInput label="Your Name" placeholder="Enter Your Name" />
        <TextInput label="Email Address" placeholder="Enter Your Email" />
        <TextInput label="Password" placeholder="Enter Your Password" />
        <TextInput label="Mobile No." placeholder="Enter Your Mobile Number" />
        <Button text="SignUp" />
      </div>
    </Container>
  );
}

export default SignUp;
