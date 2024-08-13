import React, { useState } from 'react'

export default function Agendafrontside() {
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

    // For popup short intro character counter
    const [introduction, setIntroduction] = useState('');
    const maxCharacters = 500; // Maximum characters allowed

    const handleIntroductionChange = (event) => {
        const inputValue = event.target.value;
        setIntroduction(inputValue);
    };
    return (
        <div>
            <div className='d-flex flex-wrap bg-white py-2 px-4 align-items-center justify-content-between dashboard-title-text'>
                <div>
                    <h5 className='mb-0'>Front Team</h5>
                </div>

                <div>
                    <div type='button' data-bs-toggle="modal" data-bs-target="#staticBackdrop05">
                        <button type='button' className='create-admin-btn fw-medium p-2'>Create Front Team</button>
                    </div>
                    {/* Add Front Team Model */}
                    <div className="modal fade" id="staticBackdrop05" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered add-hospital-popup">
                            <div className="modal-content pt-4">
                                <button type="button" className="btn-close position-absolute popup-btn-close z-1" data-bs-dismiss="modal" aria-label="Close"></button>
                                <div className="text-center create-admin-text">
                                    <h3 className='mb-0'>Create Front Team</h3>
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
                                                <div className='col-12 col-lg-4'>
                                                    <div className="mb-3">
                                                        <label htmlFor="formGroupExampleInput4" className="create-admin-popup-label">Mobile No.</label>
                                                        <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput4" placeholder="Enter Mobile No." />
                                                    </div>
                                                </div>
                                                <div className='col-12 col-lg-4'>
                                                    <div className="mb-3">
                                                        <label htmlFor="formGroupExampleInput5" className="create-admin-popup-label">Designation</label>
                                                        <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput5" placeholder="Enter Designation" />
                                                    </div>
                                                </div>
                                                <div className='col-12 col-lg-4'>
                                                    <div className="mb-3">
                                                        <label htmlFor="formGroupExampleInput5" className="create-admin-popup-label">Role</label>
                                                        <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput5" placeholder="Enter Designation" />
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
                                                <div className='col-12 col-lg-8'>
                                                    <div className='mb-3 position-relative'>
                                                        <label htmlFor="formGroupExampleInput5" className="create-admin-popup-label">Short Introduction</label>
                                                        <textarea name="introduction" id="intro" className='create-admin-popup-input agenda-popup-front-side-intro w-100 px-2' placeholder='Write' value={introduction}
                                                            onChange={handleIntroductionChange}></textarea>
                                                        <span className="position-absolute agenda-front-text-count">{introduction.length}/{maxCharacters}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center pb-3">
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
                    <h3 className='mb-0'>Add Front Side</h3>
                    <img src='/img/ic_back.svg' className='position-absolute start-0 bottom-50' alt="ic_back" />
                </div>

                <div className='container'>
                    <form>
                        <div className='row'>
                            <div className='col-12 col-lg-6 mb-4'>
                                <label htmlFor="exampleFormControlInput1" className="create-admin-label mb-2">Speaker Name</label>
                                <input type="text" className="create-admin-input px-4" id="exampleFormControlInput1" placeholder="Enter Speaker Name" required />
                            </div>
                            <div className='col-12 col-lg-6 mb-4'>
                                <label htmlFor="exampleFormControlInput2" className="create-admin-label mb-2">Timing</label>
                                <div className='position-relative'>
                                    <input type="time" className="create-admin-input px-4" id="exampleFormControlInput2" placeholder="Select Time" required />
                                    <img src='/img/ic_time.svg' className='agenda-front-side-time-ic' alt="ic_time" />
                                </div>
                            </div>
                            <div className='col-12 col-lg-6 mb-4'>
                                <label htmlFor="exampleFormControlInput4" className="create-admin-label mb-2">Topic Name</label>
                                <input type="text" className="create-admin-input px-4" id="exampleFormControlInput4" placeholder="Enter Topic Name" required />
                            </div>

                            <div className='col-12 col-lg-6 mb-4'>
                                <label htmlFor="exampleFormControlInput5" className="create-admin-label mb-2">Designation</label>
                                <input type="text" className="create-admin-input px-4" id="exampleFormControlInput5" placeholder="Enter Designation" required />
                            </div>

                            <div className='col-12 col-lg-6 mb-4'>
                                <label htmlFor="exampleFormControlInput6" className="create-admin-label mb-2">Speaker Photo</label>

                                <div>
                                    <input id="fileInput" type="file" className="create-admin-input px-4 pt-2" onChange={handlePhotoChange} multiple />
                                    <div className="selected-photos d-flex flex-wrap">
                                        {/* {photos.map((photo, index) => (
                                            <div key={index} className="selected-photo-container position-relative mt-3 mx-2">
                                                <img src={photo.url} alt={`Selected Photo ${index + 1}`} className="selected-photo" />
                                                <img src='/img/ic_popup_close.svg' onClick={() => { removePhoto(index); clearFileInput(); }} alt="ic_popup_close" className='close-button' />
                                            </div>
                                        ))} */}
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 col-lg-6 mb-4'>
                                <label htmlFor="exampleFormControlInput7" className="create-admin-label mb-2">Short Introduction</label>
                                <textarea name="introduction" className='agenda-front-side-textarea px-4 py-2' placeholder="Short Introduction"></textarea>
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
