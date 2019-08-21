import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css'
import './App.css'

import Navbar from './shared/Navbar.js'
//import Footer from './shared/Footer.js'

// const UserContext = React.createContext()

ReactDOM.render(
    <> 
    {/* <UserContext.Provider value ={"aaa"}> */}
        <Navbar />
        {/* <Footer /> */}
    {/* </UserContext.Provider> */}
    </>, 
document.getElementById('root'));