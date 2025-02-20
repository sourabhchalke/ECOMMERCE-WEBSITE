import React, { useState } from "react";
import styled from "styled-components";
import LogoImg from "../utils/Images/logo2.png";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import {
  FavoriteBorder,
  MenuRounded,
  SearchRounded,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {Avatar} from '@mui/material';
import {logout} from '../redux/reducers/userSlice';

// Define styled components
const Nav = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;
const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 0px 20px;
  gap: 14px;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  @media screen and (max-width: 320px) {
    padding: 0px 10px;
  }
`;
const NavLogo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 24px;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: inherit;
`;
const Logo = styled.img`
  height: 45px;
`;
const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 0 6px;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 24px;
  align-items: center;
  padding: 0 6px;
  color: ${({ theme }) => theme.primary};
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Navlink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 1s slide-in;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  &.active {
    color: ${({ theme }) => theme.primary};
    border-bottom: 1.8px solid ${({ theme }) => theme.primary};
  }
`;

const MobileIcon = styled.div`
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const Mobileicons = styled.div`
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 80%;
  padding: 12px 40px 24px 40px;
  position: absolute;
  top: 80px;
  right: 0;
  transition: all 0.6s ease-in-out;
  transition: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;
const TextButton=styled.div`
  text-align:end;
  color:${({theme})=>theme.secondary};
  cursor:pointer;
  font-size:16px;
  transition:all 0.3s ease;
  font-weight:600;
  &:hover{
    color:${({theme})=>theme.primary};
  }
`;


const Navbar = ({ openAuth, setOpenAuth }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  console.log("CurrentUser : ",currentUser);


  return (
    <Nav>
      <NavbarContainer>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>

        <NavLogo>
          <Logo src={LogoImg} />
        </NavLogo>

        <NavItems>
          <Navlink to="/">Home</Navlink>
          <Navlink to="/Shop">Shop</Navlink>
          <Navlink to="/New_Arrivals">New Arrivals</Navlink>
          <Navlink to="/Orders">Orders</Navlink>
          <Navlink to="/Contact">Contact</Navlink>
        </NavItems>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <Navlink to="/" onClick={() => setIsOpen(!isOpen)}>
              Home
            </Navlink>
            <Navlink onClick={() => setIsOpen(!isOpen)} to="/Shop">
              Shop
            </Navlink>
            <Navlink onClick={() => setIsOpen(!isOpen)} to="/New_Arrivals">
              New Arrivals
            </Navlink>
            <Navlink onClick={() => setIsOpen(!isOpen)} to="/Orders">
              Orders
            </Navlink>
            <Navlink onClick={() => setIsOpen(!isOpen)} to="/Contact">
              Contact
            </Navlink>
            {currentUser ? (
              <Button text="Logout"  onClick={() => dispatch(logout())} />
            ) : (
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  gap: "12px",
                }}
              >
                <Button
                  text="Sign Up"
                  outlined
                  
                  onClick={() => setOpenAuth(!openAuth)}
                />
                <Button
                  text="Sign In"
                  
                  onClick={() => setOpenAuth(!openAuth)}
                />
              </div>
            )}
          </MobileMenu>
        )}

        <Mobileicons>
          <Navlink to="/search">
            <SearchRounded sx={{ color: "inherit", fontSize: "30px" }} />
          </Navlink>

          {currentUser ? (
            <>
              <Navlink to="/favorite">
                <FavoriteBorder sx={{ color: "inherit", fontSize: "28px" }} />
              </Navlink>
              <Navlink to="/cart">
                <ShoppingCartOutlined
                  sx={{ color: "inherit", fontSize: "28px" }}
                />
              </Navlink>
              <Avatar
                src={currentUser?.img}
                sx={{
                  color: "inherit",
                  fontSize: "28px",
                }}
              >
                {currentUser?.name[0]}
              </Avatar>
            </>
          ) : (
            <Button
              text="SignIn"
              onClick={() => setOpenAuth(!openAuth)}
            />
          )}
        </Mobileicons>

        <ButtonContainer>
          <Navlink to="/search">
            <SearchRounded sx={{ color: "inherit", fontSize: "30px" }} />
          </Navlink>

          {currentUser ? (
            <>
              <Navlink to="/favorite">
                <FavoriteBorder sx={{ color: "inherit", fontSize: "28px" }} />
              </Navlink>
              <Navlink to="/cart">
                <ShoppingCartOutlined
                  sx={{ color: "inherit", fontSize: "28px" }}
                />
              </Navlink>
              <Avatar
                src={currentUser?.img}
                sx={{
                  color: "inherit",
                  fontSize: "28px",
                }}
              >
                {currentUser?.name[0]}
              </Avatar>
              <TextButton onClick={() => dispatch(logout())}>Logout</TextButton>
            </>
          ) : (
            <Button
              text="SignIn"
              
              onClick={() => setOpenAuth(!openAuth)}
            />
          )}
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};
export default Navbar;