import React from 'react'

export default function Sargentnamelist() {
    return (
        <div>
            <div className='d-flex flex-wrap bg-white py-2 px-4 align-items-center justify-content-between dashboard-title-text'>
                <div>
                    <h5 className='mb-0'>Sargent List</h5>
                </div>
                <div>
                    <div type='button' data-bs-toggle="modal" data-bs-target="#staticBackdrop11">
                        <button type='button' className='create-admin-btn fw-medium px-4 py-2'>Create Sargent</button>
                    </div>
                    {/* Create Sargent Modal */}
                    <div className="modal fade" id="staticBackdrop11" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered sargent-list-popup">
                            <div className="modal-content create-help-desk-content pt-4">
                                <button type="button" className="btn-close position-absolute popup-btn-close z-1" data-bs-dismiss="modal" aria-label="Close"></button>
                                <div className="text-center create-admin-text">
                                    <h3 className='mb-0'>Create Sargent</h3>
                                </div>
                                <div className="modal-body mt-5 align-items-center mt-4">
                                    <form>
                                        <div className='container-fluid'>
                                            <div className='row'>
                                                <div className='col-12 col-lg-4'>
                                                    <div className='mb-3'>
                                                        <label htmlFor="formGroupExampleInput1" className="create-admin-popup-label">First Name</label>
                                                        <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput1" placeholder="Enter First Name" />
                                                    </div>
                                                </div>
                                                <div className='col-12 col-lg-4'>
                                                    <div className='mb-3'>
                                                        <label htmlFor="formGroupExampleInput2" className="create-admin-popup-label">Middle Name</label>
                                                        <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput2" placeholder="Enter Middle Name" />
                                                    </div>
                                                </div>
                                                <div className='col-12 col-lg-4'>
                                                    <div className='mb-3'>
                                                        <label htmlFor="formGroupExampleInput3" className="create-admin-popup-label">Last Name</label>
                                                        <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput3" placeholder="Enter Last Name" />
                                                    </div>
                                                </div>
                                                <div className='col-12 col-lg-4'>
                                                    <div className='mb-3'>
                                                        <label htmlFor="formGroupExampleInput4" className="create-admin-popup-label">Contrack Number</label>
                                                        <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput4" placeholder="Enter Contrack Number" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center mt-5 pb-3">
                                                <button type="button" className='allocate-room-popup-btn' data-bs-dismiss="modal">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='d-none'>
                <div className='text-center create-admin-text position-relative mb-5'>
                    <h3 className='mb-0'>Sargent Name List</h3>
                    <img src='/img/ic_back.svg' className='position-absolute start-0 bottom-50' alt="ic_back" />
                </div>
                <div className='mt-5'>
                    <div className='container'>
                        <div className='table-responsive-md'>
                            <table className='helpdesk-table table-striped'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Contact Number</th>
                                    </tr>
                                </thead>
                                <tbody className='helpdesk-table-body'>
                                    <tr>
                                        <td>Kevin Ronakbhai Patel</td>
                                        <td>+91 85200 15285 / +91 8521 52015</td>
                                    </tr>
                                    <tr>
                                        <td>Rohil Manubhai Jain</td>
                                        <td>+91 85200 15285 / +91 8521 52015</td>
                                    </tr>
                                    <tr>
                                        <td>Paras Parshotambhai Rajput</td>
                                        <td>+91 85200 15285 / +91 8521 52015</td>
                                    </tr>
                                    <tr>
                                        <td>Kevin Ronakbhai Patel</td>
                                        <td>+91 85200 15285 / +91 8521 52015</td>
                                    </tr>
                                    <tr>
                                        <td>Kevin Ronakbhai Patel</td>
                                        <td>+91 85200 15285 / +91 8521 52015</td>
                                    </tr>
                                    <tr>
                                        <td>Kevin Ronakbhai Patel</td>
                                        <td>+91 85200 15285 / +91 8521 52015</td>
                                    </tr>
                                    <tr>
                                        <td>Kevin Ronakbhai Patel</td>
                                        <td>+91 85200 15285 / +91 8521 52015</td>
                                    </tr>
                                    <tr>
                                        <td>Kevin Ronakbhai Patel</td>
                                        <td>+91 85200 15285 / +91 8521 52015</td>
                                    </tr>
                                    <tr>
                                        <td>Kevin Ronakbhai Patel</td>
                                        <td>+91 85200 15285 / +91 8521 52015</td>
                                    </tr>
                                    <tr>
                                        <td>Kevin Ronakbhai Patel</td>
                                        <td>+91 85200 15285 / +91 8521 52015</td>
                                    </tr>
                                    <tr>
                                        <td>Kevin Ronakbhai Patel</td>
                                        <td>+91 85200 15285 / +91 8521 52015</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
