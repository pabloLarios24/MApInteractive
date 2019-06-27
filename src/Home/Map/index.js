import React from 'react'
import {View,Text} from 'react-native'
import MapView,{Marker} from 'react-native-maps';

export default class Map extends React.Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <MapView
                    style={{width:'100%',height:'100%'}}
                    region={{
                        latitude:20.659698,
                        longitude:-103.349609,
                        latitudeDelta:0.0922,
                        longitudeDelta:0.0421
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude:20.659698,
                            longitude:-103.349609,
                            latitudeDelta:0.0922,
                            longitudeDelta:0.0421
                        }}
                        pinColor={'green'}
                    />
                </MapView>
            </View>
        )
    }
}