import React, { Fragment } from 'react'
import logo from "../../logo.png"
import { Link } from "react-router-dom"
import { isauthenticate,signout } from '../../user_form/insert'
import './Header.css'



const Header = () => {
    return (
        <>
        <div>
        <nav className="header">

            <img src={logo} alt="logo" />

            <div>
                <Link to="/upcoming" >Upcoming</Link>
                <Link to="/now_playing" >Now playing</Link>
                <Link to="/recent" >Popular</Link>
                <Link to="/mylist" >Top Rated</Link> 
                {isauthenticate() && (
                        <Fragment>
                            <form class="d-flex">
                                <span onClick={() => signout(() => {
                                    history.push('/');
                                })}>
                                    <button class="btn btn-danger rounded-pill ml-sm-0 " style={{ cursor: 'pointer' }} type="submit">SignOut</button></span>
                            </form>
                        </Fragment>
                    )}
                
            </div>
                   
                    {!isauthenticate() && (
                        <Fragment>
                    <Link to="/login"><button><div className='logiin'>Login</div></button></Link>
                    </Fragment>
                    )}
                    {isauthenticate() && (
                    <button><div className='logiin'>{JSON.parse(localStorage.getItem("jwt")).user.username}</div></button>
                    )}
                   
            
        </nav>
        
        </div>
        </>
    )
}

export default Header;