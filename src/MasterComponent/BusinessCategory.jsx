import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function BusinessCategory() {
    const [business, setBusiness] = useState([]);
    const [businessData, setBusinessData] = useState({
        BusinessCategory: ''
    })

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('http://localhost:3030/BusinessCategory').then(response => {
            console.log("Business Category data===>", response.data);
            setBusiness(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3030/BusinessCategory', businessData).then(response => {
            console.log("Business Category Data Add Successfully", response.data);
            fetchData();
            setBusinessData({ BusinessCategory: '' });
        }).catch(error => {
            console.log(error);
        })
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3030/BusinessCategory/${id}`).then(response => {
            console.log("Deleted Successfully Business Category data ===>", response.data);
            fetchData();
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <div>
            <div className='d-flex align-items-center  bg-white py-2 px-4 align-items-center justify-content-between dashboard-title-text mb-3'>
                <div>
                    <h5 className='mb-0'>Busienss Category</h5>
                </div>
                <div>
                    <div>
                        <div className='d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center'>
                            <div>
                                <div type="button" data-bs-toggle="modal" data-bs-target="#exampleModal21">
                                    <div className='mx-2 mb-2 mb-lg-0'><img src='/img/ic_import.svg' alt="ic_import" /><span className='import-text fw-medium'> Import</span></div>
                                </div>
                                {/* <!--import-Modal --> */}
                                <div className="modal fade" id="exampleModal21" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered import-here-popup">
                                        <div className="modal-content px-3">
                                            <div className='pt-3'>
                                                {/* <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1> */}
                                                <button type="button" className="btn-close float-end position-relative z-1" data-bs-dismiss="modal" aria-label="Close"></button>
                                                <div className="create-admin-text text-center">
                                                    <h3 id="exampleModalLabel">Import Here</h3>
                                                    {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                                                </div>
                                            </div>
                                            <div className="modal-body">
                                                <div className='d-flex'>
                                                    <div>
                                                        <img src='/img/ic_excel.svg' alt="ic_excel" />
                                                    </div>
                                                    <div className='px-3 import-here-text'>
                                                        <p className='mb-0'>Download a Sample File and compare it to your import file to ensure you have the file perfect for the import.</p>
                                                        <input type="file" className='import-here-input w-100 mt-2' />
                                                        <h6 className='mt-2 mb-0'>Maximum file size: 10 MB | File format XLSX</h6>
                                                        <div className='d-flex flex-wrap justify-content-between mt-2'>
                                                            <div>
                                                                <button className='import-here-download-btn px-4 py-2 fw-medium'>Download Sample File</button>
                                                            </div>
                                                            <div>
                                                                <button className="import-here-cancel-btn px-4 py-2 fw-medium mx-1">Cancel</button>
                                                                <button className='import-here-upload-btn px-4 py-2 fw-medium mx-1'>Upload</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button type='button' className='create-admin-btn fw-medium px-4 py-2' data-bs-toggle="modal" data-bs-target="#exampleModal9">Create Busienss Category</button>
                                {/* <!-- Modal --> */}
                                <div className="modal fade" id="exampleModal9" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content pt-4">
                                            <button type="button" className="btn-close position-absolute popup-btn-close z-1" data-bs-dismiss="modal" aria-label="Close"></button>
                                            <div className="text-center create-admin-text">
                                                <h3 className='mb-0'>Create District No.</h3>
                                            </div>
                                            <form onSubmit={handleSubmit}>
                                                <div className="modal-body my-4">
                                                    <label htmlFor="" className='master-popup-lable mb-2'>Business Category Name</label>
                                                    <input type="text" value={businessData.BusinessCategory} placeholder='Enter here' className='master-popup-input px-3' onChange={(e) => setBusinessData({ ...businessData, BusinessCategory: e.target.value })} />
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
                                    <th>Business Category Name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            {/* <tbody>
                                <tr>
                                    <td>Hotel Business</td>
                                    <td><img src='/img/ic_delate.svg' onClick={() => districtDelete(index)} className='img-fluid mx-1' alt='ic_delate'></img>
                                        <img src='/img/ic_edit_01.svg' className='img-fluid mx-1' alt="ic_edit_01" /></td>
                                </tr>
                            </tbody> */}
                            <tbody>
                                {business.length === 0 ? (
                                    <tr className='text-center'>
                                        <td colSpan="2">No records found</td>
                                    </tr>
                                ) : (
                                    business.map((data, id) => (
                                        <tr key={id}>
                                            <td>{data.BusinessCategory}</td>
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
