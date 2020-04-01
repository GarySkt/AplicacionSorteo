import React, { useRef, useEffect, useState } from 'react';
import { AppLoading } from "expo";
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'

import { Provider } from 'react-redux'
import { DashboardStackNavigator } from './src/components';
import { PremioStackNavigator } from './src/components/premio/premio';
import { PuntoParticipacionStackNavigator } from './src/components/puntoparticipacion/puntoparticipacion';
import { store } from './src/store';
import { GenerarToken } from './src/services/api';

export default function App(){
  const [load, setLoad] = useState(false)
  const didRun = useRef(false);
  useEffect(() => {
    if(!didRun.current){
      Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      });
      setLoad(true);
      GenerarToken();
      didRun.current = true;
    }
  }, [])
  if (!load) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <AppContainer/>
    </Provider>)
}

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: DashboardStackNavigator,
  Premios: PremioStackNavigator,
  "Puntos de Participación": PuntoParticipacionStackNavigator
})

const AppSwitcherNavigator = createSwitchNavigator({
  Home: {
    screen: AppDrawerNavigator
  }
})

const AppContainer = createAppContainer(AppSwitcherNavigator);