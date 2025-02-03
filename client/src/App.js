
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
  const [openAuth,setOpenAuth]=useState(false);

  return (
    <ThemeProvider theme={lightTheme} className='App'>
      <BrowserRouter>
        <Navbar setOpenAuth={setOpenAuth}/>
        <Container>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/Shop' exact element={<Shop />} />
            <Route path='/favourite' exact element={<Favourite />} />
            <Route path='/' exact element={<Home />} />
          </Routes>

          {openAuth && <Authentication openAuth={openAuth} setOpenAuth={setOpenAuth}/>}

        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
