import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from '@mui/material';

import axios from "axios";
import { useEffect, useState } from "react";
import { stringify } from 'querystring';



async function getSongs() {
  // try {
  const url = "https://dictionaryapi.com/api/v3/references/sd4/json/test?key=b61190ae-fde0-4a5d-9a77-b4d9bd65d8b7";
  const options = {
    method: 'GET',
  }
  await fetch(url, options)
    .then(response => response.json())
    .then(result => JSON.stringify(result))
    .then(result => {});
}

function App() {
    console.log(getSongs());

  return (
    
    <div className="App">
      <h1>Songs</h1>
      <ul>
      </ul>
    </div>
  );
}

export default App;
