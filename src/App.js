
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode,setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message, type)=>{
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#1f1f1f';
      showAlert("Dark mode is enabled.","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled.","success");
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container">
          <Routes>
            <Route exact path='/about' element={<About/>}>
            </Route>
            <Route exact path='/' element={<TextForm heading="Enter your text:" mode={mode} showAlert={showAlert}/>}>
            </Route>
          
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
