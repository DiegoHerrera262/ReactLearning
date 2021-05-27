import React from 'react';
import NonControlledInput from './components/NonControlledInput';

class App extends React.Component {
  // Callback from custom event handler
  send = (childData) => {
    const {name, email} = childData;
    console.log('Retrieve info from parent')
    console.log(name)
    console.log(email)
  }

  render () {
    return (
      <div>
        <div>
          <h1>Ref form</h1>
        </div>
        <div>
          <NonControlledInput onEnteredData={this.send}/>
        </div>
      </div>
    )
  }
}

export default App;
