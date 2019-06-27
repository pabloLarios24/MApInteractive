import InitialScreen from '../../Login/InitialView'
import Map from '../../Home/Map/index'
import Model from '../../Model/index'
const Routes = {
    Initial: {screen: InitialScreen,
        navigationOptions:() =>({
            header: null,
        })},
    Map: {screen: Map,
        navigationOptions:() =>({
            header: null,
        })},
    Model: {screen: Model,
        navigationOptions:() =>({
            header: null,
        })},
}

export default Routes