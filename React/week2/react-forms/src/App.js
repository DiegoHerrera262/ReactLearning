import React from 'react';
import TestComponent from './components/TestComponent';

// Array over which several
// test comps will be created
const People = [
  {id:111, name: 'Diego'},
  {id:222, name: 'Daniela'},
  {id:333, name: 'Sara'},
  {id:444, name: 'Carlos'}
]

// Function that maps elements
// of the array to an element
const mapToComp = (person) => {
  return (
    <div key={person.id}>
      <TestComponent name={person.name}>
        <p>I am inside an array</p>
      </TestComponent>
    </div>
  );
}



class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        {People.map(mapToComp)}
      </React.Fragment>
    )
  }
}

export default App;
