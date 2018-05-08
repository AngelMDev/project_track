import React, { Component } from 'react';
const electron = window.require('electron')
const dialog = electron.dialog
const globalShortcut = electron.globalShortcut

class Home extends Component{
  render(){
    return(
      <Timer start={Date.now()}/>
    );
  }
}

class Timer extends Component{

  constructor(props){
    super(props);
    this.state={elapsed: 0};
  }

  componentDidMount(){
      
  }

  start(){
    this.timerInterval=setInterval(this.tick,1000);
  }
  
  tick(){
    this.setState({elapsed: (new Date().getDate() - this.props.start)});
  }

  stop(){
    clearInterval(this.timerInterval);
  }

  render(){
    var elapsedFormatted=Math.round(this.state.elapsed/1000)
    return(<div><h1>{elapsedFormatted}</h1></div>);
  }
}

export default Home;
