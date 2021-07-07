import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import RootRouter from './src/route/RootRouter';
import auth from '@react-native-firebase/auth'
import { useStore } from './src/global_store/useStore';
import { isSomeInvalidValue } from './src/function/global';
import { observer } from "mobx-react-lite";

const App = observer(() => {

  const authStore = useStore().authStore

  const [initializing, setInitializing] = useState(true)

  const onAuthStateChanged = (user) => {
    if (!isSomeInvalidValue(user)) authStore.setUserData(user.email, user.displayName)
    if (initializing) setInitializing(false)
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber
  }, [])

  if (initializing) return null
  return (
    <NavigationContainer>
      <RootRouter />
    </NavigationContainer>
  )
})

export default App;
