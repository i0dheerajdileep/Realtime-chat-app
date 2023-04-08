import React, {useState}  from 'react'
import {Input,Button} from '@mui/material'
import {db,auth} from '../firebase/config'
import { collection, addDoc } from 'firebase/firestore'

function Sendmessage() {
    const [msg,setMsg] = useState('')

    async function sendMsg(e) {
        e.preventDefault()
        const {uid,photoURL} = auth.currentUser
        
        await addDoc(collection(db, "products"), {
            text: msg,
            photoURL: photoURL,
            uid: uid
        })
        
        setMsg('')
    }

    return (
        <div>
            <form onSubmit={sendMsg}>
                <Input type='text' placeholder='Message...' value={msg} onChange={(e)=>{setMsg(e.target.value)}}/>
                <Button type='submit'>Send</Button>
            </form>
        </div>
    )
}

export default Sendmessage
