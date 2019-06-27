import React from 'react'
import {createAppContainer, createStackNavigator , NavigationHe } from 'react-navigation';
import  Routes  from '../../Redux/Config/routes'
import { Provider , connect } from 'react-redux'
import getStore from './../../Redux/store'

const DontHaveID = createStackNavigator(
    Routes,{
        headerMode:'screen'
    }
)

const navReducer = ( state , action) => {
    const newState = DontHaveID.router.getStateForAction( action , state )
    return newState || state
}

class App extends React.Component{
    render(){
        return(
            <NotIdStack
            />
        )
    }
}

const store = getStore( navReducer )

const AppIndex = connect( state => ({nav: state.nav}))(App)

export default Index = () =>{
    return(
        <Provider
            store={store}
        >
            <AppIndex/>
        </Provider>
    )
}

 const NotIdStack = createAppContainer(DontHaveID)