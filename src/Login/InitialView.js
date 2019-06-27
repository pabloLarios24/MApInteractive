import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'

export default class InitialView extends React.Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Login</Text>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Map")}>
                    <Text>Mapa</Text>
                </TouchableOpacity>
            </View>
        )
    }
}