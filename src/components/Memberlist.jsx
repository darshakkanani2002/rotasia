import React, { useState, useRef } from 'react'

export default function Memberlist() {
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
        { distNo: '1001', name: 'Ramnikbhai  Kakadiya', mobileNumber: '+91 08520 85201', approvedBy: 'Admin', status: 'Approved' },
        { distNo: '1002', name: 'PrashantBhai  Kakadiya', mobileNumber: '+91 08520 85201', approvedBy: 'Admin', status: 'Reject' },
        { distNo: '1003', name: 'Ramnikbhai  Kakadiya', mobileNumber: '+91 08520 85201', approvedBy: 'Jr.Admin', status: 'Approved' },
        { distNo: '1004', name: 'PrashantBhai  Kakadiya', mobileNumber: '+91 08520 85201', approvedBy: 'Admin-Super Admin', status: 'Approved' },
        { distNo: '1005', name: 'PrashantBhai  Kakadiya', mobileNumber: '+91 08520 85201', approvedBy: 'Admin', status: 'Reject' },
        { distNo: '1006', name: 'Ramnikbhai Kakadiya', mobileNumber: '+91 08520 85201', approvedBy: 'Jr.Admin', status: 'Approved' },
        { distNo: '1007', name: 'PrashantBhai  Kakadiya', mobileNumber: '+91 08520 85201', approvedBy: 'Admin-Super Admin', status: 'Approved' },
        { distNo: '1008', name: 'PrashantBhai  Kakadiya', mobileNumber: '+91 08520 85201', approvedBy: 'Admin', status: 'Reject' },
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


    // // Reference to the table element
    // const tableRef = useRef(null);

    // // Function to handle the download action
    // const handleDownload = () => {
    //     // Get the table element

    //     // Create a new Blob object containing the table data
    //     const blob = new Blob([table.outerHTML], { type: 'application/vnd.ms-excel' });

    //     // Create a temporary anchor element
    //     const anchor = document.createElement('a');
    //     anchor.href = URL.createObjectURL(blob);

    //     // Set the download attribute and filename
    //     anchor.download = 'table_data.html';

    //     // Programmatically trigger the download
    //     anchor.click();

    //     // Release the URL object
    //     URL.revokeObjectURL(anchor.href);
    // };
    return (
        <div>
            <div className='d-flex flex-wrap bg-white justify-content-center justify-content-lg-between align-items-center dashboard-title-text px-5'>
                <div className='admin-list-text mb-2 mb-lg-0'>
                    <h5 className='mb-0 fw-medium'>Registrations List</h5>
                </div>
                <div className='mb-2 mb-lg-0'>
                    <div className='d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center'>
                        <div className='mx-2 mb-2 mb-lg-0'><img src='/img/ic_import.svg' alt="ic_import" /><span className='import-text fw-medium'> Import</span></div>
                        <div>
                            <div className='mx-2'><button className='create-admin-btn fw-medium p-2'>Create  Registration</button></div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='container-fluid'>
                <div className='row align-items-center'>
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
                                <option value='Approved'>Approved</option>
                                {/* <option value='Pending'>Pending</option> */}
                                <option value='Reject'>Reject</option>
                            </select>
                            {/* <input type='text' placeholder='Search here'></input> */}
                            <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                        </div>
                    </div>
                    <div className='col-12 col-lg-3 mb-2 media-50'>
                        <div className='position-relative'>
                            <select className='adminlist-input px-4' value={selectedRole} onChange={handleRoleChange}>
                                <option>Selected Role</option>
                                <option value='Admin'>Admin</option>
                                <option value='Jr.Admin'>Jr.Admin</option>
                                <option value='Registan Head'>Registan Head</option>
                                <option value='Admin-Super Admin'>Admin-Super Admin</option>
                            </select>
                            {/* <input type='text' placeholder='Search here'></input> */}
                            <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                        </div>
                    </div>
                    <div className='col-12 col-lg-2 mb-2 media-50'>
                        <div className='position-relative'>
                            <input type='text' className='adminlist-input px-5' placeholder='Export' disabled></input>
                            <img src='/img/ic_download.svg' className='adminlist-download-ic' alt='ic_download'></img>
                        </div>
                    </div>
                </div>

                <div className='pt-4'>
                    <div className='table-responsive'  >
                        <table className='table table-striped' id='table-download'>
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
                            {/* <tbody>
                                <tr>
                                    <td>
                                        <label class="checkmark-container">1001
                                            <input type="checkbox" />
                                            <span class="checkmarkbox"></span>
                                        </label>
                                        

                                    </td>
                                    <td>Rihanbhai Prakashbhai Patel</td>
                                    <td>+91 92850 85025</td>
                                    <td>Registration Head</td>
                                    <td className='text-center'>
                                        <div className='d-flex justify-content-center'>
                                            <div className='p-2 d-inline-block approve-back me-3'>Approved</div>
                                            <div className='p-2 d-inline-block sr-approve-back'>SR Approved</div>
                                        </div>
                                    </td>
                                    <td><img src={Icmore} className='img-fluid' alt='ic_more'></img></td>
                                </tr>

                                <tr>
                                    <td>
                                        <label class="checkmark-container">1001
                                            <input type="checkbox" />
                                            <span class="checkmarkbox"></span>
                                        </label>
                                    </td>
                                    <td>Rihanbhai Prakashbhai Patel</td>
                                    <td>+91 92850 85025</td>
                                    <td>Food Head</td>
                                    <td className=''>
                                        <div className='p-2 d-inline-block approve-back'>Approved</div>
                                    </td>
                                    <td><img src={Icmore} className='img-fluid' alt='ic_more'></img></td>
                                </tr>

                                <tr>
                                    <td>
                                        <label class="checkmark-container">1001
                                            <input type="checkbox" />
                                            <span class="checkmarkbox"></span>
                                        </label>
                                    </td>
                                    <td>Rihanbhai Prakashbhai Patel</td>
                                    <td>+91 92850 85025</td>
                                    <td>Accomodation Head</td>
                                    <td className=''>
                                        <div className='d-flex justify-content-center'>
                                            <div className='p-2 d-inline-block approve-back me-3'>Approved</div>
                                            <div className='p-2 d-inline-block sr-pending-back'>SR Pending</div>
                                        </div>
                                    </td>
                                    <td><img src={Icmore} className='img-fluid' alt='ic_more'></img></td>
                                </tr>
                                <tr>
                                    <td>
                                        <label class="checkmark-container">1001
                                            <input type="checkbox" />
                                            <span class="checkmarkbox"></span>
                                        </label>
                                    </td>
                                    <td>Rihanbhai Prakashbhai Patel</td>
                                    <td>+91 92850 85025</td>
                                    <td>Agenda Head</td>
                                    <td>
                                        <div className='p-2 d-inline-block approve-back'>Approved</div>
                                    </td>
                                    <td><img src={Icmore} className='img-fluid' alt='ic_more'></img></td>
                                </tr>
                                <tr>
                                    <td>
                                        <label class="checkmark-container">1001
                                            <input type="checkbox" />
                                            <span class="checkmarkbox"></span>
                                        </label>
                                    </td>
                                    <td>Rihanbhai Prakashbhai Patel</td>
                                    <td>+91 92850 85025</td>
                                    <td>Helpdesk</td>
                                    <td>
                                        <div className='p-2 d-inline-block approve-back'>Approved</div>
                                    </td>
                                    <td><img src={Icmore} className='img-fluid' alt='ic_more'></img></td>
                                </tr>
                                <tr>
                                    <td>
                                        <label class="checkmark-container">1001
                                            <input type="checkbox" />
                                            <span class="checkmarkbox"></span>
                                        </label>
                                    </td>
                                    <td>Rihanbhai Prakashbhai Patel</td>
                                    <td>+91 92850 85025</td>
                                    <td>Transport Head</td>
                                    <td>
                                        <div className='p-2 d-inline-block approve-back'>Approved</div>
                                    </td>
                                    <td><img src={Icmore} className='img-fluid' alt='ic_more'></img></td>
                                </tr>
                                <tr>
                                    <td>
                                        <label class="checkmark-container">1001
                                            <input type="checkbox" />
                                            <span class="checkmarkbox"></span>
                                        </label>
                                    </td>
                                    <td>Rihanbhai Prakashbhai Patel</td>
                                    <td>+91 92850 85025</td>
                                    <td>Helpdesk</td>
                                    <td>
                                        <div className='p-2 d-inline-block approve-back'>Approved</div>
                                    </td>
                                    <td><img src={Icmore} className='img-fluid' alt='ic_more'></img></td>
                                </tr>
                                <tr>
                                    <td>
                                        <label class="checkmark-container">1001
                                            <input type="checkbox" />
                                            <span class="checkmarkbox"></span>
                                        </label>
                                    </td>
                                    <td>Rihanbhai Prakashbhai Patel</td>
                                    <td>+91 92850 85025</td>
                                    <td>Registration Head</td>
                                    <td>
                                        <div className='p-2 d-inline-block approve-back'>Approved</div>
                                    </td>
                                    <td><img src={Icmore} className='img-fluid' alt='ic_more'></img></td>
                                </tr>
                                <tr>
                                    <td>
                                        <label class="checkmark-container">1001
                                            <input type="checkbox" />
                                            <span class="checkmarkbox"></span>
                                        </label>
                                    </td>
                                    <td>Rihanbhai Prakashbhai Patel</td>
                                    <td>+91 92850 85025</td>
                                    <td>Registration Head</td>
                                    <td>
                                        <div className='p-2 d-inline-block approve-back'>Approved</div>
                                    </td>
                                    <td><img src={Icmore} className='img-fluid' alt='ic_more'></img></td>
                                </tr>
                                <tr>
                                    <td>
                                        <label class="checkmark-container">1001
                                            <input type="checkbox" />
                                            <span class="checkmarkbox"></span>
                                        </label>
                                    </td>
                                    <td>Rihanbhai Prakashbhai Patel</td>
                                    <td>+91 92850 85025</td>
                                    <td>Registration Head</td>
                                    <td>
                                        <div className='p-2 d-inline-block approve-back'>Approved</div>
                                    </td>
                                    <td><img src={Icmore} className='img-fluid' alt='ic_more'></img></td>
                                </tr>
                            </tbody> */}
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
                                        <td>{item.approvedBy}</td>
                                        <td>
                                            <div className={`p-2 d-inline-block ${item.status === 'Reject' ? 'sr-pending-back' : item.status === 'Approved' ? 'approve-back' : ''}`}>{item.status}</div>
                                        </td>
                                        <td>
                                            <img src='/img/ic_delate.svg' className='img-fluid mx-1' alt='ic_delate'></img>
                                            <img src='/img/ic_edit_01.svg' className='img-fluid mx-1' alt="ic_edit_01" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='d-flex flex-wrap justify-content-between align-items-center'>
                    <div>
                        <span className='select-show-text'>Showing 1 to 10 Details</span>
                    </div>
                    <div>
                        {/* pagination */}
                        <div>
                            <div className="col-12 col-md-12 col-lg-12 my-3 d-flex m-auto">
                                <ul className="course-pagination-num pagination m-auto align-items-center gap-4">
                                    <li><a><img src='/img/ic_pagination_prev.svg' alt="ic_pagination_prev" /></a></li>
                                    <li className="course-item active"><a className='active'>1</a></li>
                                    <li className="course-item"><a>2</a></li>
                                    <li><a><img src='/img/ic_pagination_next.svg'
                                        alt="ic_pagination_next" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
