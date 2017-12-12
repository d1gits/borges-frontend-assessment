import React, { Component } from 'react';
import Button from './Button/Button';
import './App.css';

class App extends Component {

  /* istanbul ignore next */
  constructor(props) {
    super(props);
    this.state = {
      score: 0
    };
    this.boundAdd = this.add.bind(this);
  }

  add(value) {
    this.setState({
      score: this.state.score + value
    });
  }

  render() {

    const routes = [
      { length: 1, value: 1 },
      { length: 2, value: 2 },
      { length: 3, value: 4 },
      { length: 4, value: 7 },
      { length: 5, value: 10 },
      { length: 6, value: 15 },
      { length: 7, value: 18 },
      { length: 8, value: 22 }
    ];

    const buttons = routes.map((route) => (
      <Button key={route.length} value={route.value} onClick={this.boundAdd}>
        {route.length}
      </Button>
    ));

    return (

      <div className='app'>
        <div className='header'>
          <h1 className='score'>
            {this.state.score}
          </h1>
        </div>
        <div className='body'>
          {buttons}
        </div>
      </div>

    );

  }

}

export default App;
