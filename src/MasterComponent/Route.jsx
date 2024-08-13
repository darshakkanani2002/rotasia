import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Route() {
    const [route, setRoute] = useState([]);
    const [routeData, setRouteData] = useState({
        RouteFrom: '',
        RouteTo: ''
    })
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('http://localhost:3030/Route').then(response => {
            console.log("Route data===>", response.data);
            setRoute(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3030/Route', routeData).then(response => {
            console.log("Route Data Add Successfully", response.data);
            fetchData();
            setRouteData({ RouteFrom: '', RouteTo: '' });
        }).catch(error => {
            console.log(error);
        })
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3030/Route/${id}`).then(response => {
            console.log("Deleted Successfully Route data ===>", response.data);
            fetchData();
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            <div className='d-flex align-items-center  bg-white py-2 px-4 align-items-center justify-content-between dashboard-title-text mb-3'>
                <div>
                    <h5 className='mb-0'>Route</h5>
                </div>
                <div>
                    <div className='d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center'>
                        <div>
                            <div className='mx-2 mb-2 mb-lg-0'><img src='/img/ic_import.svg' alt="ic_import" /><span className='import-text fw-medium'> Import</span></div>
                        </div>
                        <div>
                            <button type='button' className='create-admin-btn fw-medium px-4 py-2' data-bs-toggle="modal" data-bs-target="#exampleModal14">Create Route</button>
                            {/* <!-- Modal --> */}
                            <div className="modal fade" id="exampleModal14" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <form onSubmit={handleSubmit}>
                                        <div className="modal-content pt-4">
                                            <button type="button" className="btn-close position-absolute popup-btn-close z-1" data-bs-dismiss="modal" aria-label="Close"></button>
                                            <div className="text-center create-admin-text">
                                                <h3 className='mb-0'>Create Route</h3>
                                            </div>
                                            <div className="modal-body my-4">
                                                <div className='row'>
                                                    <div className='col-12 col-lg-6'>
                                                        <label htmlFor="" className='master-popup-lable mb-2' >Vehicle Route From</label>
                                                        <input type="text" value={routeData.RouteFrom} placeholder='Enter here' className='master-popup-input px-3' onChange={(e) => setRouteData({ ...routeData, RouteFrom: e.target.value })} />
                                                    </div>
                                                    <div className='col-12 col-lg-6'>
                                                        <label htmlFor="" className='master-popup-lable mb-2'>Vehicle Route To</label>
                                                        <input type="text" value={routeData.RouteTo} placeholder='Enter here' className='master-popup-input px-3' onChange={(e) => setRouteData({
                                                            ...routeData, RouteTo: e.target.value
                                                        })} />
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="text-center pb-3">
                                                <button type="submit" className='allocate-room-popup-btn' data-bs-dismiss="modal">Save</button>
                                            </div>
                                        </div>
                                    </form>
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
                            <input type='text' className='adminlist-search-input transportlist-search-input px-5' placeholder='Search here'></input>
                        </div>
                    </div>
                </div>
                <div className='pt-4 px-3'>
                    <div className='table-responsive'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Route From</th>
                                    <th>Route To</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            {/* <tbody>
                                <tr>
                                    <td>Hotel</td>
                                    <td>Airport</td>
                                    <td><img src='/img/ic_delate.svg' className='img-fluid mx-1' alt='ic_delate'></img>
                                        <img src='/img/ic_edit_01.svg' className='img-fluid mx-1' alt="ic_edit_01" />
                                    </td>
                                </tr>
                            </tbody> */}

                            <tbody>
                                {route.map((data, id) => (
                                    <tr key={id}>
                                        <td>{data.RouteFrom}</td>
                                        <td>{data.RouteTo}</td>
                                        <td>
                                            <img
                                                src='/img/ic_delate.svg'
                                                className='img-fluid mx-1'
                                                alt='Delete'
                                                onClick={() => handleDelete(data.id)}
                                            />
                                            <img
                                                src='/img/ic_edit_01.svg'
                                                className='img-fluid mx-1'
                                                alt='Edit'
                                            />
                                        </td>
                                    </tr>
                                ))}
                                {route.length === 0 && (
                                    <tr>
                                        <td colSpan="3" className="text-center">No records found</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
