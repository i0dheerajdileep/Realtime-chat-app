import React from 'react'
import {auth} from '../firebase/config'
import {signOut} from 'firebase/auth'
import {Button} from '@mui/material'
function Signout() {
    const handlesignOut=()=>{
        signOut(auth)
        .then(() => {
           console.log('signout successfull')
        })
        .catch((error) => {
            console.log('error')
        })
    }
  return (
    <div>
      <Button onClick={handlesignOut}>Sign out</Button>
    </div>
  )
}

export default Signout
