import React, { Component } from 'react'
import Imglogin from '../img/img_login_01.png'
import Imgtimeline03 from '../img/timetine_03.png'
import Icdropdown from '../img/ic_dropdown.svg'
import { Link } from 'react-router-dom'

export default class Registrationprofessional extends Component {
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

                            <div className='mb-5'>
                                <img src={Imgtimeline03} className='img-fluid' alt='timetine_03'></img>
                            </div>

                            <div className='mt-3 registration-form-title mb-4'>
                                <h2>Your Professional <span className='registration-form-are'>Details</span></h2>
                            </div>

                            <div className='row nav nav-pills' id="pills-tab">
                                <div className='col-12 col-lg-4 mb-4 nav-item' role="presentation">
                                    <div className='registration-category-back px-3 mb-4 mb-lg-0' id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                                        <div className='d-flex align-items-center justify-content-between py-3'>
                                            <label htmlFor='businessdetails' className='registration-form-label'>Business Details</label>
                                            <label className="radio-container me-2" htmlFor='businessdetails'>
                                                <input type="radio" id='businessdetails' name='category' value='BUSINESSDETAILS' />
                                                <span className="checkmarkradio"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-lg-4 mb-4 nav-item' role="presentation" >
                                    <div className='registration-category-back px-3 mb-4 mb-lg-0' id="pills-licence-tab" data-bs-toggle="pill" data-bs-target="#pills-licence" type="button" role="tab" aria-controls="pills-licence" aria-selected="true">
                                        <div className='d-flex align-items-center justify-content-between py-3'>
                                            <label htmlFor='studentdetails' className='registration-form-label'>Student Details</label>
                                            <label className="radio-container me-2" htmlFor='studentdetails'>
                                                <input type="radio" id='studentdetails' name='category' value='STUDENTDETAILS' />
                                                <span className="checkmarkradio"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-lg-4 mb-4' role="presentation">
                                    <div className='registration-category-back px-3 mb-4 mb-lg-0' id="pills-passport-tab" data-bs-toggle="pill" data-bs-target="#pills-passport" type="button" role="tab" aria-controls="pills-passport" aria-selected="true">
                                        <div className='d-flex align-items-center justify-content-between py-3'>
                                            <label htmlFor='salarieddetails' className='registration-form-label'>Salaried Details</label>
                                            <label className="radio-container me-2" htmlFor='salarieddetails'>
                                                <input type="radio" id='salarieddetails' name='category' value='SALARIEDDETAILS' />
                                                <span className="checkmarkradio"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane registration-form-tab-pan fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                                    <div className='row'>
                                        <div className='col-12 col-lg-6 mb-4 media-width'>
                                            <div>
                                                <label className='mb-3 registration-form-label'>Business Name</label><br></br>
                                                <input type='text' className='registration-form-input' placeholder='Enter Business Name'></input>
                                            </div>
                                        </div>

                                        <div className='col-12 col-lg-6 mb-4 media-width'>
                                            <div>
                                                <label className='mb-3 registration-form-label'>Business Category</label><br></br>
                                                <div className='position-relative'>
                                                    <select className='registration-form-select'>
                                                        <option>Select Your Business Category</option>
                                                    </select>
                                                    <img src={Icdropdown} alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col-12 col-lg-6 mb-4 media-width'>
                                            <div>
                                                <label className='mb-3 registration-form-label'>Your Business Email</label><br></br>
                                                <input type='text' className='registration-form-input' placeholder='Enter Your business email'></input>
                                            </div>
                                        </div>

                                        <div className='col-12 col-lg-6 mb-4 media-width'>
                                            <div>
                                                <label className='mb-3 registration-form-label'>Your Business Website</label><br></br>
                                                <input type='text' className='registration-form-input' placeholder='Enter Your business website'></input>
                                            </div>
                                        </div>

                                        <div className='col-12'>
                                            <div>
                                                <label className='mb-3 registration-form-label'>Your Business Details</label><br></br>
                                                <textarea className='registration-form-textarea px-4 py-2' placeholder='Write down...'></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane registration-form-tab-pan fade" id="pills-licence" role="tabpanel" aria-labelledby="pills-licence-tab" tabIndex="0">
                                    <div className='row'>
                                        <div className='col-12 col-lg-6 mb-4 media-width'>
                                            <div>
                                                <label className='mb-3 registration-form-label'>Study Detail</label><br></br>
                                                <input type='text' className='registration-form-input' placeholder='Enter Study Name'></input>
                                            </div>
                                        </div>
                                        <div className='col-12 col-lg-6 mb-4 media-width'>
                                            <div>
                                                <label className='mb-3 registration-form-label'>Collage/School name</label><br></br>
                                                <input type='text' className='registration-form-input' placeholder='Enter Your Collage/School name'></input>
                                            </div>
                                        </div>
                                        <div className='col-12 col-lg-6 mb-5 media-width'>
                                            <div>
                                                <label className='mb-3 registration-form-label'>Which Year for Study(?)</label><br></br>
                                                <div className='position-relative'>
                                                    <select className='registration-form-select'>
                                                        <option>Enter Your Study Year</option>
                                                    </select>
                                                    <img src={Icdropdown} alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane registration-form-tab-pan fade" id="pills-passport" role="tabpanel" aria-labelledby="pills-passport-tab" tabIndex="0">
                                    <div className='row'>
                                        <div className='col-12 col-lg-6 mb-4'>
                                            <div>
                                                <label className='mb-3 registration-form-label'>Company Name</label><br></br>
                                                <input type='text' className='registration-form-input' placeholder='Enter Company Name'></input>
                                            </div>
                                        </div>
                                        <div className='col-12 col-lg-6 mb-4'>
                                            <div>
                                                <label className='mb-3 registration-form-label'>Designation</label><br></br>
                                                <input type='text' className='registration-form-input' placeholder='Enter Your Designation'></input>
                                            </div>
                                        </div>
                                        <div className='col-12 col-lg-6 mb-4 media-width'>
                                            <div>
                                                <label className='mb-3 registration-form-label'>Company email</label><br></br>
                                                <input type='text' className='registration-form-input' placeholder='Enter Your Company email'></input>
                                            </div>
                                        </div>
                                        <div className='col-12 col-lg-6 mb-4 media-width'>
                                            <div>
                                                <label className='mb-3 registration-form-label'>Your Company website</label><br></br>
                                                <input type='text' className='registration-form-input' placeholder='Enter Your Company website'></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='text-center text-lg-end  mt-lg-2 pt-4 pt-lg-4'>
                                    <Link to='/registrationperson2_03'><button className='registartion-prev-btn mx-4'>Previous</button></Link>
                                    <Link to='/paymentdetails'><button type="submit" className='registration-next-btn'>Next</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
