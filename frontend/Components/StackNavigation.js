import React from 'react';
import{createAppContainer} from 'react-navigation';
import{createStackNavigator} from 'react-navigation-stack'
import Search from './Search';
import NewPlant from './NewPlant';

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

