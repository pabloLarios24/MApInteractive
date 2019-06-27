import { combineReducers } from 'redux'
import { HomeReducer } from '../Actions/action'
import { getLocation } from './region'
export default function getRootReducer(navReducer){
    return combineReducers({
        //nav: navReducer,
        region:getLocation
    })
}