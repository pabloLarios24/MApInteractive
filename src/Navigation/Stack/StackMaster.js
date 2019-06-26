import {createAppContainer, createStackNavigator } from 'react-navigation';
import InitialScreen from '../../Login/InitialView'
const DontHaveID = createStackNavigator(
    {
      Initial: {screen: InitialScreen,
          navigationOptions:() =>({
              header: null,
          })},
    }
)
export const NotIdStack = createAppContainer(DontHaveID)