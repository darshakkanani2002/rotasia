import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function HotelFacility() {
    const [hotelFacility, setHotelFacility] = useState([]);
    const [hotelFacilityData, setHotelFacilityData] = useState({
        HotelFacility: ''
    })

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('http://localhost:3030/HotelFacility').then(response => {
            console.log("Hotel Facility data===>", response.data);
            setHotelFacility(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3030/HotelFacility', hotelFacilityData).then(response => {
            console.log("Hotel Facility Data Add Successfully", response.data);
            fetchData();
            setHotelFacilityData({ HotelFacility: '' });
        }).catch(error => {
            console.log(error);
        })
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3030/HotelFacility/${id}`).then(response => {
            console.log("Deleted Successfully Hotel Facility data ===>", response.data);
            fetchData();
        }).catch(error => {
            console.log(error)
        })
    }


    return (
        <div>
            <div className='d-flex align-items-center  bg-white py-2 px-4 align-items-center justify-content-between dashboard-title-text mb-3'>
                <div>
                    <h5 className='mb-0'>Hotel Facility</h5>
                </div>
                <div>
                    <div className='d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center'>
                        <div>
                            <div className='mx-2 mb-2 mb-lg-0'><img src='/img/ic_import.svg' alt="ic_import" /><span className='import-text fw-medium'> Import</span></div>
                        </div>
                        <div>
                            <button type='button' className='create-admin-btn fw-medium px-4 py-2' data-bs-toggle="modal" data-bs-target="#exampleModal12">Create Hotel Facility</button>
                            {/* <!-- Modal --> */}
                            <div className="modal fade" id="exampleModal12" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content pt-4">
                                        <button type="button" className="btn-close position-absolute popup-btn-close z-1" data-bs-dismiss="modal" aria-label="Close"></button>
                                        <div className="text-center create-admin-text">
                                            <h3 className='mb-0'>Create Hotel Facility</h3>
                                        </div>
                                        <form onSubmit={handleSubmit}>
                                            <div className="modal-body my-4">
                                                <label htmlFor="" className='master-popup-lable mb-2'>Hotel Facility Name</label>
                                                <input type="text" value={hotelFacilityData.HotelFacility} placeholder='Enter here' className='master-popup-input px-3' onChange={(e) => setHotelFacilityData({ ...hotelFacilityData, HotelFacility: e.target.value })} />
                                            </div>
                                            <div className="text-center pb-3">
                                                <button type="submit" className='allocate-room-popup-btn' data-bs-dismiss="modal">Save</button>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 col-lg-3'>
                        <div>
                            <input type='text' className='adminlist-search-input transportlist-search-input px-5' placeholder='Search here' onChange={(e) => setSearchQuery(e.target.value)}></input>
                        </div>
                    </div>
                </div>
                <div className='pt-4 px-3'>
                    <div className='table-responsive'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Hotel Facility</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {hotelFacility.length === 0 ? (
                                    <tr className='text-center'>
                                        <td colSpan="2">No records found</td>
                                    </tr>
                                ) : (
                                    hotelFacility.map((data, id) => (
                                        <tr key={id}>
                                            <td>{data.HotelFacility}</td>
                                            <td>
                                                <img src='/img/ic_delate.svg' onClick={() => handleDelete(data.id)} className='img-fluid mx-1' alt='ic_delate' ></img>
                                                <img src='/img/ic_edit_01.svg' className='img-fluid mx-1' alt="ic_edit_01" />
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
