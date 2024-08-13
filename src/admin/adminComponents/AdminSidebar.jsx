import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function AdminSidebar() {
    function CustomNavLink({ to, children }) {
        const location = useLocation();

        return (
            <NavLink to={to} className={`d-block py-2 px-4 ${location.pathname === to ? 'nav-active' : ''}`}>
                {children}
            </NavLink>
        );
    }

    return (
        <div className='sidebar d-flex flex-column justify-content-between position-fixed z-1 bg-white overflow-y-auto vh-100 pt-4'>
            <div>
                <ul className='admin-sidebar-menu nav nav-pills flex-column p-0 m-0'>
                    <li>
                        <CustomNavLink to='/admin/dashboard'>Event</CustomNavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}