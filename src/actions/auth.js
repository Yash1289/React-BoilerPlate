import {googleAuthProvider , firebase} from "../firebase/firebase"

export const startLogin = ()=> {
    return(dispatch) => {
        return firebase.auth().signInWithPopup(googleAuthProvider)
    };
};

export const doLogout = () => {
    return (dispatch) => {
        return firebase.auth().signOut()
    }
}

export const login = ( uid ) => ({
    type : "Login",
    uid
})

export const logout = () => ({
    type : "Logout"
})