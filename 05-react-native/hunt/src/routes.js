import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'; // Navigation style stack

import Main from './pages/main';
import Product from './pages/product';

const NavigationStack = createStackNavigator({
  Main,
  Product,
});

const Routes = createAppContainer(NavigationStack);

export default Routes;
