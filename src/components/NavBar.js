import React from 'react'
import { IconUserCircle } from '@tabler/icons-react';

const NavBar = () => {

    return (
        <div>
            <div className="navbar bg-base-300 shadow-2xl rounded-2xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            <li><a href='/'>Homepage</a></li>

                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a href='/' className="btn btn-ghost text-4xl">Translator</a>
                </div>
                <div className="navbar-end">
                    <div className="avatar">
                        <div className="btn btn-ghost btn-circle">
                            <IconUserCircle stroke={1} size={50} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NavBar
