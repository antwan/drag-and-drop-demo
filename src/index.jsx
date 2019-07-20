import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import CardGrid from './cardgrid';


function App() {
  return (
    <div className="App">
      <CardGrid />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
