import React, { useState } from 'react'

export default function Agendabackside() {
    const [photos, setPhotos] = useState([]);

    const handlePhotoChange = (event) => {
        const files = event.target.files;
        const newPhotos = [];
        for (let i = 0; i < files.length; i++) {
            const url = URL.createObjectURL(files[i]);
            newPhotos.push({ url, file: files[i] });
        }
        setPhotos([...photos, ...newPhotos]);
    };

    const removePhoto = (index) => {
        const newPhotos = [...photos];
        newPhotos.splice(index, 1);
        setPhotos(newPhotos);
    };

    const clearFileInput = () => {
        // Clearing the input value by setting it to an empty string
        document.getElementById('fileInput').value = '';
    };

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
                    <h5 className='mb-0'>Back Team</h5>
                </div>
                <div>
                    <div type='button' data-bs-toggle="modal" data-bs-target="#staticBackdrop06">
                        <button type='button' className='create-admin-btn fw-medium p-2'>Create Back Team</button>
                    </div>

                    {/* Add Back Team */}
                    <div className="modal fade" id="staticBackdrop06" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered add-hospital-popup">
                            <div className="modal-content pt-4">
                                <button type="button" className="btn-close position-absolute popup-btn-close z-1" data-bs-dismiss="modal" aria-label="Close"></button>
                                <div className="text-center create-admin-text">
                                    <h3 className='mb-0'>Create Back Team</h3>
                                </div>
                                <div className="modal-body mt-4">
                                    <form>
                                        <div className='container-fluid'>
                                            <div className='row'>
                                                <div className='col-12 col-lg-4'>
                                                    <div className="mb-3">
                                                        <label htmlFor="formGroupExampleInput1" className="create-admin-popup-label">First Name</label>
                                                        <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput1" placeholder="Enter First Name" />
                                                    </div>
                                                </div>
                                                <div className='col-12 col-lg-4'>
                                                    <div className="mb-3">
                                                        <label htmlFor="formGroupExampleInput2" className="create-admin-popup-label">Middle Name</label>
                                                        <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput2" placeholder="Enter Middle Name" />
                                                    </div>
                                                </div>
                                                <div className='col-12 col-lg-4'>
                                                    <div className="mb-3">
                                                        <label htmlFor="formGroupExampleInput3" className="create-admin-popup-label">Last Name</label>
                                                        <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput3" placeholder="Street Address" />
                                                    </div>
                                                </div>
                                                <div className='col-12 col-lg-8'>
                                                    <div className='row'>
                                                        <div className='col-12 col-lg-6'>
                                                            <div className="mb-3">
                                                                <label htmlFor="formGroupExampleInput4" className="create-admin-popup-label">Mobile No.</label>
                                                                <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput4" placeholder="Enter Mobile No." />
                                                            </div>
                                                        </div>
                                                        <div className='col-12 col-lg-6'>
                                                            <div className="mb-3">
                                                                <label htmlFor="formGroupExampleInput5" className="create-admin-popup-label">Designation</label>
                                                                <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput5" placeholder="Enter Designation" />
                                                            </div>
                                                        </div>
                                                        <div className='col-12 col-lg-12'>
                                                            <div className='mb-3'>
                                                                <label htmlFor="formGroupExampleInput5" className="create-admin-popup-label">Short Introduction</label>
                                                                <textarea name="introduction" id="intro" className='create-admin-popup-input w-100 px-2' placeholder='Write'></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-12 col-lg-4'>
                                                    <div className='mb-3'>
                                                        <label htmlFor="formGroupExampleInput5" className="create-admin-popup-label">Photos(max 5 Photos)</label>
                                                        <div className='file-upload agenda-popup-front-side-photo'>
                                                            <div className='registration-input-file'>
                                                                <h3 className='type-file-text'>Add Photos</h3>
                                                                <h3 className='type-file-text'> {selectedName || "(Max Size 7 Mb per image)"}</h3>
                                                            </div>
                                                            <input type='file' className='registration-form-input' placeholder='Enter Your Emergency no' onChange={handlePhotoChange}></input>
                                                            <div className='selected-photos d-flex flex-wrap'>
                                                                {photos.map((photo, index) => (
                                                                    <div key={index} className="selected-photo-container position-relative mx-2">
                                                                        <img src={photo.url} alt={`Selected Photo ${index + 1}`} className="selected-photo agenda-popup-image" />
                                                                        <img src='/img/ic_popup_close.svg' onClick={() => { removePhoto(index); clearFileInput(); }} alt="ic_popup_close" className='close-button' />
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="text-center pb-3">
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

            {/* old design */}
            <div className='d-none'>
                <div className='text-center create-admin-text position-relative mb-5'>
                    <h3 className='mb-0'>Sitting Arrangement</h3>
                    <img src='/img/ic_back.svg' className='position-absolute start-0 bottom-50' alt="ic_back" />
                </div>
                <div className='container'>
                    <form>
                        <div className='row'>
                            <div className='col-12 col-lg-6 mb-4'>
                                <label htmlFor="exampleFormControlInput1" className="create-admin-label mb-2">Event Name</label>
                                <input type="text" className="create-admin-input px-4" id="exampleFormControlInput1" placeholder="Enter Event Name" required />
                            </div>
                            <div className='col-12 col-lg-6 mb-4'>
                                <label htmlFor="exampleFormControlInput2" className="create-admin-label mb-2">Event Time</label>
                                <div className='position-relative'>
                                    <input type="time" className="create-admin-input px-4" id="exampleFormControlInput2" placeholder="Select Time" required />
                                    <img src='/img/ic_time.svg' className='agenda-front-side-time-ic' alt="ic_time" />
                                </div>
                            </div>
                            <div className='col-12 col-lg-6 mb-4'>
                                <label htmlFor="exampleFormControlInput4" className="create-admin-label mb-2">Arrangement Person</label>
                                <div type="button" data-bs-toggle="modal" data-bs-target="#exampleModal01">
                                    <div className='position-relative'>
                                        <select className='create-admin-select px-4'>
                                            <option>Select Person</option>
                                        </select>
                                        <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                    </div>
                                </div>
                                {/* <!-- Modal-01 --> */}
                                <div className="modal fade" id="exampleModal01" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="create-admin-text text-center pt-3 text-center">
                                                <h3 className="modal-title fs-5" id="exampleModalLabel">Arrangment Person</h3>
                                            </div>
                                            <div className="modal-body arrangement-person-body ps-0">
                                                <ul className='list-unstyled agenda-back-person-popup'>
                                                    <li>
                                                        <label className="checkmark-popup-container mb-0">Rameshbhai Balubhai Patel
                                                            <input type="checkbox" />
                                                            <span className="checkmarkboxpopup"></span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="checkmark-popup-container mb-0">Rameshbhai Balubhai Patel
                                                            <input type="checkbox" />
                                                            <span className="checkmarkboxpopup"></span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="checkmark-popup-container mb-0">Rameshbhai Balubhai Patel
                                                            <input type="checkbox" />
                                                            <span className="checkmarkboxpopup"></span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="checkmark-popup-container mb-0r">Rameshbhai Balubhai Patel
                                                            <input type="checkbox" />
                                                            <span className="checkmarkboxpopup"></span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="checkmark-popup-container mb-0">Rameshbhai Balubhai Patel
                                                            <input type="checkbox" />
                                                            <span className="checkmarkboxpopup"></span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="checkmark-popup-container mb-0">Rameshbhai Balubhai Patel
                                                            <input type="checkbox" />
                                                            <span className="checkmarkboxpopup"></span>
                                                        </label>
                                                    </li>

                                                    <li>
                                                        <label className="checkmark-popup-container mb-0">Rameshbhai Balubhai Patel
                                                            <input type="checkbox" />
                                                            <span className="checkmarkboxpopup"></span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="text-center py-4">
                                                {/* <button type="button" className="registartion-prev-btn me-4" data-bs-dismiss="modal">Cancel</button> */}
                                                <button type="button" className="registration-next-btn" data-bs-dismiss="modal">Ok</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className='col-12 col-lg-6 mb-4'>
                                <label htmlFor="exampleFormControlInput4" className="create-admin-label mb-2">Coordination Name & No.</label>
                                <div type="button" data-bs-toggle="modal" data-bs-target="#exampleModal02">
                                    <div className='position-relative'>
                                        <select className='create-admin-select px-4'>
                                            <option>Select Coordination Name & No.</option>
                                        </select>
                                        <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                    </div>
                                </div>
                                {/* <!-- Modal-02 --> */}
                                <div className="modal fade" id="exampleModal02" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered agenda-coordinate-name-popup">
                                        <div className="modal-content">
                                            <div className="create-admin-text text-center pt-3 text-center">
                                                <h3 className="modal-title fs-5" id="exampleModalLabel">Co-Ordinator Name & No.</h3>
                                            </div>
                                            <div className='container-fluid'>
                                                <div className='row'>
                                                    <div className='col-12 col-lg-6 mt-4'>
                                                        <div>
                                                            <input type='text' className='adminlist-search-input px-5' placeholder='Search here'></input>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-body overflow-y-scroll arrangement-person-body arrangement-coordinator-body ps-0">
                                                <ul className='list-unstyled agenda-back-person-popup'>
                                                    <li>
                                                        <label className="checkmark-popup-container mb-0">Rameshbhai Balubhai Patel <span className='ps-5'>+91 85201 85201</span>
                                                            <input type="checkbox" />
                                                            <span className="checkmarkboxpopup"></span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="checkmark-popup-container mb-0">Rameshbhai Balubhai Patel <span className='ps-5'>+91 85201 85201</span>
                                                            <input type="checkbox" />
                                                            <span className="checkmarkboxpopup"></span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="checkmark-popup-container mb-0">Rameshbhai Balubhai Patel <span className='ps-5'>+91 85201 85201</span>
                                                            <input type="checkbox" />
                                                            <span className="checkmarkboxpopup"></span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="checkmark-popup-container mb-0">Rameshbhai Balubhai Patel <span className='ps-5'>+91 85201 85201</span>
                                                            <input type="checkbox" />
                                                            <span className="checkmarkboxpopup"></span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="checkmark-popup-container mb-0">Rameshbhai Balubhai Patel <span className='ps-5'>+91 85201 85201</span>
                                                            <input type="checkbox" />
                                                            <span className="checkmarkboxpopup"></span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="checkmark-popup-container mb-0">Rameshbhai Balubhai Patel <span className='ps-5'>+91 85201 85201</span>
                                                            <input type="checkbox" />
                                                            <span className="checkmarkboxpopup"></span>
                                                        </label>
                                                    </li>

                                                    <li>
                                                        <label className="checkmark-popup-container">Rameshbhai Balubhai Patel <span className='ps-5'>+91 85201 85201</span>
                                                            <input type="checkbox" />
                                                            <span className="checkmarkboxpopup"></span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="checkmark-popup-container">Rameshbhai Balubhai Patel <span className='ps-5'>+91 85201 85201</span>
                                                            <input type="checkbox" />
                                                            <span className="checkmarkboxpopup"></span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="checkmark-popup-container">Rameshbhai Balubhai Patel <span className='ps-5'>+91 85201 85201</span>
                                                            <input type="checkbox" />
                                                            <span className="checkmarkboxpopup"></span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="checkmark-popup-container">Rameshbhai Balubhai Patel <span className='ps-5'>+91 85201 85201</span>
                                                            <input type="checkbox" />
                                                            <span className="checkmarkboxpopup"></span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="text-center py-4">
                                                {/* <button type="button" class="registartion-prev-btn me-4" data-bs-dismiss="modal">Cancel</button> */}
                                                <button type="button" className="registration-next-btn" data-bs-dismiss="modal">Ok</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-lg-6 mb-4'>
                                <label htmlFor="exampleFormControlInput4" className="create-admin-label mb-2">Arrangement Item</label>
                                <div type="button" data-bs-toggle="modal" data-bs-target="#exampleModal03">
                                    <div className='position-relative'>
                                        <select className='create-admin-select px-4'>
                                            <option>Select Arrangement</option>
                                        </select>
                                        <img src='/img/ic_dropdown.svg' alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                    </div>
                                </div>
                                {/* <!-- Modal-03 --> */}
                                <div className="modal fade" id="exampleModal03" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered agenda-coordinate-name-popup">
                                        <div className="modal-content">
                                            <div className="create-admin-text text-center pt-3 text-center">
                                                <h3 className="modal-title fs-5" id="exampleModalLabel">Co-Ordinator Name & No.</h3>
                                            </div>
                                            <div className="modal-body overflow-y-scroll arrangement-person-body ps-0">
                                                <ul className='list-unstyled agenda-back-person-popup'>
                                                    <li>
                                                        <label className="checkmark-popup-container mb-0">Chair Arrangement
                                                            <input type="checkbox" />
                                                            <span className="checkmarkboxpopup"></span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="checkmark-popup-container mb-0">Flowers Arrangement
                                                            <input type="checkbox" />
                                                            <span className="checkmarkboxpopup"></span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="checkmark-popup-container mb-0">On Stage Arrangement
                                                            <input type="checkbox" />
                                                            <span className="checkmarkboxpopup"></span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="checkmark-popup-container mb-0">PPT Arrangement
                                                            <input type="checkbox" />
                                                            <span className="checkmarkboxpopup"></span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className="checkmark-popup-container mb-0">Sound Arrangement
                                                            <input type="checkbox" />
                                                            <span className="checkmarkboxpopup"></span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="text-center py-4">
                                                {/* <button type="button" className="registartion-prev-btn me-4" data-bs-dismiss="modal">Cancel</button> */}
                                                <button type="button" className="registration-next-btn" data-bs-dismiss="modal">Ok</button>
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
                    </form>
                </div>
            </div>
        </div>
    )
}
