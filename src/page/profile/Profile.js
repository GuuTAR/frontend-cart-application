import { Text, View } from "react-native"
import React from "react"
import { Button } from "react-native-elements"
import { observer } from "mobx-react-lite"
import { useStore } from '../../global_store/useStore'
import { logoutButton, profilePage } from "./style"
import { isSomeInvalidValue } from "../../function/global"

const ProfilePage = observer(() => {

    const { displayName, email } = useStore().authStore

    const handleLogout = () => authStore.logout()

    return (
        <View style={profilePage}>
            <Text>{`Your logged in as ${!isSomeInvalidValue(authStore.displayName) ? 
                displayName : 
                email.split("@")[0]}`
            }
            </Text>
            <Button title="Logout" buttonStyle={logoutButton} onPress={handleLogout} />
        </View>
    )
})

export default ProfilePage