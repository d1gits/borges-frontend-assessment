import React, { Component } from 'react';
import Button from './Button/Button';
import './App.css';

class App extends Component {

  routes = [
    { length: 1, value: 1 },
    { length: 2, value: 2 },
    { length: 3, value: 4 },
    { length: 4, value: 7 },
    { length: 5, value: 10 },
    { length: 6, value: 15 },
    { length: 7, value: 18 },
    { length: 8, value: 21 },
    { length: 9, value: 27 },
  ];

  /* istanbul ignore next */
  constructor(props) {
    super(props);

    this.state = {
      activeRoutes: [],
      score: 0,
    };

    this.boundAdd = this.add.bind(this);
    this.boundAddByKey = this.addByKey.bind(this);
    document.addEventListener('keypress', this.boundAddByKey);
  }

  add(route) {
    const activeRoutes = this.state.activeRoutes.concat([route]);
    const score = activeRoutes
        .map(route => route.value)
        .reduce((acc, curr) => acc + curr);

    this.setState({
      activeRoutes,
      score,
    });
  }

  addByKey({ key }) {
    const route = this.routes.find(route => route.length.toString() === key);
    if (route) this.boundAdd(route);
  }

  render() {
    const buttons = this.routes.map((route) => (
        <Button key={route.length} value={route} onClick={this.boundAdd}>
          {route.length}
        </Button>
    ));

    const activeRoutes = this.state.activeRoutes.map((route, i) => (
        <li key={i}>Length: {route.length}, score: {route.value}</li>
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
          <ul>
            {activeRoutes}
          </ul>
        </div>

    );

  }

}

export default App;
