import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { UserSignUp } from "../api/index.js";
import { useDispatch } from "react-redux";
import { openSnackbar } from "../redux/reducers/snackbarSlice";
import { loginSuccess } from "../redux/reducers/userSlice.js";

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
  const dispatch = useDispatch();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);

  const validateInputs = () => {
    if (!fullname || !email || !password) {
      dispatch(openSnackbar({ message: "All fields are required!", severity: "error" }));
      return false;
    }
    return true;
  };

  const handleSignUp = async () => {
    try {
        const userData = {
            fullname,
            email,
            password,
        };


        const response = await UserSignUp(userData);
        console.log("Signup successful:", response.data);

        // Show success message
        alert("Signup Successful! Please log in.");
    } catch (error) {
        console.error("Signup Error:", error.response?.data || error.message);

        // Show user-friendly error
        alert(error.response?.data?.message || "Signup failed! Try again.");
    }
};

  return (
    <Container>
      <div>
        <Title>Create New Account</Title>
        <Span>Please enter your details to create a new account</Span>
      </div>
      <div>
        <TextInput label="Your Name" placeholder="Enter Your Name" value={fullname}
          handleChange={(e) => setFullname(e.target.value)} />
        <TextInput label="Email Address" placeholder="Enter Your Email" value={email}
          handleChange={(e) => setEmail(e.target.value)}/>
        <TextInput label="Password" placeholder="Enter Your Password" value={password}
          handleChange={(e) => setPassword(e.target.value)} password/>
        <Button text="Sign Up" onClick={handleSignUp} isLoading={buttonLoading} />
      </div>
    </Container>
  );
}

export default SignUp;
