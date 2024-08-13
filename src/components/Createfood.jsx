import React from 'react'

export default function Createfood() {
    return (
        <div>
            <div className='d-flex flex-wrap bg-white justify-content-center justify-content-lg-between align-items-center dashboard-title-text px-5'>
                <div className='admin-list-text mb-2 mb-lg-0'>
                    <h5 className='mb-0 fw-medium'>Create Food Menu </h5>
                </div>
            </div>

            <div className='container-fluid'>
                <div className='bg-white p-2 mt-3'>
                    <div className='d-flex flex-wrap align-items-center'>
                        <label htmlFor="date" className='me-2 create-admin-popup-label'>Date Select</label>
                        <div className='food-date-section d-flex flex-wrap align-items-center pe-4'>
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

                    <div className='row'>
                        <div className='col-12 col-lg-10'>
                            <div className='row'>
                                <div className='col-12 col-lg-6 mt-3'>
                                    <div className='d-flex flex-wrap align-items-center'>
                                        <label htmlFor="date" className='me-2 create-admin-popup-label text-nowrap'>Time Schedule</label>
                                        <div className='food-date-section d-flex flex-wrap align-items-center ps-4 pe-4'>
                                            <label className="label-container mb-0 me-4 create-admin-popup-label ">Breakfast
                                                <input type="radio" id='breakfast' name='timeschedule' value='BREAKFAST' />
                                                <span className="checkmark"></span>
                                            </label>
                                            <label className="label-container mb-0 me-4 create-admin-popup-label">Lunch
                                                <input type="radio" id='lunch' name='timeschedule' value='LUNCH' />
                                                <span className="checkmark"></span>
                                            </label>
                                            <label className="label-container mb-0 me-4 create-admin-popup-label ">High Tea
                                                <input type="radio" id='high-tea' name='timeschedule' value='HIGH-TEA' />
                                                <span className="checkmark"></span>
                                            </label>
                                            <label className="label-container mb-0 create-admin-popup-label ">Dinner
                                                <input type="radio" id='dinner' name='timeschedule' value='DINNER' />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-lg-6 mt-3'>
                                    <div className='d-flex align-items-center'>
                                        <label htmlFor="date" className='me-2 create-admin-popup-label '>Food Category</label>
                                        <div className='food-date-section d-flex flex-wrap align-items-center justify-content-center ps-4 pe-4 w-100'>
                                            <label className="label-container mb-0 me-4 create-admin-popup-label ">Veg
                                                <input type="radio" id='veg' name='food' value='VEG' />
                                                <span className="checkmark"></span>
                                            </label>
                                            <label className="label-container mb-0 me-4 create-admin-popup-label ">Non-Veg
                                                <input type="radio" id='non-veg' name='food' value='NON-VEG' />
                                                <span className="checkmark"></span>
                                            </label>
                                            <label className="label-container mb-0 create-admin-popup-label ">Jain
                                                <input type="radio" id='jain' name='food' value='JAIN' />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div>
                            <div className='col-12 col-lg-10 mt-3'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <label htmlFor="" className='create-admin-popup-label '>Food Item Name</label>
                                    </div>
                                    <div>
                                        <div type='button' data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                            <div className='food-item-ic-plus d-flex align-items-center justify-content-center'>
                                                <img src="/img/ic_plus.svg" alt="ic_plus" className='img-fluid' />
                                            </div>
                                        </div>
                                        {/* Add Food Item Model */}
                                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered food-add-popup">
                                                <div className="modal-content food-add-popup-content pt-4">
                                                    <button type="button" className="btn-close position-absolute popup-btn-close z-1" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    <div className="text-center create-admin-text">
                                                        <h3 className='mb-0'>Add Food Item</h3>
                                                    </div>
                                                    <div className="modal-body d-flex align-items-center  my-4">
                                                        <input type="text" placeholder='Enter Food Item Name' className='master-popup-input px-3' />
                                                    </div>
                                                    <div className="text-center pb-3">
                                                        <button type="button" className='allocate-room-popup-btn' data-bs-dismiss="modal">Save</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 col-lg-10 mt-2'>
                                <div className='food-item-name'>
                                    <div>
                                        1.Vegetable Sandwich
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-5'>
                    <button type="button" className="create-admin-submit-btn">
                        Submit
                    </button>
                </div>

            </div>

        </div>
    )
}
