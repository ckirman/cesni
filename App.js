import 'react-native-gesture-handler';
import {createAppContainer}from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen';
import CartScreen from './src/screens/CartScreen';
import AccountScreen from './src/screens/AccountScreen';

const navigator=createStackNavigator(
  {
    home:HomeScreen,
    cart:CartScreen,
    account:AccountScreen
  },
  {
    initialRouteName:'account',
    defaultNavigationOptions:{
      title:'Çeşni'
    }
  }

);

export default createAppContainer(navigator);