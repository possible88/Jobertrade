import {createStore} from 'redux';
import {SetUserRedux} from "./reducers/setUserRedux";

export const configureStore = () => {
  return createStore(SetUserRedux);
}