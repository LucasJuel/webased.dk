import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Typography, useTheme } from '@mui/material';
import createPalette from '@mui/material/styles/createPalette';
import Header from './Components/Header';


function App() {

  const theme = useTheme();

  return (
    <div>
      <Header></Header>
      <Typography color="primary">Hej</Typography>
    </div>
  );
}

export default App;
