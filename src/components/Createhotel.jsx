import React, { useState } from 'react'


export default function Createhotel() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedName, setSelectedName] = useState("");

    const [selectedFile02, setSelectedFile02] = useState(null);
    const [selectedName02, setSelectedName02] = useState("");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setSelectedName(file.name);
    };
    const handleFileChange02 = (event) => {
        const file02 = event.target.files[0];
        setSelectedFile02(file02);
        setSelectedName02(file02.name);
    };
    return (
        <div>
            <div className='d-flex flex-wrap bg-white justify-content-center justify-content-lg-between align-items-center dashboard-title-text px-5'>
                <div className='admin-list-text mb-2 mb-lg-0'>
                    <h5 className='mb-0 fw-medium'>Create Hotel</h5>
                </div>
            </div>

            <div className='px-4 mt-3'>
                <div className='container-fluid bg-white py-3'>
                    <div>
                        <div className='me-0 me-lg-3 mb-3 mb-lg-0'>
                            <div className='d-flex align-items-center mb-4'>
                                <div>
                                    <div className='select-icon-layer1 create-hotel-detail-layer'>
                                        <div className='select-icon-layer2'>
                                            <img src='/img/ic_status.svg' alt="ic_status" />
                                        </div>
                                    </div>
                                </div>
                                <div className='ms-3 create-hotel-detail-text'>
                                    <h6 className='mb-0'>Hotel Details</h6>
                                </div>
                            </div>
                        </div>

                        {/* hotel name, facility, google map link */}
                        <div className='row'>
                            <div className='col-12 col-lg-3'>
                                <div className="mb-3">
                                    <label htmlFor="formGroupExampleInput1" className="create-admin-popup-label">Hotel Name</label>
                                    <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput1" placeholder="Enter Hotel Name" />
                                </div>
                            </div>
                            <div className='col-12 col-lg-3'>
                                <div className="mb-3">
                                    <label htmlFor="formGroupExampleInput2" className="create-admin-popup-label">Facility</label>
                                    <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput2" placeholder="Enter First Name" />
                                </div>
                            </div>
                            <div className='col-12 col-lg-3'>
                                <div className="mb-3">
                                    <label htmlFor="formGroupExampleInput2" className="create-admin-popup-label">Map</label>
                                    <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput2" placeholder="Google map link" />
                                </div>
                            </div>
                        </div>
                        {/* photo and video upload */}
                        <div className='row'>
                            <div className='col-12 col-lg-3'>
                                <label className='registration-form-label'>Photos <span className='create-hotel-max-3-text' >(max 3 images)</span> </label>
                                <div className='file-upload'>
                                    <div className='registration-input-file'>
                                        <img src='/img/icon_gallery.svg' alt="icon_gallery" className='mb-2' />
                                        <h3 className='type-file-text'> {selectedName || "Add Photos(Max Size 7 Mb per image)"}</h3>
                                    </div>
                                    <input type='file' className='registration-form-input' placeholder='Enter Your Emergency no' onChange={handleFileChange}></input>
                                </div>
                            </div>

                            <div className='col-12 col-lg-3'>
                                <label className='registration-form-label'>Videos <span className='create-hotel-max-3-text' >(max 3 video)</span></label>
                                <div className='file-upload'>
                                    <div className='registration-input-file'>
                                        <img src='/img/ic_video.svg' alt="ic_video" className='mb-2' />
                                        <h3 className='type-file-text'> {selectedName02 || "Video file Uploading(max size256Mb per video)"}</h3>
                                    </div>
                                    <input type='file' className='registration-form-input' placeholder='Enter Your Emergency no' onChange={handleFileChange02}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='px-4 mt-3'>
                <div className='container-fluid bg-white py-3'>
                    <div>
                        <div className='me-0 me-lg-3 mb-3 mb-lg-0'>
                            <div className='d-flex align-items-center mb-4'>
                                <div>
                                    <div className='select-icon-layer1 create-hotel-detail-layer'>
                                        <div className='select-icon-layer2'>
                                            <img src='/img/ic_double-bed_1.svg' alt="ic_double-bed_1" />
                                        </div>
                                    </div>
                                </div>
                                <div className='ms-3 create-hotel-detail-text'>
                                    <h6 className='mb-0'>Room Types</h6>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div className='row'>
                                <div className='col-12 col-lg-2'>
                                    <label className='create-admin-popup-label'>Room Type</label>
                                    <div className='position-relative'>
                                        <select className='create-admin-popup-input px-2'>
                                            <option>select</option>
                                        </select>
                                        <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                    </div>
                                </div>
                                <div className='col-12 col-lg-2'>
                                    <label className='create-admin-popup-label'>Total Rooms</label>
                                    <div className='position-relative'>
                                        <select className='create-admin-popup-input px-2'>
                                            <option>select</option>
                                        </select>
                                        <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                    </div>
                                </div>
                                <div className='col-12 col-lg-2'>
                                    <label className='create-admin-popup-label'>Per sharing</label>
                                    <div className='position-relative'>
                                        <select className='create-admin-popup-input px-2'>
                                            <option>select</option>
                                        </select>
                                        <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                    </div>
                                </div>
                                <div className='col-12 col-lg-3'>
                                    <label htmlFor="formGroupExampleInput2" className="create-admin-popup-label">Room No.</label>
                                    <div type="button" data-bs-toggle="modal" data-bs-target="#exampleModal5">
                                        <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput2" placeholder="Enter Room No." />
                                    </div>
                                    {/* <!-- Allocate Room Modal --> */}
                                    <div className="modal fade" id="exampleModal5" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content pt-4">
                                                <button type="button" className="btn-close position-absolute popup-btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                <div className="text-center create-admin-text">
                                                    <h3 className='mb-0'>Allocate Room No.</h3>
                                                </div>
                                                <div className="modal-body my-4">
                                                    <input type="text" placeholder='Enter Room No.' className='allocate-room-popup-input px-3' />
                                                </div>
                                                <div className="text-center pb-3">
                                                    {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary">Save changes</button> */}
                                                    <button type="button" className='allocate-room-popup-btn' data-bs-dismiss="modal">Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-12 text-center mt-5 py-2'>
                <button type="button" className="create-admin-submit-btn">
                    Submit
                </button>
            </div>



            <div className='d-none'>
                <div className='text-center create-admin-text position-relative mb-5'>
                    <h3 className='mb-0'>Create Hotel Detail</h3>
                    <img src='/img/ic_back.svg' className='position-absolute start-0 bottom-50' alt="ic_back" />
                </div>

                <div className='row'>
                    <div className='col-12 col-lg-6 mb-4 media-50'>
                        <label className='mb-3 registration-form-label'>Resort Name</label><br></br>
                        <input type='text' className='create-hotel-input px-4' placeholder='Enter Your Resort Name'></input>
                    </div>
                    <div className='col-12 col-lg-1 mb-4 media-50'>
                        <label className='mb-3 registration-form-label'>Total Room</label><br></br>
                        {/* <input type='text' className='registration-resident-input px-4' placeholder='Enter Your Resort Name'></input> */}
                        <div className='position-relative'>
                            <select className='create-admin-select px-4'>
                                <option>14</option>
                            </select>
                            <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                        </div>
                    </div>
                    <div className='col-12 col-lg-2 mb-4 media-50'>
                        <label className='mb-3 registration-form-label'>Room No.</label><br></br>
                        {/* <input type='text' className='registration-resident-input px-4' placeholder='Enter Your Resort Name'></input> */}
                        <div className='position-relative'>
                            <select className='create-admin-select px-4'>
                                <option>202</option>
                            </select>
                            <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                        </div>
                    </div>
                    <div className='col-12 col-lg-3 mb-4 media-50'>
                        <label className='mb-3 registration-form-label'>Per Sharing Person</label><br></br>
                        {/* <input type='text' className='registration-resident-input px-4' placeholder='Enter Your Resort Name'></input> */}
                        <div className='position-relative'>
                            <select className='create-admin-select px-4'>
                                <option>02</option>
                            </select>
                            <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                        </div>
                    </div>

                    <div className='col-12'>
                        <div className='row'>
                            <label className='registration-form-label'>Facility</label>
                            <div className='create-hotel-facility-back mb-4 pt-3'>
                                <div className='row'>
                                    <div className='col-12 col-lg-2 media-33'>
                                        <label className="checkmark-hotel-container">Swimming Pool
                                            <input type="checkbox" />
                                            <span className="checkmarkboxhotel"></span>
                                        </label>
                                    </div>
                                    <div className='col-12 col-lg-2 media-33'>
                                        <label className="checkmark-hotel-container">24-hour Room Service
                                            <input type="checkbox" />
                                            <span className="checkmarkboxhotel"></span>
                                        </label>
                                    </div>
                                    <div className='col-12 col-lg-2 media-33'>
                                        <label className="checkmark-hotel-container">Smoke Detector
                                            <input type="checkbox" />
                                            <span className="checkmarkboxhotel"></span>
                                        </label>
                                    </div>
                                    <div className='col-12 col-lg-2 media-33'>
                                        <label className="checkmark-hotel-container">Intercom
                                            <input type="checkbox" />
                                            <span className="checkmarkboxhotel"></span>
                                        </label>
                                    </div>
                                    <div className='col-12 col-lg-2 media-33'>
                                        <label className="checkmark-hotel-container">Elevator/Lift.
                                            <input type="checkbox" />
                                            <span className="checkmarkboxhotel"></span>
                                        </label>
                                    </div>
                                    <div className='col-12 col-lg-2 media-33'>
                                        <label className="checkmark-hotel-container">Housekeeping
                                            <input type="checkbox" />
                                            <span className="checkmarkboxhotel"></span>
                                        </label>
                                    </div>
                                    <div className='col-12 col-lg-2 media-33'>
                                        <label className="checkmark-hotel-container">Free Parking
                                            <input type="checkbox" />
                                            <span className="checkmarkboxhotel"></span>
                                        </label>
                                    </div>
                                    <div className='col-12 col-lg-2 media-33'>
                                        <label className="checkmark-hotel-container">Free Parking
                                            <input type="checkbox" />
                                            <span className="checkmarkboxhotel"></span>
                                        </label>
                                    </div>
                                    <div className='col-12 col-lg-2 media-33'>
                                        <label className="checkmark-hotel-container">Free Parking
                                            <input type="checkbox" />
                                            <span className="checkmarkboxhotel"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-lg-7'>
                        <div className='row'>
                            <div className='col-12 col-lg-12 mb-4'>
                                <label className='mb-3 registration-form-label'>Location</label><br></br>
                                <input type='text' className='create-hotel-input px-4' placeholder='Enter Location'></input>
                            </div>
                            <div className='col-12 col-lg-3 mb-4 media-50'>
                                <div className='position-relative'>
                                    <select className='registration-resident-input px-4'>
                                        <option>Pincode</option>
                                    </select>
                                    <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                </div>
                            </div>

                            <div className='col-12 col-lg-3 mb-4 media-50'>
                                <div className='position-relative'>
                                    <select className='registration-resident-input px-4'>
                                        <option>City</option>
                                    </select>
                                    <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                </div>
                            </div>

                            <div className='col-12 col-lg-3 mb-4 media-50'>
                                <div className='position-relative'>
                                    <select className='registration-resident-input px-4'>
                                        <option>State</option>
                                    </select>
                                    <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                </div>
                            </div>

                            <div className='col-12 col-lg-3 mb-4 media-50'>
                                <div className='position-relative'>
                                    <select className='registration-resident-input px-4'>
                                        <option>Country</option>
                                    </select>
                                    <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                </div>
                            </div>

                            <div className='col-12 col-lg-6'>
                                <label className='registration-form-label mb-3'>Photos <span className='create-hotel-max-3-text' >(max 3 images)</span> </label>
                                <div className='file-upload'>
                                    <div className='registration-input-file'>
                                        <img src='/img/icon_gallery.svg' alt="icon_gallery" className='mb-2' />
                                        <h3 className='type-file-text'> {selectedName || "Add Photos(Max Size 7 Mb per image)"}</h3>
                                    </div>
                                    <input type='file' className='registration-form-input' placeholder='Enter Your Emergency no' onChange={handleFileChange}></input>
                                </div>
                            </div>

                            <div className='col-12 col-lg-6'>
                                <label className='registration-form-label mb-3'>Videos <span className='create-hotel-max-3-text' >(max 3 video)</span></label>
                                <div className='file-upload'>
                                    <div className='registration-input-file'>
                                        <img src='/img/ic_video.svg' alt="ic_video" className='mb-2' />
                                        <h3 className='type-file-text'> {selectedName02 || "Video file Uploading(max size256Mb per video)"}</h3>
                                    </div>
                                    <input type='file' className='registration-form-input' placeholder='Enter Your Emergency no' onChange={handleFileChange02}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='col-12 col-lg-5 mt-3 mt-lg-0'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.130165263862!2d72.85454477586197!3d20.45984630707426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0dbd1813ab7d1%3A0xf01035ab51c0291c!2sGold%20Beach%20Villa!5e0!3m2!1sen!2sin!4v1712314856045!5m2!1sen!2sin" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div> */}

                    <div className='col-12 text-center mt-5 py-2'>
                        <button type="button" className="create-admin-submit-btn">
                            Submit
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

