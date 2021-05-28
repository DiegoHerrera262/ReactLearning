import React from 'react';
import NonControlledInput from './components/NonControlledInput';
import NonControlledForm from './components/NonControlledForm';
import ControlledForm from './components/ControlledForm';

class App extends React.Component {
  // Store data from 
  // controlled form
  state = {
    controlledFromData : {
      phoneNumber : '',
      username : ''
    }
  }

  // Callback from custom event handler
  send = (childData) => {
    const {name, email} = childData;
    console.log('Retrieve info from parent')
    console.log(name)
    console.log(email)
  }

  // Callback for controlled event
  handleChange = (name, text) => {
    this.setState((prevState) => ({
      ...prevState,
      controlledFromData : {
        ...prevState.controlledFromData,
        [name] : text
      }
    }));
  }

  render () {
    const {controlledFromData : {phoneNumber, username}} = this.state
    return (
      <div>
        <div>
          <h1>Ref form</h1>
        </div>
        <div>
          <NonControlledInput onEnteredData={this.send}/>
        </div>
        <div>
          <h1>Pure React form</h1>
        </div>
        <div>
          <NonControlledForm onEnteredData={this.send}/>
        </div>
        <div>
          <h1>Controlled form</h1>
        </div>
        <div>
          <ControlledForm 
          matchRegExp={/[A-Z\sa-z]/g}
          maxLength={10}
          placeholder='Phone number'
          errorMessage={'Insert valid phone'}
          onChange={this.handleChange}
          name='phoneNumber'
          />
        </div>
        <div>
          <ControlledForm 
          matchRegExp={/[0-9\s]/g}
          placeholder='Username'
          errorMessage={'Insert only one name'}
          onChange={this.handleChange}
          name='username'
          />
        </div>
        <div>
          <div>
            Phone number : {phoneNumber}
          </div>
          <div>
            Username : {username}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
