import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import {auth} from '../firebase.js'

function SignIn() {

    function signInWithGoogle() {
        const provider =  new GoogleAuthProvider()
        signInWithPopup(auth, provider)
    }

    return (
        <div>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    )
}

export default SignIn
