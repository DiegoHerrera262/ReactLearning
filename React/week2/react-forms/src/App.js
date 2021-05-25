import React from 'react';
import TestComponent from './components/TestComponent';

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div>
          <TestComponent name='Carlitos'>
            <p>I'm Colombian and love football</p>
          </TestComponent>
        </div>
        <div>
          <TestComponent name='Pepe'>
            <p>I'm French and love tennis</p>
          </TestComponent>
        </div>
        <div>
          <TestComponent name='Lalo'>
            <p>I'm Peruvian and love basketball</p>
          </TestComponent>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
