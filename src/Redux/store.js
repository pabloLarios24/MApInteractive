import { createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import getRootReducer from './Reducer/index'

export default function getStore( navReducer ){
    const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
    let initialState = {region:"Hola"}
    return store = createStoreWithMiddleware(getRootReducer( navReducer ), initialState)
}