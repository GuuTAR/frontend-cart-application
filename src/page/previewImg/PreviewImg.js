import { View, Image } from "react-native"
import React from "react"
import { buttonWrapper, image, previewImgContainer } from "./style"
import Row from "../../component/Row"
import { Button } from "react-native-elements"
import { downloadFileToGallary } from "../../function/global"

const PreviewImg = ({ navigation, route }) => {

    const { name, url } = route.params

    const handleDownload = () => downloadFileToGallary(name, url)


    return (
        <View style={previewImgContainer}>
            <Image
                source={{ uri: url }}
                style={image}
            />
            <Row containerStyle={buttonWrapper}>
                <Button title="Save" onPress={handleDownload} />
            </Row>
        </View>
    )
}

export default PreviewImg