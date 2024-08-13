import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function AssignedPosition() {
    const [assignPosition, setAssignPosition] = useState([]);
    const [assignPositionData, setAssignPositionData] = useState({
        AssignPosition: ''
    })
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('http://localhost:3030/AssignPosition').then(response => {
            console.log("Assign Position data===>", response.data);
            setAssignPosition(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3030/AssignPosition', assignPositionData).then(response => {
            console.log("Assign Position Data Add Successfully", response.data);
            fetchData();
            setAssignPositionData({ AssignPosition: '' });
        }).catch(error => {
            console.log(error);
        })
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3030/AssignPosition/${id}`).then(response => {
            console.log("Deleted Successfully Assign Position data ===>", response.data);
            fetchData();
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <div>
            <div className='d-flex align-items-center  bg-white py-2 px-4 align-items-center justify-content-between dashboard-title-text mb-3'>
                <div>
                    <h5 className='mb-0'>Assign Position</h5>
                </div>
                <div>
                    <div className='d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center'>
                        <div>
                            <div className='mx-2 mb-2 mb-lg-0'><img src='/img/ic_import.svg' alt="ic_import" /><span className='import-text fw-medium'> Import</span></div>
                        </div>
                        <div>
                            <button type='button' className='create-admin-btn fw-medium px-4 py-2' data-bs-toggle="modal" data-bs-target="#exampleModal11">Create Assign Position</button>
                            {/* <!-- Modal --> */}
                            <div className="modal fade" id="exampleModal11" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">

                                    <div className="modal-content pt-4">
                                        <button type="button" className="btn-close position-absolute popup-btn-close z-1" data-bs-dismiss="modal" aria-label="Close"></button>
                                        <div className="text-center create-admin-text">
                                            <h3 className='mb-0'>Create Assign Position</h3>
                                        </div>
                                        <form onSubmit={handleSubmit}>
                                            <div className="modal-body my-4">
                                                <label htmlFor="" className='master-popup-lable mb-2'>Assign Position Name</label>
                                                <input type="text" value={assignPositionData.AssignPosition} placeholder='Enter here' className='master-popup-input px-3' onChange={(e) => setAssignPositionData({ ...assignPositionData, AssignPosition: e.target.value })} />
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
                                    <th>Assign Position</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            {/* <tbody>
                                <tr>
                                    <td>abcddnnnn</td>
                                    <td><img src='/img/ic_delate.svg' className='img-fluid mx-1' alt='ic_delate'></img>
                                        <img src='/img/ic_edit_01.svg' className='img-fluid mx-1' alt="ic_edit_01" />
                                    </td>
                                </tr>
                            </tbody> */}
                            <tbody>
                                {assignPosition.length === 0 ? (
                                    <tr className='text-center'>
                                        <td colSpan="2">No records found</td>
                                    </tr>
                                ) : (
                                    assignPosition.map((data, id) => (
                                        <tr key={id}>
                                            <td>{data.AssignPosition}</td>
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
    )
}
