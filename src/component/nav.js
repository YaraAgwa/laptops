import React from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import { Link } from 'react-router-dom';
import './nav.css'
const Nav = () => {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    return (
        <>
            <div className='header'>
              
                <div className='user-name'>
                    <div className='user_profile'>
                        {
                            
                            isAuthenticated ?
                                <>
                                  
                                    <div className='info'>
                                        <p>{user.email}</p>
                                    </div>
                                </>
                                :
                                <>
                                    
                                    <div className='info'>
                                        <p className='info2'>Please Login</p>
                                    </div>
                                </>
                        }
                    </div>
                    <div className='nav'>
                        <ul>
                            <li><Link to='/' className='link'>Home</Link></li>
                            <li><Link to='/shop' className='link'>Shop</Link></li>
                            <li><Link to='/cart' className='link'>Cart</Link></li>
                        </ul>
                    </div>
                    <div className='login'>
                        {

                            isAuthenticated ?    
                                <div className='user'>
                                   
                                    <div className='btn'>
                                        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                                    </div>
                                </div>
                                :

                                <div className='user'>
                                   
                                    <div className='btn'>
                                        <button onClick={() => loginWithRedirect()}>Login</button>
                                    </div>
                                </div>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav