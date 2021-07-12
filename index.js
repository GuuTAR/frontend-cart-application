/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { StoreProvider } from './src/mobx/storeProvider';
import React from 'react'
import RootStore from './src/mobx/store/RootStore';

const Root = () => (
    <StoreProvider value={new RootStore()}>
        <App />
    </StoreProvider>
)

AppRegistry.registerComponent(appName, () => Root);
