import logo from './logo.svg';
import './App.css';
import React from 'react';
import Rotation from 'react-rotation'

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <Square className="square "/>
        <Square className="square "/>
        <Square className="square "/>
        <Square className="square "/>
        <Square className="square "/>
        <Square className="square "/>
        <Square className="square "/>
        <Square className="square "/>
        <Square className="square "/>
        {/* <Triangle className="triangle"/> */}
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


class Triangle extends React.Component{
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
