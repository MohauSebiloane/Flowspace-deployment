import React from 'react'
import './pricing.css'  
import free from './../resources/free.png'
import membership from './../resources/membership.png'

export default function Pricing() {
    return (
        <div id='pricingPage'>
            <p id='PricingLine'>Pricing Details</p>

                <div class='boxes'>
                    <div class='type'> <img src={free} alt='typeImg'/><p>Free</p></div>
                    <div class='conent'>
                        <p>A free account grants you access to exclusive free features. Sign up and start your productivity journey</p>
                    </div>
                </div>


                <div class='boxes'>
                    <div class='type'> <img src={membership} alt='typeImg'/><p>Membership</p></div>
                    <div class='conent'>
                        <p>A membership account unlocks all features and allows you to access your productivity</p>
                            <ul>
                                <li>Create Projects In Your Canvas</li>
                                <li>State Of The Art Vision Borad</li>
                                <li>Corresponsive Note-Taking</li>
                                <li>Detailed Automatic Calendar</li>
                                <li>Share you Projects</li>
                            </ul>
                    </div>  
                </div>


        </div>
    )
}
