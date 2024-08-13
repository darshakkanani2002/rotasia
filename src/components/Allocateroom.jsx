import React, { useState } from 'react'

export default function Allocateroom() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedClub, setSelectedClub] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');

    // Sample district numbers
    const districtNumbers = ['1001', '1002', '1003', '1004', '1005'];

    // sample club name
    const clubNames = ['Rotract Club of karanbhumi Metro', 'karanbhumi Club'];

    // Sample table data
    const tableData = [
        { districtNo: '1001', clubName: 'Rotract Club of karanbhumi Metro', designation: 'PDRR', name: 'Prashant Bhai Ramnikbhai Kakadiya', mobileNumber: '+91 08520 85201', roomNo: 'C - 201' },

        { districtNo: '1002', clubName: 'karanbhumi Club', designation: 'PDRR', name: 'Prashant Bhai Ramnikbhai Kakadiya', mobileNumber: '+91 08520 85201', roomNo: 'C - 202' },

        { districtNo: '1003', clubName: 'Rotract Club of karanbhumi Metro', designation: 'PDRR', name: 'Prashant Bhai Ramnikbhai Kakadiya', mobileNumber: '+91 08520 85201', roomNo: 'C - 203' },

        { districtNo: '1004', clubName: 'karanbhumi Club', designation: 'PDRR', name: 'Prashant Bhai Ramnikbhai Kakadiya', mobileNumber: '+91 08520 85201', roomNo: 'C - 204' },

        { districtNo: '1005', clubName: 'Rotract Club of karanbhumi Metro', designation: 'PDRR', name: 'Prashant Bhai Ramnikbhai Kakadiya', mobileNumber: '+91 08520 85201', roomNo: 'C - 205' },
        // Add more data as needed
    ];

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
    return (
        <div>
            <div className='d-flex align-items-center  bg-white py-2 px-4 align-items-center justify-content-between dashboard-title-text'>
                <div>
                    <h5 className='mb-0'>Allocate Rooms</h5>
                </div>
                <div>
                    <button className='allocate-room-add-btn p-2'>Add Allocation</button>
                </div>
            </div>

            <div className='text-center create-admin-text position-relative mb-5'>
                <h3 className='mb-0'>Allocate Rooms</h3>
                <img src='/img/ic_back.svg' className='position-absolute start-0 bottom-50' alt="ic_back" />
            </div>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 col-lg-3 mb-4 media-50'>
                        {/* <input type='text' className='registration-resident-input px-4' placeholder='Enter Your Resort Name'></input> */}
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
                                <option>Room List</option>
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
                    <div className='col-12 col-lg-3 mb-4 text-start media-50'>
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
                                            <input type='text' className='adminlist-search-input px-5' placeholder='Search here' value={searchQuery}
                                                onChange={handleSearchInputChange}></input>
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-4 mb-4 media-33'>
                                        <div className='position-relative'>
                                            <select className='create-admin-select px-4' value={selectedClub}
                                                onChange={handleClubSelectChange}>
                                                <option value='club name'>Club Name</option>
                                                {clubNames.map((club, index) => (
                                                    <option key={index} value={club}>{club}</option>
                                                ))}
                                            </select>
                                            <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-3 mb-4 media-33'>
                                        <div className='position-relative'>
                                            <select className='create-admin-select px-4' value={selectedDistrict}
                                                onChange={handleDistrictSelectChange}>
                                                <option value='district no.'>District no.</option>
                                                {districtNumbers.map((district, index) => (
                                                    <option key={index} value={district}>{district}</option>
                                                ))}
                                            </select>
                                            <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <div className='table-responsive'>
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>District No</th>
                                            <th>Club Name</th>
                                            <th>Designation</th>
                                            <th>Name</th>
                                            <th>Mobile Number</th>
                                            <th>Room No.</th>
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
                                            <td>Rotract Club of karanbhumi Metro</td>
                                            <td>PDRR</td>
                                            <td>Prashant Bhai  Ramnikbhai Kakadiya</td>
                                            <td>+91 08520 85201</td>
                                            <td>C - 201</td>
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
                                            <td>------</td>
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
                                            <td>C - 201</td>
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
                                            <td>C - 201</td>
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
                                            <td>C - 201</td>
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
                                                <td>{item.roomNo}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='text-center mt-5'>
                    <button type="button" className="create-admin-submit-btn">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}
