import { Text, View } from "react-native"
import React from "react"
import { Button } from "react-native-elements"
import { observer } from "mobx-react-lite"
import { useStore } from '../../global_store/useStore'
import { logoutButton, profilePage } from "./style"

const ProfilePage = observer(() => {

    const authStore = useStore().authStore

    const handleLogout = () => authStore.logout()

    return (
        <View style={profilePage}>
            <Text>{`Your logged in as ${authStore.email}`}</Text>
            <Button title="Logout" buttonStyle={logoutButton} onPress={handleLogout} />
        </View>
    )
})

export default ProfilePage