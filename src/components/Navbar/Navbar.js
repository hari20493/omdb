import React from 'react'
import './navbar.css'
<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300&display=swap');
</style>
export default function Navbar() {
    return (
        <div className="nav">
            <div className="logo">
                Movies
            </div>
            <div className="menu">
                <div className="menu-items">
                    <a href="#">
                        <div>
                            Account
                        </div>
                    </a>
                    <a href="#">
                        <div>
                            Favorites
                        </div>
                    </a>
                    <a href="#">
                        <div>
                            Logout
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
