import React from 'react'

export default function UserSponsor() {
    return (
        <div>
            <div className='d-flex flex-wrap bg-white justify-content-center justify-content-lg-between align-items-center dashboard-title-text px-5'>
                <div>
                    <h5 className='mb-0'>Sponsor</h5>
                </div>
                <div>
                    <div type='button' data-bs-toggle="modal" data-bs-target="#staticBackdrop25">
                        <button type='button' className='create-admin-btn fw-medium px-4 py-2'>Create Sponsor</button>
                    </div>
                    {/* create sponsor modal */}
                    <div className="modal fade" id="staticBackdrop25" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered user-sponsor-popup">
                            <div className="modal-content pt-4">
                                <button type="button" className="btn-close position-absolute popup-btn-close z-1" data-bs-dismiss="modal" aria-label="Close"></button>
                                <div className="text-center create-admin-text">
                                    <h3 className='mb-0'>Create Sponsor</h3>
                                </div>
                                <form action="?">
                                    <div className="modal-body my-4">
                                        <div className='row'>
                                            <div className='col-12 col-lg-3 mb-3'>
                                                <label className='master-popup-lable'>First Name</label>
                                                <input type="text" placeholder='Enter First Name' className='master-popup-input px-3' />
                                            </div>
                                            <div className='col-12 col-lg-4 mb-3'>
                                                <label className='master-popup-lable'>Middle Name</label>
                                                <input type="text" placeholder='Enter Middle Name' className='master-popup-input px-3' />
                                            </div>
                                            <div className='col-12 col-lg-5 mb-3'>
                                                <label className='master-popup-lable'>Last Name</label>
                                                <input type="text" placeholder='Enter Last Name' className='master-popup-input px-3' />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12 col-lg-5'>
                                                <div className='row'>
                                                    <div className='col-12 col-lg-12 mb-3'>
                                                        <label className='master-popup-lable'>Company Name</label>
                                                        <input type="text" placeholder='Enter Company Name' className='master-popup-input px-3' />
                                                    </div>
                                                    <div className='col-12 col-lg-12 mb-3'>
                                                        <label className='master-popup-lable'>Address</label>
                                                        <input type="text" placeholder='Street Address' className='master-popup-input px-3' />
                                                    </div>
                                                    <div className='col-12 col-md-6 col-lg-8 mb-3'>
                                                        <input type="text" placeholder='Landmark' className='master-popup-input px-3' />
                                                    </div>
                                                    <div className='col-12 col-md-6 col-lg-4 mb-3'>
                                                        <input type="text" placeholder='Pincode' className='master-popup-input px-3' />
                                                    </div>
                                                    <div className='col-12 col-lg-6 mb-3'>
                                                        <div className='position-relative'>
                                                            <select name='vehicletype' id='vehicletype01' className='master-popup-input px-4'>
                                                                <option>City</option>
                                                            </select>
                                                            <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                                        </div>
                                                    </div>
                                                    <div className='col-12 col-lg-6 mb-3'>
                                                        <div className='position-relative'>
                                                            <select name='vehicletype' id='vehicletype01' className='master-popup-input px-4'>
                                                                <option>State</option>
                                                            </select>
                                                            <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                                        </div>
                                                    </div>
                                                    <div className='col-12 col-lg-6 mb-3'>
                                                        <div className='position-relative'>
                                                            <select name='vehicletype' id='vehicletype01' className='master-popup-input px-4'>
                                                                <option>Country</option>
                                                            </select>
                                                            <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-12 col-lg-7'>
                                                <div className='row'>
                                                    <div className='col-12 col-lg-12 mb-3'>
                                                        <div>
                                                            <label htmlFor="formGroupExampleInput1" className="create-admin-popup-label">Company Logo</label>
                                                            <div className='file-upload user-sponsor-popup-photo'>
                                                                <div className='registration-input-file'>
                                                                    <img src='/img/icon_gallery.svg' alt="icon_gallery" className='mb-2' />
                                                                    <h3 className='type-file-text'> Upload Logo </h3>
                                                                </div>
                                                                <input type='file' className='registration-form-input' placeholder='Enter Your Emergency no' ></input>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-12 col-lg-12 mb-3'>
                                                        <label className='master-popup-lable'>Website</label>
                                                        <input type="text" placeholder='Enter Website' className='master-popup-input px-3' />
                                                    </div>
                                                    <div className='col-12 col-lg-12 mb-3'>
                                                        <label className='master-popup-lable'>Details</label>
                                                        <input type="text" placeholder='Write Down' className='master-popup-input px-3' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center pb-3">
                                        <button type="button" className='allocate-room-popup-btn' data-bs-dismiss="modal">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
