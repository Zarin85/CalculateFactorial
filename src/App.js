import React from 'react';
import './App.css';
import Factorial from './Component/Factorial'

class App extends React.Component{
  render(){
    return(
      <div className = "App">
        <Factorial/>
      </div>
    );
  }
}

export default App;
