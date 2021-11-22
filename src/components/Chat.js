import React, {useState, useEffect} from 'react'
import { db } from '../firebase'
import SignOut from './SignOut'
import { query, orderBy, limit, collection, onSnapshot } from "firebase/firestore"; 

function Chat() {
    const [messages, setMessages] = useState([])
    useEffect(() => {
        const q = query( collection(db, 'messages'), orderBy('createdAt'), limit(50)) 
        onSnapshot(q, (snapshot) => {
            setMessages(snapshot.docs.map(doc => doc.data))
        })
    }, [])
    return (
        <div>
            <SignOut />
            {messages.map(({id, text, photoURL}) => (
                <div key={id}>
                    <img src={photoURL} alt=''/>
                    <p>{text}</p>
                </div>
            ))}
        </div>
    )
}

export default Chat
