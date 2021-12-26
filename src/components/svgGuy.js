import React, { Component } from 'react'
import Guy from "./../resources/guy.png"

export default class SvgGuy extends Component {
    render() {
        return (
            <div>
                <img src={Guy} alt="munne" width="100%"/>
            </div>
        )
    }
}
