import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addChocolate } from '../actions'

import './Chocolate.css';

const Chocolate = (props) => (
  <li className='Chocolate'>
    {props.name}
    <button
      onClick={ () => props.addChocolate(props.name)} className='choco-btn'
    >+</button>
  </li>

);

function mdtp(dispatch) {
  return bindActionCreators({addChocolate}, dispatch);
};



export default connect(null,mdtp)(Chocolate);