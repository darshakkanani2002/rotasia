import React from 'react'
import AdminSidebar from './adminComponents/AdminSidebar'
import { Routes, Route } from 'react-router-dom'
import AdminEvent from './adminComponents/AdminEvent'

export default function AdminDashboard() {
    return (
        <div className='container-fluid'>
            <div className='row px-0'>
                <div className='ps-0'>
                    <AdminSidebar />
                </div>
                <div className='main-container pe-0'>
                    <Routes>
                        <Route path='/admin/dashboard' element={<AdminEvent />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}