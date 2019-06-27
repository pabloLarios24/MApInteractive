import InitialScreen from '../../Login/InitialView'
import Map from '../../Home/Map/index'
const Routes = {
    Initial: {screen: InitialScreen,
        navigationOptions:() =>({
            header: null,
        })},
    Map: {screen: Map,
        navigationOptions:() =>({
            header: null,
        })},
}

export default Routes