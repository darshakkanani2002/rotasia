import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Sponsor() {
    const [sponsor, setSponsor] = useState([]);
    const [sponsorData, setSponsorData] = useState({
        SponsorType: ''
    });
    const [editedSponsorData, setEditedSponsorData] = useState({
        id: '',
        SponsorType: ''
    });
    const [editModalOpen, setEditModalOpen] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('http://localhost:3030/Sponsor')
            .then(response => {
                console.log("Sponsor data===>", response.data);
                setSponsor(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3030/Sponsor', sponsorData)
            .then(response => {
                console.log("Sponsor Data Add Successfully", response.data);
                fetchData();
                setSponsorData({ SponsorType: '' });
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3030/Sponsor/${id}`)
            .then(response => {
                console.log("Deleted Successfully Sponsor data ===>", response.data);
                fetchData();
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleEdit = (data) => {
        setEditedSponsorData(data);
        setEditModalOpen(true);
    };

    const handleUpdate = () => {
        axios.put(`http://localhost:3030/Sponsor/${editedSponsorData.id}`, editedSponsorData)
            .then(response => {
                console.log("Updated Sponsor Data ===>", response.data);
                setEditModalOpen(false);
                fetchData();
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            <div className='d-flex align-items-center bg-white py-2 px-4 align-items-center justify-content-between dashboard-title-text mb-3'>
                <div>
                    <h5 className='mb-0'>Sponsor Type</h5>
                </div>
                <div>
                    <div className='d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center'>
                        <div>
                            <div className='mx-2 mb-2 mb-lg-0'><img src='/img/ic_import.svg' alt="ic_import" /><span className='import-text fw-medium'> Import</span></div>
                        </div>
                        <div>
                            <button type='button' className='create-admin-btn fw-medium px-3 py-2' data-bs-toggle="modal" data-bs-target="#exampleModal17">Create Sponsor Type</button>
                            {/* <!-- Modal --> */}
                            <div className="modal fade" id="exampleModal17" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <form onSubmit={handleSubmit}>
                                        <div className="modal-content pt-4">
                                            <button type="button" className="btn-close position-absolute popup-btn-close z-1" onClick={() => setEditModalOpen(false)} aria-label="Close"></button>
                                            <div className="text-center create-admin-text">
                                                <h3 className='mb-0'>Create Sponsor</h3>
                                            </div>
                                            <div className="modal-body my-4">
                                                <div className='row'>
                                                    <div className='col-12 col-lg-12'>
                                                        <label htmlFor="sponsorType" className='master-popup-lable mb-2'>Sponsor Name</label>
                                                        <input type="text" value={sponsorData.SponsorType} id='sponsorType' className='master-popup-input px-3' onChange={(e) => setSponsorData({ ...sponsorData, SponsorType: e.target.value })} />
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
                            <input type='text' className='adminlist-search-input transportlist-search-input px-5' placeholder='Search here' onChange={(e) => setSearchQuery(e.target.value)}></input>
                        </div>
                    </div>
                </div>
                <div className='pt-4 px-3'>
                    <div className='table-responsive'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Sponsor Type</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sponsor.length === 0 ? (
                                    <tr className='text-center'>
                                        <td colSpan="2">No records found</td>
                                    </tr>
                                ) : (
                                    sponsor.map((data, id) => (
                                        <tr key={id}>
                                            <td>{data.SponsorType}</td>
                                            <td>
                                                <img src='/img/ic_delate.svg' onClick={() => handleDelete(data.id)} className='img-fluid mx-1' alt='ic_delate' ></img>
                                                <img type='button' data-bs-toggle="modal" data-bs-target="#editModal" src='/img/ic_edit_01.svg' onClick={() => handleEdit(data)} className='img-fluid mx-1' alt="ic_edit_01" />
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Edit Modal */}
            <div className={`modal fade ${editModalOpen ? 'show' : ''}`} id="editModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <form onSubmit={handleUpdate}>
                        <div className="modal-content pt-4">
                            <button type="button" className="btn-close position-absolute popup-btn-close z-1" onClick={() => setEditModalOpen(false)} aria-label="Close"></button>
                            <div className="text-center create-admin-text">
                                <h3 className='mb-0'>Edit Sponsor</h3>
                            </div>
                            <div className="modal-body my-4">
                                <div className='row'>
                                    <div className='col-12 col-lg-12'>
                                        <label htmlFor="sponsorType" className='master-popup-lable mb-2'>Sponsor Name</label>
                                        <input type="text" value={editedSponsorData.SponsorType} id='sponsorType' className='master-popup-input px-3' onChange={(e) => setEditedSponsorData({ ...editedSponsorData, SponsorType: e.target.value })} />
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
    );
}
