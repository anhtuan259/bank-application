import { createStore } from 'redux'
import reducers from '../reducers'

const initialState =
{
    username: "Ohans Emmanuel",
    money: 5000000000
};
export const store = createStore(reducers, initialState);
