import React from 'react';
import{createAppContainer} from 'react-navigation';
import{createStackNavigator} from 'react-navigation-stack'
import Search from './src/components/Search';
import NewPlant from './scr/components/NewPlant';

export default createStackNavigator({
  Search,
  NewPlant
});

  // const AppContainer =  createAppContainer(AppNavigator);

  // export default function App() {
  //   return(
  //   <AppContainer/>
  //   );
  // }

