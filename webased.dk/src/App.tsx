import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from '@mui/material';

function App() {
  return (
    <div>
      <Container style={{backgroundColor: "black"}}>
        hej
      </Container>
      <Container style={{backgroundColor: "green"}} className='maxWidthLg'>
        hej
      </Container>
    </div>

  );
}

export default App;
