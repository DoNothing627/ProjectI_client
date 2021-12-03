import { useEffect, useState } from 'react'
import './App.css'
import Login from './components/User/Login'
import Cart from './components/store/Cart'
import Navigation from './components/Page/Navigation'
import Footer from './components/Page/Footer'
import Pages from './components/Link/Pages'
import Profile from './components/User/Profile'
import Blank from './components/UI/Blank'
import axios from 'axios'

function App() {
  const [login, setLogin] = useState(0);
  const [cart, setCart] = useState(0);
  const [profile, setProfile] = useState({ "userName": "" })

  const onProfileClickHandle = async props => {
    const config = {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem('jwt')
      },
      body: {
        userName: localStorage.getItem('email')
      }
    }
    console.log(config)

    try {
      //const res = await axios.post('http://127.0.0.1:8080/user/get', config)
      const res = await axios.get("http://127.0.0.1:8080/user/get/" + localStorage.getItem('email'), config)
      setProfile(res.data)
    }
    catch {
      setLogin(1);
    }


  }

  const onProfileClickHandleOff = props => {
    setLogin(0);
  }

  const onCartClickHandle = props => {
    setCart(1);
  }

  const onCartClickHandleOff = props => {
    setCart(0);
  }

  const onTurnOffProfile = props => {
    setProfile({ "userName": "" })
  }

  // useEffect(() => {
  //   fetch('http://127.0.0.1:8080/user/get')
  //     .then((response) => {
  //       return response.json()
  //     }).then((data) => {
  //       console.log(data[0].userName)
  //     })
  // }, [])

  console.log(1)

  return <>
    <Navigation onProfileClickHandle={onProfileClickHandle} onCartClickHandle={onCartClickHandle} />
    {profile.userName != "" && <Profile user={profile} onTurnOffProfile={onTurnOffProfile} />}
    {login != 0 && <Login onProfileClickHandleOff={onProfileClickHandleOff} />}
    {cart != 0 && <Cart onCartClickHandleOff={onCartClickHandleOff} />}
    <Pages />
    <Footer />
  </>
}

export default App;
