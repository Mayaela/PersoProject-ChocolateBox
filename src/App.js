import React from 'react';
import ChocolateBox from './containers/ChocolateBox';
import ChocolateList from './components/ChocolateList';

import './App.css';


const App = () => (
      <div className="App">
        <ChocolateList />
        <ChocolateBox />
       
      </div>
  );
 
export default App;
