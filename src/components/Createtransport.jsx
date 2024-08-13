import React, { useState } from 'react'

export default function Createtransport() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedName, setSelectedName] = useState("");

    const [selectedFile02, setSelectedFile02] = useState(null);
    const [selectedName02, setSelectedName02] = useState("");

    const [selectedFile03, setSelectedFile03] = useState(null);
    const [selectedName03, setSelectedName03] = useState("");

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
    const [selectedPhotoName, setSelectedPhotoName] = useState("");
    const handleFileChange03 = (e) => {
        const file = e.target.files[0]; // Get the first selected file
        if (file) {
            setSelectedPhotoName(file.name); // Set the selected photo's name in the state
            // You can also handle the file in other ways, such as uploading it or processing it further
        }
    };
    return (
        <div>
            <div className='d-flex flex-wrap bg-white py-2 px-4 align-items-center justify-content-between dashboard-title-text'>
                <div>
                    <h5 className='mb-0'>Create Transport</h5>
                </div>
            </div>

            <div className='px-4 mt-3'>
                <div className='container-fluid bg-white py-3'>
                    <div>
                        {/* Vehicle Detail title */}
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
                                    <h6 className='mb-0'>Vehicle Details</h6>
                                </div>
                            </div>
                        </div>

                        {/* Vehicle detail input*/}
                        <div className='row'>
                            <div className='col-12 col-lg-6'>
                                <div className='row'>
                                    <div className='col-12 col-lg-6 mb-3'>
                                        <label className='create-admin-popup-label'>Vehicle Types</label>
                                        <div className='position-relative'>
                                            <select className='create-admin-popup-input px-2'>
                                                <option>select</option>
                                            </select>
                                            <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-6 mb-3'>
                                        <label className='create-admin-popup-label'>Vehicle Name</label>
                                        <div className='position-relative'>
                                            <select className='create-admin-popup-input px-2'>
                                                <option>select</option>
                                            </select>
                                            <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                        </div>
                                    </div>

                                    <div className='col-12 col-lg-6 mb-3'>
                                        <label className='create-admin-popup-label'>Vehicle Number</label>
                                        <div className='position-relative'>
                                            <select className='create-admin-popup-input px-2'>
                                                <option>select</option>
                                            </select>
                                            <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                        </div>
                                    </div>

                                    <div className='col-12 col-lg-6 mb-3'>
                                        <label htmlFor="formGroupExampleInput2" className="create-admin-popup-label">Vehicle Person capacity</label>
                                        <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput2" placeholder="Enter Vehicle Person Capacity" />
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-lg-3'>
                                <label className='registration-form-label'>Bike/bus Photo</label>
                                <div className='file-upload'>
                                    <div className='registration-input-file'>
                                        <img src='/img/icon_gallery.svg' alt="upload" className='mb-2' />
                                        <h3 className='text-nowrap'> {selectedName || "Drop Your File here"}</h3>
                                    </div>
                                    <input type='file' className='registration-form-input' placeholder='Enter Your Emergency no' onChange={handleFileChange}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Driver Detail */}
                <div className='container-fluid bg-white py-3 mt-3'>
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
                                    <h6 className='mb-0'>Driver Details</h6>
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-12 col-lg-3'>
                                <div className="mb-3">
                                    <label htmlFor="formGroupExampleInput2" className="create-admin-popup-label">Driver Name<span>*</span></label>
                                    <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput2" placeholder="Enter Driver Name" />
                                </div>
                            </div>
                            <div className='col-12 col-lg-3'>
                                <div className="mb-3">
                                    <label htmlFor="formGroupExampleInput2" className="create-admin-popup-label">Driver Mobile No.<span>*</span></label>
                                    <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput2" placeholder="Enter Vehicle Name" />
                                </div>
                            </div>
                            <div className='col-12 col-lg-3'>
                                <div className="mb-3">
                                    <label htmlFor="formGroupExampleInput2" className="create-admin-popup-label">Driver License No.<span>*</span></label>
                                    <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput2" placeholder="Enter Vehicle Number" />
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-12 col-lg-3'>
                                <label className='create-admin-popup-label'>Driver Photo<span>*</span></label>
                                <div className='file-upload'>
                                    <div className='registration-input-file'>
                                        <img src='/img/icon_gallery.svg' alt="upload" className='mb-2' />
                                        <h3 className='text-nowrap'> {selectedName || "Drop Your File here"}</h3>
                                    </div>
                                    <input type='file' className='registration-form-input' placeholder='Enter Your Emergency no' onChange={handleFileChange}></input>
                                </div>
                            </div>
                            <div className='col-12 col-lg-3'>
                                <label className='create-admin-popup-label'>Driver License Photo</label>
                                <div className='file-upload'>
                                    <div className='registration-input-file'>
                                        <img src='/img/icon_gallery.svg' alt="upload" className='mb-2' />
                                        <h3 className='text-nowrap'> {selectedName02 || "Front Side"}</h3>
                                    </div>
                                    <input type='file' className='registration-form-input' placeholder='Enter Your Emergency no' onChange={handleFileChange02}></input>
                                </div>
                            </div>
                            <div className='col-12 col-lg-3'>
                                <label className='registration-form-label'></label>
                                <div className='file-upload'>
                                    <div className='registration-input-file'>
                                        <img src='/img/icon_gallery.svg' alt="upload" className='mb-2' />
                                        <h3 className='text-nowrap'> {selectedPhotoName || "Back side"}</h3>
                                    </div>
                                    <input type='file' className='registration-form-input' placeholder='Enter Your Emergency no' onChange={handleFileChange03}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other Detail */}
                <div className='container-fluid bg-white py-3 mt-3'>
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
                                    <h6 className='mb-0'>Other Details</h6>
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-12 col-lg-3'>
                                <label className='create-admin-popup-label'>Vehicle Route</label>
                                <div className='position-relative'>
                                    <select className='create-admin-popup-input px-2'>
                                        <option>select</option>
                                    </select>
                                    <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                </div>
                            </div>

                            <div className='col-12 col-lg-3'>
                                <label className='create-admin-popup-label'>Co-Ordinator name & No.*</label>
                                <div className='position-relative'>
                                    <select className='create-admin-popup-input px-2'>
                                        <option>select</option>
                                    </select>
                                    <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                </div>
                            </div>

                            <div className='col-12 col-lg-3'>
                                <label className='create-admin-popup-label'>Assign by*</label>
                                <div className='position-relative'>
                                    <select className='create-admin-popup-input px-2'>
                                        <option>select</option>
                                    </select>
                                    <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-5'>
                    <button type="button" className="create-admin-submit-btn">
                        Create Transport
                    </button>
                </div>
            </div>



            <div className='d-none'>
                <div className='d-flex flex-wrap align-items-center justify-content-between mb-5'>
                    <div>
                        <img src='/img/ic_back.svg' alt="ic_back" />
                    </div>
                    <div className='create-admin-text'>
                        <h3 className='mb-0'>Create Transport</h3>
                    </div>
                    <div>
                        <button className='transport-add-new-btn me-0 me-lg-3 mt-3 mt-lg-0 px-3'>Add new Transport</button>
                    </div>
                </div>
                <div className='container-fluid'>
                    <form>
                        <div className='row'>
                            <div className='col-12 col-lg-3 mb-4 media-50'>
                                <label htmlFor="exampleFormControlInput1" className="create-admin-label mb-2">Vehicle Name<span>*</span></label>
                                <input type="text" className="create-admin-input px-4" id="exampleFormControlInput1" placeholder="Select Vehicle name" required />
                            </div>
                            <div className='col-12 col-lg-3 mb-4 media-50'>
                                <label htmlFor="exampleFormControlInput2" className="create-admin-label mb-2">Vehicle Number<span>*</span></label>
                                <input type="text" className="create-admin-input px-4" id="exampleFormControlInput2" placeholder="Enter Vehicle number" required />
                            </div>
                            <div className='col-12 col-lg-3 mb-4 media-50'>
                                <label htmlFor="exampleFormControlInput3" className="create-admin-label mb-2">Driver Name<span>*</span></label>
                                <input type="text" className="create-admin-input px-4" id="exampleFormControlInput3" placeholder="Enter Driver name" required />
                            </div>
                            <div className='col-12 col-lg-3 mb-4 media-50'>
                                <label htmlFor="exampleFormControlInput4" className="create-admin-label mb-2">Driver Mobile no.<span>*</span></label>
                                <input type="text" className="create-admin-input px-4" id="exampleFormControlInput4" placeholder="Enter Driver mobile no." required />
                            </div>

                            <div className='col-12 col-lg-4 mb-4 media-50'>
                                <label htmlFor="exampleFormControlInput4" className="create-admin-label mb-2">Vehicle Types</label>
                                <div className='position-relative'>
                                    <select name='vehicletype' id='vehicletype01' className='create-admin-select px-4'>
                                        <option>Select Vehicle Type</option>
                                    </select>
                                    <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                </div>
                            </div>
                            <div className='col-12 col-lg-4 mb-4 media-50'>
                                <label htmlFor="exampleFormControlInput5" className="create-admin-label mb-2">Vehicle Person Capacity</label>
                                <input type="text" className="create-admin-input px-4" id="exampleFormControlInput5" placeholder="Enter Person Capcity" required />
                            </div>
                            <div className='col-12 col-lg-4 mb-4 media-100'>
                                <label htmlFor="exampleFormControlInput6" className="create-admin-label mb-2">Driver License No.</label>
                                <input type="text" className="create-admin-input px-4" id="exampleFormControlInput6" placeholder="Enter Driver license" required />
                            </div>
                            <div className='col-12 col-lg-4 mb-4'>
                                <label className='registration-form-label mb-3'>Bike/bus Photo</label>
                                <div className='file-upload'>
                                    <div className='registration-input-file'>
                                        <img src='/img/icon_gallery.svg' alt="upload" className='mb-2' />
                                        <h3 className='text-nowrap'> {selectedName || "Drop Your File here"}</h3>
                                    </div>
                                    <input type='file' className='registration-form-input' placeholder='Enter Your Emergency no' onChange={handleFileChange}></input>
                                </div>
                            </div>
                            <div className='col-12 col-lg-4 mb-4'>
                                <label className='registration-form-label mb-3'>Driver Photo</label>
                                <div className='file-upload'>
                                    <div className='registration-input-file'>
                                        <img src='/img/icon_gallery.svg' alt="upload" className='mb-2' />
                                        <h3 className='text-nowrap'> {selectedName02 || "Drop Your File here"}</h3>
                                    </div>
                                    <input type='file' className='registration-form-input' placeholder='Enter Your Emergency no' onChange={handleFileChange02}></input>
                                </div>
                            </div>
                            <div className='col-12 col-lg-4 mb-4'>
                                <label className='registration-form-label mb-3'>Driver License Photo </label>
                                <div className='file-upload'>
                                    <div className='registration-input-file'>
                                        <img src='/img/icon_gallery.svg' alt="upload" className='mb-2' />
                                        <h3 className='text-nowrap'> {selectedPhotoName || "Drop Your File here"}</h3>
                                    </div>
                                    <input type='file' className='registration-form-input' placeholder='Enter Your Emergency no' onChange={handleFileChange03}></input>
                                </div>
                            </div>
                            <div className='col-12 col-lg-12'>
                                <div className='row'>
                                    <div className='col-12 col-lg-6'>
                                        <div className='row'>
                                            <div className='col-12'>
                                                <label htmlFor="exampleFormControlInput7" className="create-admin-label mb-2">Driver Mobile no.<span>*</span></label>
                                            </div>
                                            <div className='col-12 col-lg-6 mb-4'>
                                                <div className='position-relative'>
                                                    <select name='route' id='route01' className='create-admin-select px-4'>
                                                        <option>From Route</option>
                                                    </select>
                                                    <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                                </div>
                                            </div>
                                            <div className='col-12 col-lg-6 mb-4'>
                                                <div className='position-relative'>
                                                    <select name='route' id='route02' className='create-admin-select px-4'>
                                                        <option>To Route</option>
                                                    </select>
                                                    <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-6 mb-4'>
                                        <label htmlFor="exampleFormControlInput8" className="create-admin-label mb-2">Co-Ordinator name & No.<span>*</span></label>
                                        <div className='position-relative'>
                                            <select name='coordinatorname' id='coordinator01' className='create-admin-select px-4'>
                                                <option>Co-Ordinator name & No.</option>
                                            </select>
                                            <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-lg-3 media-50'>
                                <label htmlFor="exampleFormControlInput9" className="create-admin-label mb-2">Assign by<span>*</span></label>
                                <div className='position-relative'>
                                    <select name='assign' id='assign01' className='create-admin-select px-4'>
                                        <option>Select Assign by</option>
                                    </select>
                                    <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                </div>
                            </div>

                            <div className='text-center mt-5'>
                                <button type="button" className="create-admin-submit-btn">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
