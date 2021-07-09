import auth from '@react-native-firebase/auth'
import { notification } from '../component/Notification/Notification';

export const firebaseLogin = (email, password) => {
    return auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => notification('Login success!', 'Enjoy your shopping', 'success'))
        .catch(error => {
            console.log(error);
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


export const firebaseRegister = (email, password) => {
    auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            console.log('User account created & signed in!');
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }

            if (error.code === 'auth/email-already-in-use')
                console.log('That email address is invalid!');

            
            console.error(error);
        });
}

export const firebaseLogout = () => {
    auth()
        .signOut()
        .then(() => console.log('User signed out!'));
}