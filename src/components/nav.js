import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from "./../resources/logo.png"
import "./nav.css"

export default class Nav extends Component {
    render() {
        return (
            <div id="nav">
                <Link to='/'>
                <div id="logoView">
                            <img src={logo} alt="Logo"/>
                            <p id="title">FLOWSPACE</p>
                </div>
               </Link>


               <div id="pages">
                    <Link to='/features'>
                        <a id='navfeatures'>Features</a>
                    </Link>
                    <Link to='/resources'>
                        <a id='navresources'>Resources</a>
                    </Link>
                    <Link to='/pricing'>
                        <a id='navpricing'>Pricing</a>
                    </Link>
               </div>

               <div id="Getting">
                       <Link to='/login'><a>Sign Up</a></Link> 
                       <Link to='/download'><a>Download</a></Link>
               </div>

            </div>
        )
    }
}
