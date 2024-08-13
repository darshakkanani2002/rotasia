import React, { useState } from 'react'

export default function Transportlist() {
    const [searchQuery, setSearchQuery] = useState('');
    // Sample data
    const transportData = [
        { id: 1, vehicleName: 'Ganesh Travel Bus', vehicleNo: 'MH12JM2020', personCapacity: '100 Person', vehicleType: 'Bus', vehicleRoute: 'Hotel To Airport', driverMobileNo: '+91 85201 85201', assignBy: 'Delegate' },
        { id: 2, vehicleName: 'Ganesh Travel Bus', vehicleNo: 'MH12JM2020', personCapacity: '100 Person', vehicleType: 'Bus', vehicleRoute: 'Hotel To Airport', driverMobileNo: '+91 85201 85201', assignBy: 'Delegate' },
        { id: 3, vehicleName: 'Ganesh Travel Bus', vehicleNo: 'MH12JM2020', personCapacity: '05 Person', vehicleType: 'car', vehicleRoute: 'Hotel To Airport', driverMobileNo: '+91 85201 85201', assignBy: 'Delegate' },
        { id: 4, vehicleName: 'Ganesh Travel Bus', vehicleNo: 'MH12JM2020', personCapacity: '05 Person', vehicleType: 'car', vehicleRoute: 'Hotel To Airport', driverMobileNo: '+91 85201 85201', assignBy: 'Delegate' },
        { id: 5, vehicleName: 'Ganesh Travel Bus', vehicleNo: 'MH12JM2020', personCapacity: '100 Person', vehicleType: 'Bus', vehicleRoute: 'Hotel To Airport', driverMobileNo: '+91 85201 85201', assignBy: 'Delegate' },
        { id: 6, vehicleName: 'Ganesh Travel Bus', vehicleNo: 'MH12JM2020', personCapacity: '05 Person', vehicleType: 'car', vehicleRoute: 'Hotel To Airport', driverMobileNo: '+91 85201 85201', assignBy: 'Delegate' },
        { id: 7, vehicleName: 'Ganesh Travel Bus', vehicleNo: 'MH12JM2020', personCapacity: '02 Person', vehicleType: 'Bike', vehicleRoute: 'Hotel To Airport', driverMobileNo: '+91 85201 85201', assignBy: 'Delegate' },
        { id: 8, vehicleName: 'Ganesh Travel Bus', vehicleNo: 'MH12JM2020', personCapacity: '02 Person', vehicleType: 'Bike', vehicleRoute: 'Hotel To Airport', driverMobileNo: '+91 85201 85201', assignBy: 'Delegate' },
        { id: 9, vehicleName: 'Ganesh Travel Bus', vehicleNo: 'MH12JM2020', personCapacity: '05 Person', vehicleType: 'car', vehicleRoute: 'Hotel To Airport', driverMobileNo: '+91 85201 85201', assignBy: 'Delegate' },
        // Add more data as needed
    ];
    // Filtered data based on search query
    const filteredData = transportData.filter(item => {
        return (
            item.vehicleName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.vehicleNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.vehicleType.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.vehicleRoute.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.driverMobileNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.assignBy.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });
    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    }
    return (
        <div>
            <div className='d-flex flex-wrap bg-white py-2 px-4 align-items-center justify-content-between dashboard-title-text'>
                <div>
                    <h5 className='mb-0'>Transport List</h5>
                </div>
                <div>
                    <div className='mx-2 mb-2 mb-lg-0'><img src='/img/ic_import.svg' alt="ic_import" /><span className='import-text fw-medium'> Import</span></div>
                </div>
            </div>

            <div className='container-fluid px-4'>
                {/* <div className='d-flex justify-content-between flex-wrap'>
                    <div className='row'>
                        <div className='col-12 col-lg-6 position-relative mb-3'>
                            <div>
                                <input type='text' className='adminlist-search-input px-5' placeholder='Search here' value={searchQuery} onChange={handleChange}></input>
                            </div>
                            <img className='position-absolute header-ic-back' alt="ic_back" />
                        </div>
                        <div className='col-12 col-lg-6 mb-3'>
                            <div className='position-relative'>
                                <select className='transport-list-select px-4'>
                                    <option>Selected Transport</option>
                                    <option value="bus">Bus</option>
                                    <option value="bike">Bike</option>
                                    <option value="car">Car</option>
                                </select>
                                <img src='../../public/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button className='me-2 accommodationlist-allocate-room-btn'>Allocate Rooms</button>
                        <button className='accommodationlist-create-hotel-btn mt-3 mt-lg-0'><span><img src='../../public/img/ic_btn_plus.svg' className='img-fluid pe-2' alt="ic_btn_plus" /></span>Create Transport</button>
                    </div>
                </div> */}
                <div className='row'>
                    <div className='col-12 col-lg-3 mt-3'>
                        <div>
                            <input type='text' className='adminlist-search-input px-5' placeholder='Search here' value={searchQuery} onChange={handleChange}></input>
                        </div>
                    </div>
                    <div className='col-12 col-lg-2 mt-3'>
                        <div className='position-relative'>
                            <select className='transport-list-select px-4'>
                                <option>Selected Transport</option>
                            </select>
                            <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                        </div>
                    </div>
                    <div className='col-12 col-lg-2 mt-3'>
                        <div className='position-relative'>
                            <select className='transport-list-select px-4'>
                                <option>Selected Transport</option>
                                <option value="bus">Bus</option>
                                <option value="bike">Bike</option>
                                <option value="car">Car</option>
                            </select>
                            <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                        </div>
                    </div>
                </div>
                <div className='mt-4'>
                    <div className='table-responsive'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Vehicle Type</th>
                                    <th>Vehicle Name</th>
                                    <th>Vehicle No.</th>
                                    <th>Person Capacity</th>
                                    <th>Vehicle Route</th>
                                    <th>Driver Mobile No.</th>
                                    <th>Assign by</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>

                                {filteredData.map((item, index) => (
                                    <tr key={item.id}>
                                        {/* <td>{index + 1}</td> */}
                                        <td>{item.vehicleType}</td>
                                        <td>{item.vehicleName}</td>
                                        <td>{item.vehicleNo}</td>
                                        <td>{item.personCapacity}</td>
                                        <td>{item.vehicleRoute}</td>
                                        <td>{item.driverMobileNo}</td>
                                        <td>{item.assignBy}</td>
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
                                <ul className="course-pagination-num pagination m-auto align-items-center gap-4">
                                    <li><a href='#'><img src='../../public/img/ic_pagination_prev.svg' alt="ic_pagination_prev" /></a></li>
                                    <li className="course-item active"><a href='#' className='active'>1</a></li>
                                    <li className="course-item"><a herf='#'>2</a></li>
                                    <li><a href='#'><img src='../../public/img/ic_pagination_next.svg'
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
