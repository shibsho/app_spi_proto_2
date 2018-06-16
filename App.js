import React from 'react';
import { createStackNavigator, } from 'react-navigation';

import TopScreen from './src/screens/TopScreen';
import PatternsScreen from './src/screens/PatternsScreen';
import QuestionScreen from './src/screens/QuestionScreen';


const App = createStackNavigator({
  Top: { screen: TopScreen },
  Patterns: { screen: PatternsScreen },
  Question: { screen: QuestionScreen },
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
