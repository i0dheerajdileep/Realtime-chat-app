import React, { useState, useEffect } from 'react'
import Signout from '../components/Signout'
import { db } from '../firebase/config'
import { query, collection, orderBy, onSnapshot, limit ,querySnapshot,Timestamp} from "firebase/firestore";
import Sendmessage from '../components/Sendmessage'
function Chat() {
  const [messages, setMessages] = useState([])
  
  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy('createdAt'),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = []
       querySnapshot.forEach((doc)=>{
        messages.push({...doc.data(),id:doc.id})
       })
      setMessages(messages)
      console.log(messages)
    })
    return () => unsubscribe();
  }, [])

  return (
    <div>
      <Signout/>
      {messages.map(({ id, text, photoURL }) => (
        <div key={id}>
          <img src={photoURL} alt="User profile"/>
          <p>{text}</p>
        </div>
      ))}
      <Sendmessage/>
    </div>
  )
}

export default Chat
