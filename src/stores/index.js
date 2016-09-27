import {createStore} from 'redux';
import addNewItem from '../reducers';

export const store = createStore(addNewItem);
