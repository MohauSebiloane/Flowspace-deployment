import React from 'react'
import { Link } from 'react-router-dom'
import cloud from "./../resources/wave.png"
import "./landing.css"
import SvgGuy from './svgGuy'

export default function Landing() {
    return (
        <div id="landing">
                <div id="body">
                    <div id="svgGuy"><SvgGuy/></div>
                    <div id="textColumn">
                        <p id="homeLine">Get The Tool That Makes Productivity Personal</p>
                        <p id="info">When its about more than just surving but thriving you need a productivity tool that brings you closer to your <span id="colorWhy">WHY</span>. </p>
                        <Link id="getStarted" to='/download'>GET STARTED</ Link>
                        <img src={cloud} alt="cloud" id="cloud"/>
                    </div>
                </div>
            </div>

    )
}
