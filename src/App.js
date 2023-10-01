import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {boxWidth: 0, currentStage: 0, square: undefined, scrollContainer: undefined};
    this.viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    this.scrollSpeed = 40;
    
    this.scrollBehavior = this.scrollBehavior.bind(this);
  }
  
  render() {
    return (
      <div>
        <div id="box" className='box' style={{width: `${this.state.boxWidth}px`}}></div>
        <div onWheel={this.scrollBehavior} className='container mandatory-scroll-snapping'>
          <div style={{height:'90vh', width:'100%', backgroundColor: 'red', position:'relative', zIndex:2}}>
  
          </div>
          <div style={{height:'90vh', width:'100%', backgroundColor: 'blue', position:'relative', zIndex:2}}>
  
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({square: document.querySelector('#box')})
    this.setState({scrollContainer: document.querySelector('.container')})
  }
  
  scrollBehavior(event) {
    if(event.deltaY < 0) {
      // scroll up
      if(this.state.boxWidth - this.scrollSpeed < 0) {
        this.setState({boxWidth: 0});
      } else {
        this.setState({boxWidth: this.state.boxWidth - this.scrollSpeed});
      }

      if(this.state.square.getBoundingClientRect().width <= (this.state.currentStage * this.viewportWidth) + 80) {
        this.setState({currentStage: this.state.currentStage - 1}, () => {
          this.scrollTo();
        });
      }
    } else {
      // scroll down
      if(this.state.boxWidth + this.scrollSpeed > this.viewportWidth * this.state.scrollContainer.children.length) {
        this.setState({boxWidth: this.viewportWidth * this.state.scrollContainer.children.length});
      } else {
        this.setState({boxWidth: this.state.boxWidth + this.scrollSpeed});
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
