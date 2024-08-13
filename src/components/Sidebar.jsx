import React from 'react'

export default function Sidebar() {
    return (
        <div>
            <div className='sidebar'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/component1">Component 1</Link></li>
                    <li><Link to="/component2">Component 2</Link></li>
                </ul>
            </div>
        </div>
    )
}
