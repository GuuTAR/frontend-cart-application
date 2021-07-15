import { View, Image, Text } from "react-native"
import React from "react"
import { backText, buttonWrapper, image, previewImgContainer, saveButton } from "./style"
import Row from "../../component/Row"
import { Button } from "react-native-elements"
import { downloadFileToGallary } from "../../function/global"

const PreviewImg = ({ navigation, route }) => {

    const { name, url } = route.params

    const handleDownload = () => downloadFileToGallary(name, url)
    const handleGoBack = () => navigation.goBack()

    return (
        <View style={previewImgContainer}>
            <Image
                source={{ uri: url }}
                style={image}
            />
            <Row containerStyle={buttonWrapper}>
                <Text onPress={handleGoBack} style={backText}>{"< back"}</Text>
                <Button title="Save" onPress={handleDownload} buttonStyle={saveButton} />
            </Row>
        </View>
    )
}

export default PreviewImg