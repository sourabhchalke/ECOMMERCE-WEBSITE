import React from "react";
import styled from 'styled-components';
import Modal from '@mui/material/Modal';

const Container = styled.div``;
const Left = styled.div``;
const Right = styled.div``;

const Authentication=({openAuth,setOpenAuth})=> {
  return (
    <Modal open={openAuth} onClose={()=>setOpenAuth(false)}>
      <Container>
        <Left>L</Left>
        <Right>R</Right>
      </Container>
    </Modal>
  );
}

export default Authentication;
