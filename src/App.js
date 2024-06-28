import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './user/pages/Home'
import About from './user/pages/About'
import Contact from './user/pages/Contact'
import { Headnavbar } from './atoms/Atoms'
import Manage from './admin/pages/Manage'
import Dashboard from './admin/pages/Dashboard'

const App = () => {

    let role = "admin"
    if (role == "user") {
        return (
            <>
                <Headnavbar element={role} />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </>
        )
    } else if (role == "admin") {
        return (
            <>
                <Headnavbar element={role} />
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/manage' element={<Manage />} />

                </Routes>

            </>
        )
    }

}

export default App;