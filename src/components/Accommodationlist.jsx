import React, { useState } from 'react'


export default function Accommodationlist() {
    const [searchQuery, setSearchQuery] = useState('');
    // Sample data
    const tableData = [
        { id: 1, name: 'Mirasol Resort', rooms: 250, personSharing: '05 Person', facilities: 'Swimming Pool, 24-hour Room Service, Smoke Detector, Intercom, Elevator/Lift, Housekeeping, Free Parking' },
        { id: 2, name: 'Mirasol Resort', rooms: 250, personSharing: '05 Person', facilities: 'Swimming Pool, 24-hour Room Service, Smoke Detector, Intercom, Elevator/Lift, Housekeeping, Free Parking' },
        { id: 3, name: 'Mirasol Resort', rooms: 250, personSharing: '05 Person', facilities: 'Swimming Pool, 24-hour Room Service, Smoke Detector, Intercom, Elevator/Lift, Housekeeping, Free Parking' },
        { id: 4, name: 'Lacasa Resort', rooms: 250, personSharing: '05 Person', facilities: 'Swimming Pool, 24-hour Room Service, Smoke Detector, Intercom, Elevator/Lift, Housekeeping, Free Parking' },
        { id: 5, name: 'Mirasol Resort', rooms: 250, personSharing: '05 Person', facilities: 'Swimming Pool, 24-hour Room Service, Smoke Detector, Intercom, Elevator/Lift, Housekeeping, Free Parking' },
        { id: 6, name: 'Mirasol Resort', rooms: 250, personSharing: '05 Person', facilities: 'Swimming Pool, 24-hour Room Service, Smoke Detector, Intercom, Elevator/Lift, Housekeeping, Free Parking' },
        { id: 7, name: 'Mirasol Resort', rooms: 250, personSharing: '05 Person', facilities: 'Swimming Pool, 24-hour Room Service, Smoke Detector, Intercom, Elevator/Lift, Housekeeping, Free Parking' },
        { id: 8, name: 'Mirasol Resort', rooms: 250, personSharing: '05 Person', facilities: 'Swimming Pool, 24-hour Room Service, Smoke Detector, Intercom, Elevator/Lift, Housekeeping, Free Parking' },
        { id: 9, name: 'Mirasol Resort', rooms: 250, personSharing: '05 Person', facilities: 'Swimming Pool, 24-hour Room Service, Smoke Detector, Intercom, Elevator/Lift, Housekeeping, Free Parking' },

    ];
    // Filtered data based on search query
    const filteredData = tableData.filter(item => {
        return (
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.rooms.toString().includes(searchQuery.toLowerCase()) ||
            item.personSharing.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.facilities.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });
    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };
    return (
        <div>
            <div className='d-flex flex-wrap bg-white justify-content-center justify-content-lg-between align-items-center dashboard-title-text px-5'>
                <div className='admin-list-text mb-2 mb-lg-0'>
                    <h5 className='mb-0 fw-medium'>Accommodation List</h5>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='d-flex justify-content-between flex-wrap'>
                    <div className='col-12 col-lg-3 position-relative'>
                        <div>
                            <input type='text' className='adminlist-search-input px-5 ms-5' placeholder='Search here' value={searchQuery}
                                onChange={handleChange}></input>
                        </div>
                        <img src='/img/ic_back.svg' className='position-absolute header-ic-back' alt="ic_back" />
                    </div>
                    <div>
                        <button className='me-2 accommodationlist-allocate-room-btn'>Allocate Rooms</button>
                        <button className='accommodationlist-create-hotel-btn mt-3 mt-lg-0'><span><img src='/img/ic_btn_plus.svg' className='img-fluid pe-2' alt="ic_btn_plus" /></span>Create Hotel</button>
                    </div>
                </div>
                <div className='mt-4'>
                    <div className='table-responsive'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Hotel Name</th>
                                    <th>Rooms</th>
                                    <th>Total Capacity</th>
                                    <th>Facility</th>
                                    <th>View</th>
                                </tr>
                            </thead>
                            {/* <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mirasol Resort</td>
                                    <td>250</td>
                                    <td>05 Person</td>
                                    <td>Swimming Pool,24-hour Room Service,SmokeDetector,Intercom,Elevator/ Lift.,Housekeeping,Free Parking.</td>
                                    <td><img src={Icmore} className='img-fluid' alt='ic_more'></img></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Mirasol Resort</td>
                                    <td>250</td>
                                    <td>05 Person</td>
                                    <td>Swimming Pool,24-hour Room Service,SmokeDetector,Intercom,Elevator/ Lift.,Housekeeping,Free Parking.</td>
                                    <td><img src={Icmore} className='img-fluid' alt='ic_more'></img></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Mirasol Resort</td>
                                    <td>250</td>
                                    <td>05 Person</td>
                                    <td>Swimming Pool,24-hour Room Service,SmokeDetector,Intercom,Elevator/ Lift.,Housekeeping,Free Parking.</td>
                                    <td><img src={Icmore} className='img-fluid' alt='ic_more'></img></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Mirasol Resort</td>
                                    <td>250</td>
                                    <td>05 Person</td>
                                    <td>Swimming Pool,24-hour Room Service,SmokeDetector,Intercom,Elevator/ Lift.,Housekeeping,Free Parking.</td>
                                    <td><img src={Icmore} className='img-fluid' alt='ic_more'></img></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Mirasol Resort</td>
                                    <td>250</td>
                                    <td>05 Person</td>
                                    <td>Swimming Pool,24-hour Room Service,SmokeDetector,Intercom,Elevator/ Lift.,Housekeeping,Free Parking.</td>
                                    <td><img src={Icmore} className='img-fluid' alt='ic_more'></img></td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Mirasol Resort</td>
                                    <td>250</td>
                                    <td>05 Person</td>
                                    <td>Swimming Pool,24-hour Room Service,SmokeDetector,Intercom,Elevator/ Lift.,Housekeeping,Free Parking.</td>
                                    <td><img src={Icmore} className='img-fluid' alt='ic_more'></img></td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Mirasol Resort</td>
                                    <td>250</td>
                                    <td>05 Person</td>
                                    <td>Swimming Pool,24-hour Room Service,SmokeDetector,Intercom,Elevator/ Lift.,Housekeeping,Free Parking.</td>
                                    <td><img src={Icmore} className='img-fluid' alt='ic_more'></img></td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Mirasol Resort</td>
                                    <td>250</td>
                                    <td>05 Person</td>
                                    <td>Swimming Pool,24-hour Room Service,SmokeDetector,Intercom,Elevator/ Lift.,Housekeeping,Free Parking.</td>
                                    <td><img src={Icmore} className='img-fluid' alt='ic_more'></img></td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>Mirasol Resort</td>
                                    <td>250</td>
                                    <td>05 Person</td>
                                    <td>Swimming Pool,24-hour Room Service,SmokeDetector,Intercom,Elevator/ Lift.,Housekeeping,Free Parking.</td>
                                    <td><img src={Icmore} className='img-fluid' alt='ic_more'></img></td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>Mirasol Resort</td>
                                    <td>250</td>
                                    <td>05 Person</td>
                                    <td>Swimming Pool,24-hour Room Service,SmokeDetector,Intercom,Elevator/ Lift.,Housekeeping,Free Parking.</td>
                                    <td><img src={Icmore} className='img-fluid' alt='ic_more'></img></td>
                                </tr>
                            </tbody> */}
                            <tbody>
                                {filteredData.map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.rooms}</td>
                                        <td>{item.personSharing}</td>
                                        <td>{item.facilities}</td>
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
                                    <li><a href='#'><img src='/img/ic_pagination_prev.svg' alt="ic_pagination_prev" /></a></li>
                                    <li className="course-item active"><a className='active' href='#'>1</a></li>
                                    <li className="course-item"><a href='#'>2</a></li>
                                    <li><a href='#'><img src='/img/ic_pagination_next.svg'
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
