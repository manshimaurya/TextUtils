import React,{ useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
//import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');//darkmode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }



  const toggleMode=()=>{
    if(mode=== 'light'){
      setMode('dark')
      document.body.style.backgroundColor='#303d76'//dark
      showAlert("  Dark mode is enabled !","success")
      document.title="Textutils - Dark Mode";
      /*  setInterval(()=>{
          document.title="textutils is amazing mode";
        },2000);
        setInterval(()=>{
          document.title="textutils is amazing mode";
        },1000);*/
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='#ebbebe'//light
      showAlert("  Light mode is enabled !","success")
      document.title="Textutils - Light Mode";
    }
  };
  return (
    <>
   {/*<BrowserRouter>*/}
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3" mode={mode}>
    <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
      {/*<Routes>
          <Route exact path="/about" element={<About/>}/>
      </Routes>
      <Routes>
            <Route exact
              path="/"
              element={
                */}
                
              {/*}</div>
            />
            </Routes>*/}
          
      </div>
   {/*</BrowserRouter>  */}
    </>
  );
}

export default App;


