import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { UserSignIn } from "../api/index.js";
import { useDispatch } from "react-redux";
import  {openSnackbar}  from "../redux/reducers/snackbarSlice.js";
import {loginSuccess} from '../redux/reducers/userSlice.js';

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

const TextButton = styled.div`
  width: 100%;
  margin: 10px 0;
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
  const dispatch = useDispatch();
  const [buttonLoading, setButtonLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateInputs = () => {
    if (!email || !password) {
      alert("Please fill in all fields");
      return false;
    }
    return true;
  };

  const handelSignIn = async () => {
    setButtonLoading(true);
    setButtonDisabled(true);
    if (validateInputs()) {
      await UserSignIn({ email, password })
        .then((res) => {
          dispatch(loginSuccess(res.data));
          dispatch(openSnackbar("Login Successful")); 
        })
        .catch((err) => {
          if (err.response) {
            setButtonLoading(false);
            setButtonDisabled(false);
            alert(err.response.data.message);
            dispatch(openSnackbar(err.response?.data?.message || "An error occurred"));

          } else {
            setButtonLoading(false);
            setButtonDisabled(false);
            dispatch(openSnackbar(err.response?.data?.message || "An error occurred"));

          }
        });
    }
    setButtonDisabled(false);
    setButtonLoading(false);
  };
  
  return (
    <Container>
      <div>
        <Title>Welcome to Shop-Cart</Title>
        <Span>Please login with your details</Span>
      </div>
      <div>
        <TextInput
          label="Email Address"
          placeholder="Enter Your Email"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          label="Password"
          placeholder="Enter Your Password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
          password
        />

        <TextButton>Forget Password?</TextButton>

        <Button
          text="Sign In"
          onClick={handelSignIn}
          isLoading={buttonLoading}
          isDisabled={buttonDisabled}
        />
      </div>
    </Container>
  );
}

export default SignIn;
