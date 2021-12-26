import React from 'react'
import {Link} from 'react-router-dom'

export default function Download() {
    return (
        <div>
            <Link to='/flowspace_setup.exe' target='_blank' download>DOWNLOAD</Link>
        </div>
    )
}
