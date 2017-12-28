import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Blog />
      </div>
    );
  }
}

export default App;


ReactDOM.render(<App />, document.getElementById('root'));