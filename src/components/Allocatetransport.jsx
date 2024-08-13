import React, { useState } from 'react'

export default function Allocatetransport() {
    const [showAdditionalTable, setShowAdditionalTable] = useState(false);
    // Toggle function to show/hide the additional table
    const toggleAdditionalTable = () => {
        setShowAdditionalTable(!showAdditionalTable);
    };
    // State variables for search input and select options
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedClub, setSelectedClub] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');

    // Handle changes in the search input
    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Handle changes in the club name select
    const handleClubSelectChange = (e) => {
        setSelectedClub(e.target.value);
    };

    // Handle changes in the district number select
    const handleDistrictSelectChange = (e) => {
        setSelectedDistrict(e.target.value);
    };

    const tableData = [
        { districtNo: '1001', clubName: 'Rotract Club of karanbhumi Metro', designation: 'PDRR', name: 'Prashant Bhai Ramnikbhai Kakadiya', mobileNumber: '+91 08520 85201', transportName: 'Ganesh Travel' },

        { districtNo: '1002', clubName: 'karanbhumi Club', designation: 'PDRR', name: 'Prashant Bhai Ramnikbhai Kakadiya', mobileNumber: '+91 08520 85201', transportName: 'Ganesh Travel' },

        { districtNo: '1003', clubName: 'Rotract Club of karanbhumi Metro', designation: 'PDRR', name: 'Prashant Bhai Ramnikbhai Kakadiya', mobileNumber: '+91 08520 85201', transportName: 'Ganesh Travel' },

        { districtNo: '1004', clubName: 'karanbhumi Club', designation: 'PDRR', name: 'Prashant Bhai Ramnikbhai Kakadiya', mobileNumber: '+91 08520 85201', transportName: 'Ganesh Travel' },

        { districtNo: '1005', clubName: 'Rotract Club of karanbhumi Metro', designation: 'PDRR', name: 'Prashant Bhai Ramnikbhai Kakadiya', mobileNumber: '+91 08520 85201', transportName: 'Ganesh Travel' },]

    // Filtered table data based on search query, selected club name, and selected district number
    const filteredData = tableData.filter(item => {
        return (
            item.clubName.toLowerCase().includes(selectedClub.toLowerCase()) &&
            item.districtNo.toLowerCase().includes(selectedDistrict.toLowerCase()) &&
            (item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.mobileNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.roomNo.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    });
    return (
        <div>
            <div className='d-flex flex-wrap bg-white justify-content-center justify-content-lg-between align-items-center dashboard-title-text px-5'>
                <div className='admin-list-text mb-2 mb-lg-0'>
                    <h5 className='mb-0 fw-medium'>Transport Allocate</h5>
                </div>
                <div className='mb-2 mb-lg-0'>
                    <div className='d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center'>
                        <div className='mx-2 mb-2 mb-lg-0'><img src='/img/ic_import.svg' alt="ic_import" /><span className='import-text fw-medium'> Import</span></div>
                        <div>
                            <button className='allocate-room-add-btn p-2'>Add Allocation</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className='mt-3'>
                <div className='container-fluid px-4'>
                    <div className='table-responsive'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>District No</th>
                                    <th>Club Name</th>
                                    <th>Vehicle No.</th>
                                    <th>Designation</th>
                                    <th>Transport Name</th>
                                    <th>Name</th>
                                    <th>Route</th>
                                    <th>Vehicle No.</th>
                                    <th>Mobile No.</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>


            {/* old design */}
            <div className='d-none'>
                <div className='text-center create-admin-text position-relative mb-5'>
                    <h3 className='mb-0'>Allocate Transport</h3>
                    <img src='/img/ic_back.svg' className='position-absolute start-0 bottom-50' alt="ic_back" />
                </div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12 col-lg-3 mb-4 media-50'>
                            {/* <input type='text' className='registration-resident-input px-4' placeholder='Enter Your Resort Name'></input> */}
                            <div className='position-relative'>
                                <select className='create-admin-select px-4'>
                                    <option>Transport Select</option>
                                </select>
                                <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mb-4 media-50'>
                            <div className='position-relative'>
                                <select className='create-admin-select px-4'>
                                    <option>Hotel Select</option>
                                </select>
                                <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mb-4 media-50'>
                            <div className='position-relative'>
                                <select className='create-admin-select px-4'>
                                    <option>Capacity Person</option>
                                </select>
                                <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mb-4 media-50 text-start'>
                            <button className='hotel-addmember-btn'><img src='/img/ic_btn_addmember_plus.svg' className='img-fluid' alt="ic_btn_addmember_plus" /> Add Member</button>
                        </div>
                    </div>

                    <div className='allocateroom-table-back pt-4'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-12 col-lg-6 media-100'>
                                    <div className='row'>
                                        <div className='col-12 col-lg-5 mb-4 media-33'>
                                            <div>
                                                <input type='text' className='adminlist-search-input px-5' placeholder='Search here' value={searchQuery} onChange={handleSearchInputChange}></input>
                                            </div>
                                        </div>
                                        <div className='col-12 col-lg-4 mb-4 media-33'>
                                            <div className='position-relative'>
                                                <select className='create-admin-select px-4' value={selectedClub} onChange={handleClubSelectChange}>
                                                    <option value='club name'>Club Name</option>
                                                    <option value="Rotract Club of karanbhumi Metro">Rotract Club of karanbhumi Metro</option>
                                                    <option value="karanbhumi Club">karanbhumi Club</option>
                                                </select>
                                                <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                            </div>
                                        </div>
                                        <div className='col-12 col-lg-3 mb-4 media-33'>
                                            <div className='position-relative'>
                                                <select className='create-admin-select px-4' value={selectedDistrict} onChange={handleDistrictSelectChange}>
                                                    <option>District no.</option>
                                                    <option value="1001">1001</option>
                                                    <option value="1002">1002</option>
                                                    <option value="1003">1003</option>
                                                    <option value="1004">1004</option>
                                                    <option value="1005">1005</option>
                                                </select>
                                                <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-2'>
                                <div className='d-flex flex-wrap'>
                                    <div className='col-12 col-lg-11'>
                                        <div className='table-responsive'>
                                            <table className='table'>
                                                <thead>
                                                    <tr>
                                                        <th>District No</th>
                                                        <th>Club Name</th>
                                                        <th>Designation</th>
                                                        <th>Name</th>
                                                        <th>Mobile Number</th>
                                                        <th>Transport Name</th>
                                                    </tr>
                                                </thead>
                                                {/* <tbody>
                                                <tr>
                                                    <td>
                                                        <label className="checkmark-container">1001
                                                            <input type="checkbox" />
                                                            <span className="checkmarkbox"></span>
                                                        </label>
                                                    </td>
                                                    <td>karanbhumi Metro Club</td>
                                                    <td>PDRR</td>
                                                    <td>Prashant Bhai  Ramnikbhai Kakadiya</td>
                                                    <td>+91 08520 85201</td>
                                                    <td>Ganesh Travel</td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <label className="checkmark-container">1001
                                                            <input type="checkbox" />
                                                            <span className="checkmarkbox"></span>
                                                        </label>
                                                    </td>
                                                    <td>Rotract Club of karanbhumi Metro</td>
                                                    <td>PDRR</td>
                                                    <td>Prashant Bhai  Ramnikbhai Kakadiya</td>
                                                    <td>+91 08520 85201</td>
                                                    <td>------------</td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <label className="checkmark-container">1001
                                                            <input type="checkbox" />
                                                            <span className="checkmarkbox"></span>
                                                        </label>
                                                    </td>
                                                    <td>karanbhumi Metro Club</td>
                                                    <td>PDRR</td>
                                                    <td>Prashant Bhai  Ramnikbhai Kakadiya</td>
                                                    <td>+91 08520 85201</td>
                                                    <td>Ganesh Travel</td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <label className="checkmark-container">1001
                                                            <input type="checkbox" />
                                                            <span className="checkmarkbox"></span>
                                                        </label>
                                                    </td>
                                                    <td>Rotract Club of karanbhumi Metro</td>
                                                    <td>PDRR</td>
                                                    <td>Prashant Bhai  Ramnikbhai Kakadiya</td>
                                                    <td>+91 08520 85201</td>
                                                    <td>Ganesh Travel</td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <label className="checkmark-container">1001
                                                            <input type="checkbox" />
                                                            <span className="checkmarkbox"></span>
                                                        </label>
                                                    </td>
                                                    <td>karanbhumi Metro Club</td>
                                                    <td>PDRR</td>
                                                    <td>Prashant Bhai  Ramnikbhai Kakadiya</td>
                                                    <td>+91 08520 85201</td>
                                                    <td>Ganesh Travel</td>
                                                </tr>
                                            </tbody> */}
                                                <tbody>
                                                    {filteredData.map((item, index) => (
                                                        <tr key={index}>
                                                            <td>
                                                                <label className="checkmark-container">{item.districtNo}
                                                                    <input type="checkbox" />
                                                                    <span className="checkmarkbox"></span>
                                                                </label>
                                                            </td>
                                                            <td>{item.clubName}</td>
                                                            <td>{item.designation}</td>
                                                            <td>{item.name}</td>
                                                            <td>{item.mobileNumber}</td>
                                                            <td>{item.transportName}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>

                                            </table>
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-1 ps-0 ps-lg-3'>
                                        <div className='transport-ic-pluse-back' onClick={toggleAdditionalTable}>
                                            <img src={showAdditionalTable ? '/img/ic_minus.svg' : '/img/ic_plus.svg'} className='img-fluid' alt={showAdditionalTable ? 'ic_minus' : 'ic_pluse'} />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Additional table */}
                            {showAdditionalTable && (
                                <div className='mt-2'>
                                    <div className='d-flex flex-wrap'>
                                        <div className='col-12 col-lg-11'>
                                            <div className='table-responsive'>
                                                <table className='table'>
                                                    <thead>
                                                        <tr>
                                                            <th>District No</th>
                                                            <th>Club Name</th>
                                                            <th>Designation</th>
                                                            <th>Name</th>
                                                            <th>Mobile Number</th>
                                                            <th>Transport Name</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <label className="checkmark-container">1001
                                                                    <input type="checkbox" />
                                                                    <span className="checkmarkbox"></span>
                                                                </label>
                                                            </td>
                                                            <td>Rotract Club of karanbhumi Metro</td>
                                                            <td>PDRR</td>
                                                            <td>Prashant Bhai  Ramnikbhai Kakadiya</td>
                                                            <td>+91 08520 85201</td>
                                                            <td>Ganesh Travel</td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <label className="checkmark-container">1001
                                                                    <input type="checkbox" />
                                                                    <span className="checkmarkbox"></span>
                                                                </label>
                                                            </td>
                                                            <td>Rotract Club of karanbhumi Metro</td>
                                                            <td>PDRR</td>
                                                            <td>Prashant Bhai  Ramnikbhai Kakadiya</td>
                                                            <td>+91 08520 85201</td>
                                                            <td>------------</td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <label className="checkmark-container">1001
                                                                    <input type="checkbox" />
                                                                    <span className="checkmarkbox"></span>
                                                                </label>
                                                            </td>
                                                            <td>Rotract Club of karanbhumi Metro</td>
                                                            <td>PDRR</td>
                                                            <td>Prashant Bhai  Ramnikbhai Kakadiya</td>
                                                            <td>+91 08520 85201</td>
                                                            <td>Ganesh Travel</td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <label className="checkmark-container">1001
                                                                    <input type="checkbox" />
                                                                    <span className="checkmarkbox"></span>
                                                                </label>
                                                            </td>
                                                            <td>Rotract Club of karanbhumi Metro</td>
                                                            <td>PDRR</td>
                                                            <td>Prashant Bhai  Ramnikbhai Kakadiya</td>
                                                            <td>+91 08520 85201</td>
                                                            <td>Ganesh Travel</td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <label className="checkmark-container">1001
                                                                    <input type="checkbox" />
                                                                    <span className="checkmarkbox"></span>
                                                                </label>
                                                            </td>
                                                            <td>Rotract Club of karanbhumi Metro</td>
                                                            <td>PDRR</td>
                                                            <td>Prashant Bhai  Ramnikbhai Kakadiya</td>
                                                            <td>+91 08520 85201</td>
                                                            <td>Ganesh Travel</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className='col-12 col-lg-1 ps-0 ps-lg-3'>
                                            <div className='transport-ic-pluse-back' onClick={toggleAdditionalTable}>
                                                <img src={showAdditionalTable ? '/img/ic_minus.svg' : '/img/ic_plus.svg'} className='img-fluid' alt={showAdditionalTable ? 'ic_minus' : 'ic_pluse'} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='text-center mt-5'>
                        <button type="button" className="create-admin-submit-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            Submit
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
