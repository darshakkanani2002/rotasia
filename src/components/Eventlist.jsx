import React from 'react'

export default function Eventlist() {
    return (
        <div>
            <div className='d-flex align-items-center  bg-white py-2 px-4 align-items-center justify-content-between dashboard-title-text mb-3'>
                <div>
                    <h5 className='mb-0'>Event List</h5>
                </div>
                <div>
                    <div type='button' data-bs-toggle="modal" data-bs-target="#staticBackdrop07">
                        <button type='button' className='create-admin-btn fw-medium px-4 py-2'>Create Event</button>
                    </div>
                    <div className="modal fade" id="staticBackdrop07" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered agenda-event-list-popup">
                            <div className="modal-content pt-4">
                                <button type="button" className="btn-close position-absolute popup-btn-close z-1" data-bs-dismiss="modal" aria-label="Close"></button>
                                <div className="text-center create-admin-text">
                                    <h3 className='mb-0'>Create Event</h3>
                                </div>
                                <div className="modal-body mt-4">
                                    <form>
                                        <div className='container-fluid'>
                                            <div className='row'>
                                                <div className='col-12 col-lg-12'>
                                                    <div className='align-items-center'>
                                                        <label htmlFor="date" className='me-2 create-admin-popup-label text-nowrap'>Time Schedule</label>
                                                        <div className='food-date-section d-flex flex-wrap align-items-center justify-content-between pe-4'>
                                                            <label className="checkmark-container create-admin-popup-label">09 January,2025
                                                                <input type="checkbox" />
                                                                <span className="checkmarkbox"></span>
                                                            </label>

                                                            <label className="checkmark-container create-admin-popup-label">10 January,2025
                                                                <input type="checkbox" />
                                                                <span className="checkmarkbox"></span>
                                                            </label>

                                                            <label className="checkmark-container create-admin-popup-label">11 January,2025
                                                                <input type="checkbox" />
                                                                <span className="checkmarkbox"></span>
                                                            </label>

                                                            <label className="checkmark-container create-admin-popup-label">12 January,2025
                                                                <input type="checkbox" />
                                                                <span className="checkmarkbox"></span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-12 col-lg-5'>
                                                    <div className="mb-3">
                                                        <label htmlFor="formGroupExampleInput2" className="create-admin-popup-label">Topic Name</label>
                                                        <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput2" placeholder="Enter Topic Name" />
                                                    </div>
                                                </div>
                                                <div className='col-12 col-lg-7'>
                                                    <label htmlFor="formGroupExampleInput4" className="create-admin-popup-label">Time</label>
                                                    <div className='row'>
                                                        <div className='col-12 col-lg-6'>
                                                            <div className="mb-3">
                                                                <input type="time" className="create-admin-popup-input px-2" id="formGroupExampleInput4" placeholder="Enter Mobile No." />
                                                            </div>
                                                        </div>
                                                        <div className='col-12 col-lg-6'>
                                                            <div className="mb-3">
                                                                <input type="time" className="create-admin-popup-input px-2" id="formGroupExampleInput5" placeholder="Enter Designation" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-12 col-lg-6'>
                                                    <div className='mb-3'>
                                                        <label htmlFor="formGroupExampleInput4" className="create-admin-popup-label">Front Teams</label>
                                                        <div className='position-relative'>
                                                            <select className='create-admin-popup-input px-2'>
                                                                <option>Select Front Teams</option>
                                                            </select>
                                                            <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-12 col-lg-6'>
                                                    <div className='mb-3'>
                                                        <label htmlFor="formGroupExampleInput4" className="create-admin-popup-label">Back Teams</label>
                                                        <div className='position-relative'>
                                                            <select className='create-admin-popup-input px-2'>
                                                                <option>Select Back Teams</option>
                                                            </select>
                                                            <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center mt-3 pb-3">
                                                <button type="button" className='allocate-room-popup-btn' data-bs-dismiss="modal">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/* <div className="text-center pb-3">
                                    <button type="button" className='allocate-room-popup-btn' data-bs-dismiss="modal">Save</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
