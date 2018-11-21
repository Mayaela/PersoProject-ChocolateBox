import { combineReducers } from 'redux';

import RedChocolateBox from './redChocolateBox';

const allReducers = combineReducers({
    redChocolateBox : RedChocolateBox
});

export default allReducers;

