import React from 'react';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'init',
      isLoaded: false,
      weatherData: null
    }
  }

  render() {
    return (
      <div className='App'>
        <div className='container'>

        </div>
      </div>
    );
  }
}

export default App;