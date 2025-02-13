
import './App.css';

import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from './utils/Themes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Shop from './pages/ShopListing';
import Favourite from './pages/Favourite';
import Authentication from './pages/Authentication';

import { useState } from 'react';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

import {useSelector,useDispatch} from 'react-redux';
import ToastMessage from './components/ToastMessage';

const Container = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  flex-direction:colum;
  background:${({ theme }) => theme.bg};
  color:${({ theme }) => theme.text_primary};
  overflow-x=hidden;
  overfloy-y:hidden;
  transition : all 0.2s ease;
`;

function App() {

  const {currentUser} = useSelector((state)=>state.user);
  const {open,message,severity}= useSelector((state)=>state.user);
  const [openAuth,setOpenAuth]=useState(false);

  return (
    <ThemeProvider theme={lightTheme} className='App'>
      <BrowserRouter>
        <Navbar setOpenAuth={setOpenAuth} currentUser={currentUser}/>
        <Container>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/Shop' exact element={<Shop />} />
            <Route path='/favourite' exact element={<Favourite />} />
            <Route path='/cart' exact element={<Cart />} />
            <Route path='/Shop/:id' exact element={<ProductDetails />} />
          </Routes>

          {openAuth && <Authentication openAuth={openAuth} setOpenAuth={setOpenAuth}/>}

            {open &&(
              <ToastMessage open={open} message={message} severity={severity} />
            )}
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
