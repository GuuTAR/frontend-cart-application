import { Text, Modal } from "react-native"
import React, { useState } from "react"
import { backText, buttonWrapper, saveButton } from "./style"
import Row from "../../component/Row"
import { Button } from "react-native-elements"
import { downloadFileToGallary } from "../../function/global"
import ImageViewer from 'react-native-image-zoom-viewer';

const PreviewImg = ({ navigation, route }) => {

    const [index, setIndex] = useState(0)

    const { name, url } = route.params

    const handleDownload = () => downloadFileToGallary(`${name}-${index}`, images[index].url)
    const handleGoBack = () => navigation.goBack()

    const images = [
        { url: url },
        { url: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=460" }
    ]

    return (
        <Modal visible={true} transparent={true}>
            <ImageViewer imageUrls={images} onChange={(idx) => setIndex(idx)} />
            <Row containerStyle={buttonWrapper}>
                <Text onPress={handleGoBack} style={backText}>{"< back"}</Text>
                <Button title="Save" onPress={handleDownload} buttonStyle={saveButton} />
            </Row>
        </Modal>
    )
}

export default PreviewImg