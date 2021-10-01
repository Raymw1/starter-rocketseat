import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'; // Navigation style stack

import Main from './pages/main';

const NavigationStack = createStackNavigator({
  Main,
});

const Routes = createAppContainer(NavigationStack);

export default Routes;
