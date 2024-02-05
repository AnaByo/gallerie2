import React from 'react';
import Header from './components/header/index.js';
import Home from './pages/home/index.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      {/* <header className="App-header">
        <></>
      </header> */}
    </div>
  );
}

export default App;
