import React from 'react';
import Chocolate from '../containers/Chocolate';
import importedChocolates from '../chocolates.json';

import './ChocolateList.css';

const ChocolateList = () => (
  <section className="ChocolateList" >
    <div className="list-content">
      <h3>Pick a chocolate:</h3>
      <ul>
        {
          importedChocolates.map( obj => 
            <Chocolate key={obj.id} name={obj.name} color={obj.color}/>
          )
        }
      </ul>
    </div>
  </section>
  
);

export default ChocolateList;