import React, { createRef } from 'react';
import './App.css';

import Stage from './components/stage/stage';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {boxWidth: 0, currentStage: 0, scrollContainer: undefined, data: null};
    this.viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    this.scrollSpeed = 40;
    this.boxRef = createRef();
    
    this.scrollBehavior = this.scrollBehavior.bind(this);
  }
  
  render() {
    const isLoading = this.state.data === null;
    const stage = isLoading ? 'Loading...' : this.state.data.stages[this.state.currentStage];
    return (
      <div style={{height: 'inherit'}}>
        <div ref={this.boxRef} id="box" className='box' style={{width: `${this.state.boxWidth}px`}}></div>
        <div className='container mandatory-scroll-snapping'>
          {!isLoading && <Stage stage={stage} boxRef={this.boxRef}/>}
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.getData().then(json => {
      this.setState({data: json});
    });
    this.setState({scrollContainer: document.querySelector('.container')}, () => {
      this.state.scrollContainer.addEventListener('wheel', this.scrollBehavior);
    });
  }
    
  scrollBehavior(event) {
    if(event.deltaY < 0) {
      // scroll up
      if(this.state.boxWidth <= 0) {
        if(this.state.currentStage > 0) {
          this.setState((prevState) => {return { currentStage: prevState.currentStage - 1}});
        }
        this.setState({boxWidth: 0});
        return;
      }

      this.setState((prevState) => {
        return {boxWidth: prevState.boxWidth - this.scrollSpeed};
      });
    } else {
      // scroll down
      if(this.state.boxWidth >= this.viewportWidth) {
        if(this.state.currentStage < this.state.data.stages.length - 1) {
          this.setState((prevState) => {
            return {
              currentStage: prevState.currentStage + 1,
              boxWidth: 0
            }
          });
        }
        return;
      }

      this.setState((prevState) => {
        return {boxWidth: prevState.boxWidth + this.scrollSpeed};
      });
    }
  }  

  async getData() {
    const response = await fetch('/data.json', {
      headers: {
        'content-type': 'application/json',
        'Attept': 'application/json'
      }
    });

    if (!response.ok) {
      console.error(`Response status: ${response.status}`);
      console.error(`Response text: ${await response.text()}`);
      return;
    }
    const json = await response.json();
    return json;
  }
  
}

export default App;
