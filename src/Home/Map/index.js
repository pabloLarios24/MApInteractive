import React from 'react'
import {View,Text} from 'react-native'
import MapView,{Marker} from 'react-native-maps'
import { Provider , connect } from 'react-redux'
import {getCurrentLocation} from '../../Redux/Actions/action'

class Map extends React.Component{

    componentDidMount(){
        this.init()
    }
    async init (){
         await this.props.getCurrentLocation()
         console.log(this.props)
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
    }

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

const mapStateToProps = (state) => 
{
    return{
        region: state.region,
    
    }
}

const mapActionCreators = {
	getCurrentLocation,
};


export default connect(mapStateToProps, mapActionCreators)(Map)