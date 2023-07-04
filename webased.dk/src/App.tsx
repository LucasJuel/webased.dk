import './App.css';
import { Container, Typography, useTheme } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Header from './Components/Header';
import MainBody from './Components/MainBody';
import Body from './Components/Body';


function App() {

  const theme = useTheme();

  return (
    // <div>
    //   <Header></Header>
    //   <MainBody></MainBody>
    //   <Body></Body>
    // </div>
    <Router>
      <Header></Header>
      <Routes>
        <Route path='/' element={<StandardPage></StandardPage>}/>
        <Route path='./' element={<StandardPage></StandardPage>}/>
        <Route path='./' element={<StandardPage></StandardPage>}/>
      </Routes>
    </Router>
  );
}

const StandardPage = () => {
  return(<div>
    <MainBody></MainBody>
    <Body></Body>
  </div>)
}

export default App;
