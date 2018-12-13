import React, { Component } from 'react';
import animatecss from 'animate.css';
import { Dashboard, Widget } from 'react-realtime-dashboard';
import './App.css';
import ChuckWidget from "./Widget/ChuckWidget";
import EquipeWidget from "./Widget/EquipeWidget";

class App extends Component {
  render() {
    return (
        <Dashboard row={4} col={4} gutter={10} animationClassIn='animated flipInX' animationClassOut='animated flipOutX'>
          <Widget>
            <ChuckWidget/>
          </Widget>
            <Widget size="big">
                <EquipeWidget/>
            </Widget>
        </Dashboard>
    );
  }
}

export default App;