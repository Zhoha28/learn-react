import {createStore} from 'redux';
import { Reducer, initialState } from './reducer';

//required to configure the store 
export const ConfigureStore = () => {
  // create the store
  //takes two parameters i.e. reducer and initial state
  const store = createStore(
    Reducer,
    initialState
  );
  return store;
}
