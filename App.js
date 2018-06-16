import React from 'react';
import { createStackNavigator, } from 'react-navigation';

import TopScreen from './src/screens/TopScreen';


const App = createStackNavigator({
  Top: { screen: TopScreen },
},
{
  navigationOptions: {
    headerTitle: 'SPI App',
    headerStyle: { backgroundColor: '#265366' },
    headerTitleStyle: { color: '#FFF' },
    headerTintColor: '#AAA',
    headerBackTitle: null,
  }
},
{
  initialRouteName: 'Top',
}
);

export default App
