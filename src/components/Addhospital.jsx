import React, { useState } from 'react'

export default function Addhospital() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedName, setSelectedName] = useState("");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setSelectedName(file.name);
    };
    return (
        <div>
            <div className='d-flex flex-wrap bg-white py-2 px-4 align-items-center justify-content-between dashboard-title-text'>
                <div>
                    <h5 className='mb-0'>Hospital</h5>
                </div>
                <div>
                    <div type='button' data-bs-toggle="modal" data-bs-target="#staticBackdrop04">
                        <button type='button' className='create-admin-btn fw-medium p-2'>Add Hospital</button>
                    </div>
                    {/* Add Hospital Item Model */}
                    <div className="modal fade" id="staticBackdrop04" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered add-hospital-popup">
                            <div className="modal-content pt-4">
                                <button type="button" className="btn-close position-absolute popup-btn-close z-1" data-bs-dismiss="modal" aria-label="Close"></button>
                                <div className="text-center create-admin-text">
                                    <h3 className='mb-0'>Add Hospital</h3>
                                </div>
                                <div className="modal-body d-flex align-items-center  my-4">
                                    <div className='container-fluid'>
                                        <div className='row'>
                                            <div className='col-12 col-lg-8'>
                                                <div className='row'>
                                                    <div className='col-12 col-lg-6'>
                                                        <div className="mb-3">
                                                            <label htmlFor="formGroupExampleInput1" className="create-admin-popup-label">Hospital Name</label>
                                                            <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput1" placeholder="Enter Hospital name" />
                                                        </div>
                                                    </div>
                                                    <div className='col-12 col-lg-6'>
                                                        <div className="mb-3">
                                                            <label htmlFor="formGroupExampleInput2" className="create-admin-popup-label">Hospital Emergency No.</label>
                                                            <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput2" placeholder="Enter Hospital Emergency No." />
                                                        </div>
                                                    </div>
                                                    <div className='col-12'>
                                                        <div className="mb-3">
                                                            <label htmlFor="formGroupExampleInput2" className="create-admin-popup-label">Hospital Address</label>
                                                            <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput3" placeholder="Street Address" />
                                                        </div>
                                                    </div>

                                                    <div className='col-12 col-md-10 col-lg-10'>
                                                        <div className='mb-3'>
                                                            <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput4" placeholder="Landmark" />
                                                        </div>
                                                    </div>
                                                    <div className='col-12 col-md-2 col-md-2'>
                                                        <div className='mb-3'>
                                                            <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput5" placeholder="Pincode" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-12 col-lg-4'>
                                                <div>
                                                    <label htmlFor="formGroupExampleInput1" className="create-admin-popup-label">Hospital Photo Upload</label>
                                                    <div className='file-upload hospital-popup-img'>
                                                        <div className='registration-input-file'>
                                                            <img src='/img/icon_gallery.svg' alt="icon_gallery" className='mb-2' />
                                                            <h3 className='type-file-text'> {selectedName || "Add Photos(Max Size 7 Mb per image)"}</h3>
                                                        </div>
                                                        <input type='file' className='registration-form-input' placeholder='Enter Your Emergency no' onChange={handleFileChange}></input>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='col-12 col-lg-2'>
                                                <div className='position-relative'>
                                                    <select className='create-admin-popup-input px-2'>
                                                        <option>City</option>
                                                    </select>
                                                    <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                                </div>
                                            </div>
                                            <div className='col-12 col-lg-2'>
                                                <div className='position-relative'>
                                                    <select className='create-admin-popup-input px-2'>
                                                        <option>state</option>
                                                    </select>
                                                    <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                                </div>
                                            </div>
                                            <div className='col-12 col-lg-2'>
                                                <div className='position-relative'>
                                                    <select className='create-admin-popup-input px-2'>
                                                        <option>Country</option>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='d-none'>
                <div className='text-center create-admin-text position-relative mb-5'>
                    <h3 className='mb-0'>Add Hospital</h3>
                    <img src='/img/ic_back.svg' className='position-absolute start-0 bottom-50' alt="ic_back" />
                </div>
                <div className='container'>
                    <form>
                        <div className='row'>
                            <div className='col-12 col-lg-6 mb-4'>
                                <label htmlFor="exampleFormControlInput1" className="create-admin-label mb-2">Hospital Name</label>
                                <input type="text" className="create-admin-input px-4" id="exampleFormControlInput1" placeholder="Enter Hospital name" required />
                            </div>

                            <div className='col-12 col-lg-6 mb-4'>
                                <label htmlFor="exampleFormControlInput2" className="create-admin-label mb-2">Hospital Emergency No.</label>
                                <input type="text" className="create-admin-input px-4" id="exampleFormControlInput2" placeholder="Enter Emergency No." required />
                            </div>

                            <div className='col-12 col-lg-6 mb-4'>
                                <label htmlFor="exampleFormControlInput1" className="create-admin-label mb-2">Hospital Address</label>
                                {/* <input type="text" className="create-admin-input px-4" id="exampleFormControlInput1" placeholder="Enter Emergency No." required /> */}
                                <div className='hospital-address-back px-4 py-3'>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...........</p>
                                </div>
                            </div>
                            <div className='col-12 col-lg-6 mb-4'>
                                <label htmlFor="exampleFormControlInput1" className="create-admin-label mb-2">Hospital Photos</label>
                                <div className='hospital-address-back px-4 py-3'>
                                    <div className='row'>
                                        <div className='col-12 col-md-6 col-lg-3 text-center mb-3 mt-3 mb-lg-0 mt-lg-0'>
                                            <img src='/img/img_hospital_01.png' alt="img_hospital_01" className='img-fluid' />
                                        </div>
                                        <div className='col-12 col-md-6 col-lg-3 text-center mb-3 mb-lg-0'>
                                            <img src='/img/img_hospital_02.png' alt="img_hospital_02" className='img-fluid' />
                                        </div>
                                        <div className='col-12 col-md-6 col-lg-3 text-center mb-3 mb-lg-0'>
                                            <img src='/img/img_hospital_03.png' alt="img_hospital_03" className='img-fluid' />
                                        </div>
                                        <div className='col-12 col-md-6 col-lg-3 text-center mb-3 mb-lg-0'>
                                            <img src='/img/img_hospital_04.png' alt="img_hospital_04" className='img-fluid' />
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
                    </form>

                </div>
            </div>

        </div>
    )
}
