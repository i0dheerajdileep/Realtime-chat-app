import logo from './logo.svg';
import './App.css';
import Signin from '../src/components/Signin'
import Chat from '../src/components/Chat'
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '../src/firebase/config'
function App() {
  const [user] = useAuthState(auth)
  return (
    <div>
      {user ? <Chat/> : <Signin/>}
    </div>
  );
}

export default App;
