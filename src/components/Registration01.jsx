import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Registration extends Component {
    render() {
        return (
            <div>
                <div className='container-fluid pt-5 ps-0'>
                    <div className='row mt-5'>
                        <div className='col-12 col-lg-6'>
                            <img src='/img/img_login_01.png' alt='img_login_01' className='img-fluid'></img>
                        </div>
                        <div className='col-12 col-lg-6 px-4 px-lg-5 mt-4'>
                            <div className='mb-4 registration-form-heading'>
                                <h2 className='display-4 fw-bolder mb-3'>Registration</h2>
                                <h3>We Would Like to know you better</h3>
                            </div>
                            <div className='mb-3'>
                                <img src='/img/timetine.png' className='img-fluid' alt='timetine'></img>
                            </div>
                            <div className='mt-3 registration-form-title mb-4'>
                                <h2>Personal Details</h2>
                            </div>
                            <form>
                                <div className='mt-3'>
                                    <div className='row mb-4'>
                                        <div className='col-12 col-lg-4 media-width'>
                                            {/* <div className='d-flex'>
                                                <div>

                                                </div>
                                            </div> */}
                                            <div className='registration-category-back px-3 mb-4 mb-lg-0'>
                                                <div className='d-flex align-items-center justify-content-between py-2'>
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
                                            <div className='registration-category-back px-3 registration-guest-width'>
                                                <div className='d-flex align-items-center justify-content-between py-2'>
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
                                    <div className='col-lg-12 mb-4'>
                                        <div>
                                            <label className='mb-3 registration-form-label'>Registration Type<span>*</span></label><br></br>
                                            <select className='registration-form-select'>
                                                <option>Select</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-6 mb-4 mb-lg-0'>
                                        <div>
                                            <div>
                                                <label className='mb-3 registration-form-label'>District No.<span>*</span></label><br></br>
                                                <select className='registration-form-select'>
                                                    <option>Select District No.</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-12 col-lg-6 mb-4'>
                                        <div>
                                            <div>
                                                <label className='mb-3 registration-form-label'>Club Name<span>*</span></label><br></br>
                                                <select className='registration-form-select'>
                                                    <option>Select Club Name</option>
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
                                            <label className='mb-3 registration-form-label'>Email Address<span>*</span></label><br></br>
                                            <div className='position-relative'>
                                                <input type='email' className='registration-form-input' placeholder='Enter your email address'></input>
                                                <img src='/img/ic_email.svg' className='img-fluid registration-ic-mail' alt='ic_email'></img>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-12 col-lg-4 mb-4 mb-lg-0 media-width'>
                                        <div>
                                            <label className='mb-3 registration-form-label'>Date of Birth<span>*</span></label><br></br>
                                            <div className='position-relative'>
                                                <input type='date' className='registration-form-input' placeholder='Enter your birthdate'></input>
                                                <img src='/img/ic_date.svg' className='img-fluid registration-ic-mail pb-1' alt="ic_date" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-12 col-lg-4'>
                                        <div>
                                            <label className='mb-3 registration-form-label'>Gender<span>*</span></label><br></br>
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
                                        </div>
                                    </div>

                                    <div className='col-12 col-lg-4 mb-4 mb-lg-0 media-width'>
                                        <div>
                                            <label className='mb-3 registration-form-label'>Mobile No.<span>*</span></label><br></br>
                                            <input type='text' className='registration-form-input' placeholder='Enter your mobile No.'></input>
                                        </div>
                                    </div>

                                    <div className='col-12 col-lg-4 mb-4 media-width'>
                                        <div>
                                            <label className='mb-3 registration-form-label'>Whatsapp No.<span>*</span></label><br></br>
                                            <input type='text' className='registration-form-input' placeholder='Enter your whatsapp No.'></input>
                                        </div>
                                    </div>


                                    <div className='col-12 col-lg-4 mb-4 media-width'>
                                        <div>
                                            <label className='mb-3 registration-form-label'>Emergency No.<span>*</span></label><br></br>
                                            <input type='text' className='registration-form-input' placeholder='Enter your whatsapp No.'></input>
                                        </div>
                                    </div>
                                </div>

                                <div className='text-center text-lg-end  mt-lg-2 pt-4 pt-lg-5'>
                                    <Link to='/registration02'><button type="submit" className='registration-next-btn'>Next</button></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
