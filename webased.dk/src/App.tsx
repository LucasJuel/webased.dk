import './App.css';
import { Typography, useTheme } from '@mui/material';
import { Header } from './Components/Header';
import MainBody from './Components/MainBody';
import Body from './Components/Body';
import SizedBox from './Components/SizedBox';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePage from './Components/ProfilePage';


function App() {

  const theme = useTheme();

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <div>
            <MainBody />
            <SizedBox />
          </div>
        }/>
        <Route path="/profil" element={
          <div>
            <ProfilePage/>
          </div>
        }/>

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
