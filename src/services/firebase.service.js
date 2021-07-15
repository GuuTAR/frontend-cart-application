import auth from '@react-native-firebase/auth'
import { notification } from '../component/Notification/Notification';

export const firebaseLogin = (email, password, setLoggingIn) => {
    return auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => notification('Login success!', 'Enjoy your shopping', 'success'))
        .catch(error => {
            console.log(error)
            setLoggingIn(false)
            switch (error.code) {
                case 'auth/wrong-password':
                    notification('Login fail!', 'Email or password is incorrect', 'error')
                    return;
                case 'auth/too-many-requests':
                    notification('Login fail!', 'Spam login please try again later', 'error')
                    return;
                default:
                    notification('Login fail!', 'Please try again later', 'error')
                    return;
            } 
        });
}


export const firebaseRegister = (email, password, setErrorMsg) => {
    auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => notification('Login success!', 'Enjoy your shopping', 'success'))
        .catch(error => {
            console.log(error)
            switch (error.code) {
                case 'auth/email-already-in-use':
                    setErrorMsg('email', 'That email address is already in use!');
                    return;
                case 'auth/invalid-email':
                    setErrorMsg('email', 'That email address is invalid!')
                    return;
                case 'auth/weak-password' :
                    setErrorMsg('password', 'Password should be at least 6 characters!')
                    return;
                default:
                    setErrorMsg()
                    notification('Register fail!', 'Please try again later', 'error')
                    return;
            } 
        });
}

export const firebaseLogout = () => {
    auth()
        .signOut()
        .then(() => console.log('User signed out!'));
}