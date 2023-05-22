import './App.css';
import { Typography, useTheme } from '@mui/material';
import Header from './Components/Header';
import MainBody from './Components/MainBody';


function App() {

  const theme = useTheme();

  return (
    <div>
      <Header></Header>
      <MainBody></MainBody>
    </div>
  );
}

export default App;
