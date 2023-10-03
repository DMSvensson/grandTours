import React, { createRef } from 'react';
import './App.css';

import Stage from './components/stage/stage';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {width: 0, currentStage: 0, square: undefined, scrollContainer: undefined};
    this.viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    this.scrollSpeed = 40;
    this.boxRef = createRef();
    
    this.scrollBehavior = this.scrollBehavior.bind(this);
  }
  
  render() {
    return (
      <div style={{height: 'inherit'}}>
        <div ref={this.boxRef} id="box" className='box' style={{width: `${this.state.width}px`}}></div>
        <div className='container mandatory-scroll-snapping'>
          <Stage boxRef={this.boxRef} />
          <div style={{width:'100%', backgroundColor: 'blue', position:'relative', zIndex:2}}>
  
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({square: document.querySelector('#box')});
    this.setState({scrollContainer: document.querySelector('.container')}, () => {
      this.state.scrollContainer.addEventListener('wheel', this.scrollBehavior);
    });
  }
  
  scrollBehavior(event) {
    if(event.deltaY < 0) {
      // scroll up
      if(this.state.width - this.scrollSpeed < 0) {
        this.setState({width: 0}, () => {this.boxWidth = 40});
      } else {
        this.setState((prevState) => {
          return {width: prevState.width - this.scrollSpeed}
        });
      }

      if(this.state.square.getBoundingClientRect().width <= (this.state.currentStage * this.viewportWidth) + 80) {
        this.setState((prevState) => {return { currentStage: prevState.currentStage - 1}}, () => {
          this.scrollTo();
        });
      }
    } else {
      // scroll down
      if(this.state.width + this.scrollSpeed > this.viewportWidth * this.state.scrollContainer.children.length) {
        this.setState({width: this.viewportWidth * this.state.scrollContainer.children.length});
      } else {
        this.setState((prevState) => {
          return {width: prevState.width + this.scrollSpeed}
        });
      }

      if(this.state.square.getBoundingClientRect().width > ((this.state.currentStage + 1) * this.viewportWidth) + 20) {
        this.setState({currentStage: this.state.currentStage + 1}, () => {
          this.scrollTo();
        });
      }
    }
  }  

  scrollTo() {
    window.scrollTo({
      left: this.state.currentStage * this.viewportWidth,
      top: 0,
      behavior: 'smooth'
    });
  }
  
}

export default App;
