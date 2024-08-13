import React, { useState } from 'react'
import Imglogin from '../img/img_login_01.png'
import Imgtimeline from '../img/timetine.png'
import Icgallery from '../img/icon_gallery.svg'
import { Link } from 'react-router-dom'

export default function Registration03() {
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
            <div className='container-fluid pt-5 ps-lg-0'>
                <div className='row mt-5'>
                    <div className='col-12 col-lg-6'>
                        <img src={Imglogin} alt='img_login_01' className='img-fluid'></img>
                    </div>
                    <div className='col-12 col-lg-6 px-4 px-lg-5 mt-4'>
                        <div className='mb-4 registration-form-heading'>
                            <h2 className='display-4 fw-bolder mb-3'>Registration</h2>
                            <h3>We Would Like to know you better</h3>
                        </div>
                        {/* <div className='mb-5'>
                            <img src={Imgtimeline} className='img-fluid' alt='timetine'></img>
                        </div> */}
                        <div className='mt-3 registration-form-title mb-4'>
                            <h2>Personal Details</h2>
                        </div>
                        <div className='registration-from-first-person p-2 mb-3'>
                            <h6 className='mb-0 fw-normal'>First Person Details</h6>
                        </div>
                        {/* form */}
                        <form>
                            {/* <div className='row'>
                                <div className='col-12 col-lg-6 mb-4 media-width'>
                                    <div>
                                        <label className='mb-3 registration-form-label'>Food Preference<span>*</span></label><br></br>
                                    </div>
                                    <div className='d-flex flex-wrap'>
                                        <label className="label-container me-4">Veg
                                            <input type="radio" id='veg' name='food' value='VEG' />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="label-container me-4">Non-Veg
                                            <input type="radio" id='non-veg' name='food' value='NON-VEG' />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="label-container">Jain
                                            <input type="radio" id='jain' name='food' value='JAIN' />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className='col-12 col-lg-6 mb-4 media-width'>
                                    <div>
                                        <label className='mb-3 registration-form-label'>Emergency no<span>*</span></label><br></br>
                                        <input type='text' className='registration-form-input' placeholder='Enter Your Emergency no'></input>
                                    </div>
                                </div>

                                <div className='col-12 col-lg-4 mb-4 media-width'>
                                    <div>
                                        <div>
                                            <label className='mb-3 registration-form-label'>District Destination</label><br></br>
                                            <input type='text' className='registration-form-input' placeholder='Enter Distric Destination'></input>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-12 col-lg-4 mb-4 media-width'>
                                    <div>
                                        <label className='mb-3 registration-form-label'>Rotasia Designation</label><br></br>
                                        <input type='text' className='registration-form-input' placeholder='Enter First name'></input>
                                    </div>
                                </div>

                                <div className='col-12 col-lg-4 mb-4 media-width'>
                                    <div>
                                        <label className='mb-3 registration-form-label'>Blood Group</label><br></br>
                                        <select className='registration-form-select'>
                                            <option>Select Blood Group</option>
                                        </select>
                                    </div>
                                </div>

                            </div> */}
                            {/* id-proof  */}
                            <div className='row'>
                                <div className='col-12 mb-1'>
                                    <label className='mb-3 registration-form-label'>Id Proof</label><br></br>
                                </div>
                                <div className='col-12 col-md-6 col-lg-4 mb-4'>
                                    <div className='registration-category-back px-3 mb-4 mb-lg-0'>
                                        <div className='d-flex align-items-center justify-content-between py-3'>
                                            <label htmlFor='aadharcard' className='registration-form-label'>Aadhar card</label>
                                            {/* <input type="radio" id="aadharcard" name="proof" value="AADHARCARD"></input> */}
                                            <label className="radio-container me-2" htmlFor='aadharcard'>
                                                <input type="radio" id='aadharcard' name='proof' value='AADHARCARD' />
                                                <span className="checkmarkradio"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-md-6 col-lg-4 mb-4'>
                                    <div className='registration-category-back px-3 mb-4 mb-lg-0'>
                                        <div className='d-flex align-items-center justify-content-between py-3'>
                                            <label htmlFor='licence' className='registration-form-label'>Licence</label>
                                            {/* <input type="radio" id="licence" name="proof" value="LICENCE"></input> */}
                                            <label className="radio-container me-2" htmlFor='licence'>
                                                <input type="radio" id='licence' name='proof' value='LICENCE' />
                                                <span className="checkmarkradio"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-lg-4 mb-4'>
                                    <div className='registration-category-back px-3 mb-4 mb-lg-0'>
                                        <div className='d-flex align-items-center justify-content-between py-3'>
                                            <label htmlFor='passport' className='registration-form-label'>Passport</label>
                                            {/* <input type="radio" id="passport" name="proof" value="PASSPORT"></input> */}
                                            <label className="radio-container me-2" htmlFor='passport'>
                                                <input type="radio" id='passport' name='proof' value='PASSPORT' />
                                                <span className="checkmarkradio"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-lg-12 mb-4'>
                                    <input type='text' className='registration-resident-input px-4' placeholder='Aadhar card No.'></input>
                                </div>
                                <div className='col-12'>
                                    <label className='mb-3 registration-form-label' type='file'>Select Aadhar Card Photo<span>*</span></label><br></br>
                                </div>
                                <div className='col-12 col-lg-6 mt-3 mt-lg-0'>
                                    <div className='file-upload'>
                                        <div className='registration-input-file'>
                                            <img src={Icgallery} alt="upload" className='mb-2' />
                                            <h3> {selectedName || "Drop Your File here front Side"}</h3>
                                        </div>
                                        <input type='file' className='registration-form-input' placeholder='Enter Your Emergency no' onChange={handleFileChange}></input>
                                    </div>
                                </div>
                                <div className='col-12 col-lg-6 mt-3 mt-lg-0'>
                                    {/* <input type='file' className='registration-form-input' placeholder='Enter Your Emergency no'></input> */}
                                    <div className='file-upload'>
                                        <div className='registration-input-file'>
                                            <img src={Icgallery} alt="upload" className='mb-2' />
                                            <h3> {selectedName02 || "Drop Your File here back Side"}</h3>
                                        </div>
                                        <input type='file' className='registration-form-input' placeholder='Enter Your Emergency no' onChange={handleFileChange02}></input>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center text-lg-end mt-lg-2 pt-4 pt-lg-4'>
                                <Link to='/registration02'><button className='registartion-prev-btn mx-4'>Previous</button></Link>
                                <Link to='/registration04'><button type="submit" className='registration-next-btn'>Next</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
