import React, { Component } from 'react'
import Imglogin from '../img/img_login_01.png'
import Imgtimeline02 from '../img/timetine_02.png'
import Icemail from '../img/ic_email.svg'
import Iccall from '../img/ic_call.svg'
import Icwhatsapp from '../img/ic_whatapp.svg'
import Icdate from '../img/ic_date.svg'
import { Link } from 'react-router-dom'

export default class Registrationperson2 extends Component {
    render() {
        return (
            <div>
                <div className='container-fluid pt-5 ps-0'>
                    <div className='row mt-5'>
                        <div className='col-12 col-lg-6'>
                            <img src={Imglogin} alt='img_login_01' className='img-fluid'></img>
                        </div>
                        <div className='col-12 col-lg-6 px-4 px-lg-5 mt-4'>
                            <div className='mb-4 registration-form-heading'>
                                <h2 className='display-4 fw-bolder mb-3'>Registration</h2>
                                <h3 className='fw-bolder'>We Would Like to know you better</h3>
                            </div>
                            {/* <div className='mb-5'>
                                <img src={Imgtimeline02} className='img-fluid' alt='timetine_02'></img>
                            </div> */}
                            {/* <div className='mt-3 registration-form-title mb-4'>
                                <h2>You <span className='registration-form-are'>Are:</span><span className='registration-required-ic'>*</span></h2>
                            </div> */}
                            <div className='mt-3 registration-form-title mb-4'>
                                <h2>Personal Details</h2>
                            </div>
                            <div className='registration-from-first-person p-2 mb-3'>
                                <h6 className='mb-0 fw-normal'>Second Person Details</h6>
                            </div>

                            <form>
                                <div className='mt-3'>
                                    <div className='row mb-4'>
                                        <div className='col-12 col-lg-4 media-width'>
                                            <div className='registration-category-back px-3 mb-4 mb-lg-0'>
                                                <div className='d-flex align-items-center justify-content-between py-3'>
                                                    <label htmlFor='rotaractor' className='registration-form-label'>Rotaractor/ Rotarian</label>
                                                    {/* <input type="radio" id="rotaractor" name="category" value="ROTARACTOR"></input> */}
                                                    <label className="radio-container me-2" htmlFor='rotaractor'>
                                                        <input type="radio" id='rotaractor' name='category' value='ROTARACTOR' />
                                                        <span className="checkmarkradio"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-lg-4 media-width'>
                                            <div className='registration-category-back px-3'>
                                                <div className='d-flex align-items-center justify-content-between py-3'>
                                                    <label htmlFor='guest' className='registration-form-label'>Guest</label>
                                                    {/* <input type="radio" id="guest" name="category" value="GUEST"></input> */}
                                                    <label className="radio-container me-2" htmlFor='guest'>
                                                        <input type="radio" id='guest' name='category' value='GUEST' />
                                                        <span className="checkmarkradio"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-12 col-lg-6 mb-4 mb-lg-0'>
                                        <div>
                                            <div>
                                                <label className='mb-3 registration-form-label'>District No. Of Person 2</label><br></br>
                                                <select className='registration-form-select'>
                                                    <option>Select District No.</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-6 mb-4'>
                                        <div>
                                            <div>
                                                <label className='mb-3 registration-form-label'>Club Name of Person 2</label><br></br>
                                                <select className='registration-form-select'>
                                                    <option value='Select Club Name'>Select Club Name</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-12 col-lg-4 mb-4'>
                                        <div>
                                            <label className='mb-3 registration-form-label'>First Name<span>*</span></label><br></br>
                                            <input type='text' className='registration-form-input' placeholder='Enter First name'></input>
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-4 mb-4'>
                                        <div>
                                            <label className='mb-3 registration-form-label'>Middle Name<span>*</span></label><br></br>
                                            <input type='text' className='registration-form-input' placeholder='Enter Middle name'></input>
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-4 mb-4'>
                                        <div>
                                            <label className='mb-3 registration-form-label'>Last Name<span>*</span></label><br></br>
                                            <input type='text' className='registration-form-input' placeholder='Enter Last name'></input>
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-4 mb-4 mb-lg-0 media-width'>
                                        <div>
                                            <label className='mb-3 registration-form-label'>Email Address Person 2</label><br></br>
                                            <div className='position-relative'>
                                                <input type='email' className='registration-form-input' placeholder='Enter your email address'></input>
                                                <img src={Icemail} className='img-fluid registration-ic-mail' alt='ic_email'></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-4 mb-4 mb-lg-0 media-width'>
                                        <div>
                                            <label className='mb-3 registration-form-label'>Date of Birth Person 2</label><br></br>
                                            <div className='position-relative'>
                                                <input type='date' className='registration-form-input' placeholder='Enter your birthdate'></input>
                                                <img src={Icdate} className='img-fluid registration-ic-mail pb-1' alt="ic_date" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-4 mb-4 media-width'>
                                        <div>
                                            <label className='mb-3 registration-form-label'>Gender Person 2</label><br></br>
                                            {/* <input type='email' className='registration-form-input' placeholder='Enter your birthdate'></input> */}
                                            <div className='d-flex'>
                                                <label className="label-container me-2">Male
                                                    <input type="radio" id='male' name='gender' value='MALE' />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="label-container me-2">Female
                                                    <input type="radio" id='female' name='gender' value='FEMALE' />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="label-container">Other
                                                    <input type="radio" id='other' name='gender' value='OTHER' />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            {/* <label className='mx-2'><input type='radio' id='male' name='gender' value='MALE'></input> Male</label>
                                            <label className='mx-2'><input type='radio' id='female' name='gender' value='FEMALE'></input> Female</label>
                                            <label className='mx-2'><input type='radio' id='other' name='gender' value='OTHER'></input> Other</label> */}
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-4 mb-4 media-width'>
                                        <div>
                                            <label className='mb-3 registration-form-label'>Mobile No.Person 2</label><br></br>
                                            <div className='position-relative'>
                                                <input type='text' className='registration-form-input' placeholder='Enter your mobile No.'></input>
                                                <img src={Iccall} className='img-fluid registration-ic-mail pb-1' alt='ic_call'></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-4 mb-4 media-width'>
                                        <div>
                                            <label className='mb-3 registration-form-label'>Whatsapp No. Person 2</label><br></br>
                                            <div className='position-relative'>
                                                <input type='text' className='registration-form-input' placeholder='Enter your whatsapp No.'></input>
                                                <img src={Icwhatsapp} className='img-fluid registration-ic-mail pb-1' alt='ic_whatapp'></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-4 mb-4 media-width'>
                                        <div>
                                            <label className='mb-3 registration-form-label'>T-shirt Size Person 2<span>*</span></label><br></br>
                                            <select className='registration-form-select'>
                                                <option>Select Your T-shirt size</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className='text-end text-center text-lg-end  mt-lg-2 pt-4 pt-lg-5'>
                                        <Link to='/registrationperson2_02'><button type="submit" className='login-get-otp-btn'>Next</button></Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
