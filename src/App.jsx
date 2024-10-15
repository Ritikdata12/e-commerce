import { useState , createContext, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Login from './components/Login';
import Register from './components/Register';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      console.log('User from localStorage:', parsedUser);
      setUser(parsedUser);
    } else {
      console.log('No user found in localStorage');
    }
  }, []);
  
  console.log(user.email);

  return (
    <>
     <UserContext.Provider value={{ user, setUser}}>
      <Router>
        <Routes>
          <Route path = "/" element={<Home/>}/>
          <Route path='/slider' element={<Slider/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
        </Routes>
      </Router>
      </UserContext.Provider>

    </>
  )
}

export default App
