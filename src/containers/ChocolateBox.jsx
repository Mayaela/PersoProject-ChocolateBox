import React from 'react';
import './ChocolateBox.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { eatChocolates, eatOne } from "../actions";

const ChocolateBox = (props) => {

  const chocolateBoxes = Array.from({length : 12});
  console.log('state choco', props.redChocolateBox);

  return (
    <section className="ChocolateBox" >
      <h2>Compose your Chocolate Box ...</h2>
      <h3>then click on a chocolate to eat it !</h3>
      <button onClick={() => props.eatChocolates()}className="eat-btn">
        EAT THEM ALL !
      </button>
      <div className="div-chocobox">
        { chocolateBoxes.map( (item, index) => 
          <div onClick={() => props.eatOne(index)} key={index} index={index} className={ 
            props.redChocolateBox[index]?
            'box-square ' + props.redChocolateBox[index]
            : 'box-square'} >
          </div>
        )}
      </div>
    </section>
  )
};


function mstp(state) {
  return {
    redChocolateBox : state.redChocolateBox
  };
}

const mdtp = (dispatch) => {
  return bindActionCreators({eatChocolates, eatOne}, dispatch);
}

export default connect(mstp, mdtp)(ChocolateBox);

