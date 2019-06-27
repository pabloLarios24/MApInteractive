import { createStore } from 'redux'
import getRootReducer from './Reducer/index'

export default function getStore( navReducer ){
    return store = createStore(getRootReducer( navReducer ))
}