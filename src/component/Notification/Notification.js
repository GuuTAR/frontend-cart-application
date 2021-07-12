import { showMessage } from "react-native-flash-message";

const showNoti = (title, desc, type) => showMessage({
    message: title,
    description: desc,
    type: type,
    icon: type
})

export const notification = (title, desc, type) => {
    switch (type) {
        case 'success':
            showNoti(title, desc, type)
            return
        case 'error':
            showNoti(title, desc, 'danger')
            return
        default:
            showNoti(title, desc)
            return
    }
}