import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      <div>
        <Square className="square"/>
        {' '}
        <Square className="square"/>
      </div>
    );
  }
}

class Square extends React.Component{
  constructor(props){
  super(props);
  console.log(props)
}
render(){
  const className = this.props.className
  return(
      <div className={className}>
     </div>
  )
}  
}

export default App;
