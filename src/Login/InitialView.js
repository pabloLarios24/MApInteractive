import React from 'react'
import {View,Text} from 'react-native'

export default class InitialView extends React.Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Login</Text>
            </View>
        )
    }
}