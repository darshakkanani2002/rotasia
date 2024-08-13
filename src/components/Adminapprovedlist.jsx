import React, { useState } from 'react'

export default function Adminapprovedlist() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('Selected Status');
    const [selectedRole, setSelectedRole] = useState('Selected Role');

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleStatusChange = (event) => {
        setSelectedStatus(event.target.value);
    };

    const handleRoleChange = (event) => {
        setSelectedRole(event.target.value);
    };

    const tableData = [
        { distNo: '1001', name: 'Ramnikbhai  Kakadiya', mobileNumber: '+91 08520 85201', assignRole: 'Admin', status: 'Approved' },
        { distNo: '1002', name: 'PrashantBhai  Kakadiya', mobileNumber: '+91 08520 85201', assignRole: 'Admin', status: 'Approved' },
        { distNo: '1003', name: 'Ramnikbhai  Kakadiya', mobileNumber: '+91 08520 85201', assignRole: 'Jr.Admin', status: 'Approved' },
        { distNo: '1004', name: 'PrashantBhai  Kakadiya', mobileNumber: '+91 08520 85201', assignRole: 'Admin-Super Admin', status: 'Approved' },
        { distNo: '1005', name: 'PrashantBhai  Kakadiya', mobileNumber: '+91 08520 85201', assignRole: 'Admin', status: 'Approved' },
        { distNo: '1006', name: 'Ramnikbhai Kakadiya', mobileNumber: '+91 08520 85201', assignRole: 'Jr.Admin', status: 'Approved' },
        { distNo: '1007', name: 'PrashantBhai  Kakadiya', mobileNumber: '+91 08520 85201', assignRole: 'Admin-Super Admin', status: 'Approved' },
        { distNo: '1008', name: 'PrashantBhai  Kakadiya', mobileNumber: '+91 08520 85201', assignRole: 'Admin', status: 'Approved' },
    ]

    // Assuming your table data is stored in an array called tableData
    const filteredData = tableData.filter((item) => {
        // Filter based on search query
        const matchesSearchQuery = item.name.toLowerCase().includes(searchQuery.toLowerCase());

        // Filter based on selected status
        const matchesStatus = selectedStatus === 'Selected Status' || item.status === selectedStatus;

        // Filter based on selected role
        const matchesRole = selectedRole === 'Selected Role' || item.role === selectedRole;

        // Return true only if all conditions match
        return matchesSearchQuery && matchesStatus && matchesRole;
    });
    return (
        <div>
            <div className='d-flex flex-wrap bg-white justify-content-center justify-content-lg-between align-items-center dashboard-title-text px-5'>
                <div className='admin-list-text mb-2 mb-lg-0'>
                    <h5 className='mb-0 fw-medium'>Admin List</h5>
                </div>
                <div className='mb-2 mb-lg-0'>
                    <div className='d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center'>
                        <div className='mx-2 mb-2 mb-lg-0'><img src='/img/ic_import.svg' alt="ic_import" /><span className='import-text fw-medium'> Import</span></div>
                        <div>
                            <div className='mx-2'><button className='create-admin-btn fw-medium p-2'>Create Admin</button></div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='d-flex bg-white mt-3 flex-wrap justify-content-between admin-select-sec ms-0 ms-lg-4 pe-5 py-2'>
                <div className='d-flex flex-wrap'>
                    <div className='me-0 me-lg-3 mb-3 mb-lg-0'>
                        <div className='d-flex align-items-center'>
                            <div>
                                <div className='select-icon-layer1'>
                                    <div className='select-icon-layer2'>
                                        <img src='/img/ic_status.svg' alt="ic_status" />
                                    </div>
                                </div>
                            </div>
                            <div className='ms-3'>
                                <select className='admin-select-input fw-medium'>
                                    <option value="select status">Select Status</option>
                                    <option value="approved">Approved</option>
                                    <option value="pending">Pending</option>
                                    <option value="reject">Reject</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex align-items-center mb-3 mb-lg-0'>
                        <div>
                            <div className='select-icon-layer1'>
                                <div className='select-icon-layer2'>
                                    <img src='/img/ic_role.svg' alt="ic_role" />
                                </div>
                            </div>
                        </div>
                        <div className='ms-3'>
                            <select className='admin-select-input fw-medium'>
                                <option value="select role">Select Role</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid'>
                <div className='row align-items-center d-none'>
                    <div className='col-12 col-lg-1 mb-2 media-100'>
                        <div>
                            <img src='/img/ic_back.svg' alt="ic_back" />
                        </div>
                    </div>
                    <div className='col-12 col-lg-3 mb-2 media-50'>
                        <div>
                            <input type='text' className='adminlist-search-input px-5' placeholder='Search here' value={searchQuery}
                                onChange={handleSearchInputChange}></input>
                        </div>
                    </div>
                    <div className='col-12 col-lg-3 mb-2 media-50'>
                        <div className='position-relative'>
                            <select className='adminlist-input px-4' value={selectedStatus} onChange={handleStatusChange}>
                                <option>Selected Status</option>
                                <option value='approved'>Approved</option>
                                <option>Pending</option>
                                <option>Reject</option>
                            </select>
                            {/* <input type='text' placeholder='Search here'></input> */}
                            <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                        </div>
                    </div>
                    <div className='col-12 col-lg-3 mb-2 media-50'>
                        <div className='position-relative'>
                            <select className='adminlist-input px-4' value={selectedRole} onChange={handleRoleChange}>
                                <option>Selected Role</option>
                                <option>Admin</option>
                                <option>Jr.Admin</option>
                                <option>Registan Head</option>
                                <option>Accomodation Head</option>
                            </select>
                            {/* <input type='text' placeholder='Search here'></input> */}
                            <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                        </div>
                    </div>
                    <div className='col-12 col-lg-2 mb-2 media-50'>
                        <div className='position-relative'>
                            <input type='text' className='adminlist-input px-5' placeholder='Export'></input>
                            <img src='/img/ic_download.svg' className='adminlist-download-ic' alt='ic_download'></img>
                        </div>
                    </div>
                </div>
                <div className='pt-4'>
                    <div className='table-responsive'>
                        <table className='table table-striped'>
                            <thead>
                                <tr>
                                    <th>Distu.no</th>
                                    <th>Name</th>
                                    <th>Mobile Number</th>
                                    <th>Approved By</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Render filtered data */}
                                {filteredData.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            <label className="checkmark-container">{item.distNo}
                                                <input type="checkbox" />
                                                <span className="checkmarkbox"></span>
                                            </label>
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.mobileNumber}</td>
                                        <td>{item.assignRole}</td>
                                        <td>
                                            <div className={`p-2 d-inline-block ${item.status === 'Reject' ? 'table-rejected-td' : item.status === 'Approved' ? 'table-approve-td' : item.status === 'Pending' ? 'table-pending-td' : ''}`}>{item.status}</div>
                                        </td>
                                        <td className='position-relative '>
                                            <img src='/img/ic_delate.svg' className='img-fluid mx-1' alt='ic_delate'></img>
                                            <img src='/img/ic_edit_01.svg' className='img-fluid mx-1' alt="ic_edit_01" />
                                            <div className='edit-link-box px-3 py-2 d-none'>
                                                <div className='d-flex py-2'>
                                                    <div className='me-3'><img src='/img/ic_edit.svg' className='img-fluid' alt='ic_edit'></img></div>
                                                    <div>Edit</div>
                                                </div>
                                                <div className='d-flex py-2' data-bs-toggle="modal" data-bs-target="#linkModal">
                                                    <div className='me-3'><img src='/img/ic_link.svg' className='img-fluid' alt='ic_link'></img></div>
                                                    <div>link</div>
                                                </div>

                                                <div className="modal fade" id="linkModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div className="modal-dialog modal-dialog-centered">
                                                        <div className="modal-content px-2 pb-4 pt-2">
                                                            <div>
                                                                <img src='/img/ic_close.svg' type='button' className='d-flex ms-auto' data-bs-dismiss="modal" aria-label="Close"></img>
                                                                <h3 className="modal-title fs-5" id="exampleModalLabel">Link Copy Successfully</h3>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="col-12">
                                                                    <label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">Username</label>
                                                                    <div className="input-group mt-3">
                                                                        <input type="text" className="form-control create-admin-popup-input" id="inlineFormInputGroupUsername" placeholder="www.Lorem Ipsum is simply dummy text of the printing and typesetting" />
                                                                        <div className="input-group-text"><img src='/img/ic_copy.svg' className='img-fluid' alt='ic_copy'></img></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="text-center mt-3">
                                                                <button type="button" className="create-admin-sharelink-btn" data-bs-dismiss="modal">Share link</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='d-flex flex-wrap justify-content-between'>
                    <div>
                        <span className='select-show-text'>show</span>
                        <select className='adminlist-show-select mx-2'>
                            <option>10</option>
                        </select>
                        <span className='select-showing-text'>Showing 1 to 15 of 12 Details</span>
                    </div>
                    <div>
                        {/* pagination */}
                        <div>
                            <div className="col-12 col-md-12 col-lg-12 my-3 d-flex m-auto">
                                <ul className="course-pagination-num pagination m-auto align-items-center gap-3">
                                    <a href='#'><img src='/img/ic_pagination_prev.svg' alt="ic_pagination_prev" /></a>
                                    <li className="course-item active"><a className='active' href='#'>1</a></li>
                                    <li className="course-item"><a href='#'>2</a></li>
                                    <li className="course-item"><a href='#'>3</a></li>
                                    <a href='#'><img src='/img/ic_pagination_next.svg'
                                        alt="ic_pagination_next" /></a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
