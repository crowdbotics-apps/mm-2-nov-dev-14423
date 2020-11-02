import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen213695Navigator from '../features/BlankScreen213695/navigator';
import BlankScreen113691Navigator from '../features/BlankScreen113691/navigator';
import BlankScreen013679Navigator from '../features/BlankScreen013679/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen213695: { screen: BlankScreen213695Navigator },
BlankScreen113691: { screen: BlankScreen113691Navigator },
BlankScreen013679: { screen: BlankScreen013679Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
