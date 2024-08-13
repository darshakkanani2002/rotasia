import React from 'react'

export default function City() {
    return (
        <div>
            <div className='d-flex flex-wrap bg-white justify-content-center justify-content-lg-between align-items-center dashboard-title-text px-5 mb-3'>
                <div>
                    <h5 className='mb-0'>City,State,Country</h5>
                </div>
                <div>
                    <div className='d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center'>
                        <div>
                            <div className='mx-2 mb-2 mb-lg-0'><img src='/img/ic_import.svg' alt="ic_import" /><span className='import-text fw-medium'> Import</span></div>
                        </div>
                        <div>
                            <div type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop24">
                                <button type='button' className='create-admin-btn fw-medium px-4 py-2'>Add Country,State,City</button>
                            </div>
                            {/* City, Country, State Modal */}
                            <div className="modal fade" id="staticBackdrop24" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered city-add-popup">
                                    <div className="modal-content pt-4">
                                        <button type="button" className="btn-close position-absolute popup-btn-close z-1" data-bs-dismiss="modal" aria-label="Close"></button>
                                        <div className="text-center create-admin-text">
                                            <h3 className='mb-0'>Add Country,State,City</h3>
                                        </div>
                                        <form action="?">
                                            <div className="modal-body my-4">
                                                <div className='row'>
                                                    <div className='col-12 col-lg-4'>
                                                        <label htmlFor="" className='master-popup-lable'>Country Name</label>
                                                        <input type="text" placeholder='Enter here' className='master-popup-input px-3' />
                                                    </div>
                                                    <div className='col-12 col-lg-4'>
                                                        <div className="mb-3">
                                                            <label htmlFor="formGroupExampleInput3" className="master-popup-lable">State Name</label>
                                                            <div className='position-relative'>
                                                                <select name='vehicletype' id='vehicletype01' className='master-popup-input px-4'>
                                                                    <option>Select</option>
                                                                </select>
                                                                <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-12 col-lg-4'>
                                                        <div className="mb-3">
                                                            <label htmlFor="formGroupExampleInput3" className="master-popup-lable">City Name</label>
                                                            <div className='position-relative'>
                                                                <select name='vehicletype' id='vehicletype01' className='master-popup-input px-4'>
                                                                    <option>Select</option>
                                                                </select>
                                                                <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center pb-3">
                                                <button type="button" className='allocate-room-popup-btn' data-bs-dismiss="modal">Save</button>
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
                            <input type='text' className='adminlist-search-input transportlist-search-input px-5' placeholder='Search here' ></input>
                        </div>
                    </div>
                </div>
                <div className='pt-4 px-3'>
                    <div className='table-responsive'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Country</th>
                                    <th>State</th>
                                    <th>City</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>India</td>
                                    <td>Gujarat</td>
                                    <td>Surat</td>
                                    <td><img src='/img/ic_delate.svg' className='img-fluid mx-1' alt='ic_delate'></img>
                                        <img src='/img/ic_edit_01.svg'
                                            className='img-fluid mx-1' alt="ic_edit_01" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
