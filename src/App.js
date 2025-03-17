import './App.css';
import React, { useState } from 'react'
import NavBar from './Navbar';
import News from './News';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 6;
  const apiKey = "58ad6238d0ea4569b0375598c5ee4b91";
  const [progress, setProgress] = useState(0)
 

  // const [mode, setMode] = useState('light');


  // const [change,setChange] = useState(null);
  // const showAlert =(message,type) =>{
  //   setChange({
  //       msg: message,
  //       type: type
  //     })
  //     setTimeout(() => {
  //       setChange(null);
  //     }, 2000);
  // }

      // const toggleMode =() =>{
        // if(mode === 'light'){
        //   setMode('dark');
        // }else{
        //   setMode('light');
        // }

      //   console.log("Happy Coding!!");
      // }

     // toggleMode();

    return (
      <div>
        <Router>
          <NavBar /> 
          <LoadingBar height={3} color='#f11946' progress={progress} />
          <Switch>
              <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
              <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/></Route> 
              <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route> 
              <Route exact path="/general"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
              <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/></Route> 
              <Route exact path="/sciences"><News setProgress={setProgress} apiKey={apiKey} key="sciences" pageSize={pageSize} country="in" category="sciences"/></Route> 
              <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/></Route> 
              <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/></Route> 
          </Switch>
        </Router>
      </div>
    )
 
}

export default App;








  // if(mode === 'light'){
          //   setMode ('dark');
          //   document.body.style.backgroundColor = '#042743';
          //   showAlert("Dark mode has been enabled..");
            // document.title = 'TextUtils -Dark Mode';
          // }else{
          //   setMode ('light');
          //   document.body.style.backgroundColor = '#DCDCDC';
          //   showAlert("Light mode has been enabled...");
           // document.title = 'TextUtils -Light Mode';
         // }