import React from 'react';
import ReactDOM from 'react-dom';

function SomeComponent(props){
  return(
    <div>
      <div>
        <h1>Hey! Hello, {props.name}</h1>
      </div>
      <div>
        This is simple
      </div>
    </div>
  );
}

function App(){
  return(
    <div>
      <SomeComponent name="Carlos"/>
      <SomeComponent name="David" />
    </div>
  );
}

// Load App to DOM
ReactDOM.render(
  <App />, 
  document.getElementById('root')
);

