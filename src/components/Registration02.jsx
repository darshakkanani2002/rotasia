import React, { Component } from 'react'
import Imglogin from '../img/img_login_01.png'
import Imgtimeline from '../img/timetine.png'
import { Link } from 'react-router-dom'
import Icdropdown from '../img/ic_dropdown.svg'

export default class Registration02 extends Component {
    render() {
        return (
            <div>
                <div className='container-fluid pt-5 ps-0'>
                    <div className='row mt-5'>
                        <div className='col-12 col-lg-6'>
                            <img src='../img/img_login_01.png' alt='img_login_01' className='img-fluid'></img>
                        </div>
                        <div className='col-12 col-lg-6 px-4 px-lg-5 mt-4'>
                            <div className='mb-4 registration-form-heading'>
                                <h2 className='display-4 fw-bolder mb-3'>Registration</h2>
                                <h3>We Would Like to know you better</h3>
                            </div>
                            <div className='mb-5'>
                                {/* <img src={Imgtimeline} className='img-fluid' alt='timetine'></img> */}
                            </div>
                            <div className='mt-3 registration-form-title mb-4'>
                                <h2>Personal Details</h2>
                            </div>
                            <div className='registration-from-first-person p-2 mb-3'>
                                <h6 className='mb-0 fw-normal'>First Person Details</h6>
                            </div>
                            <form>
                                <div className='row'>
                                    {/* <div className='col-12 col-lg-4 mb-4 media-width'>
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
                                    </div> */}
                                    <div className='col-12 col-lg-4 mb-4 media-width'>
                                        <div>
                                            <label className='mb-3 registration-form-label'>T-shirt Size<span>*</span></label><br></br>
                                            <div className='position-relative'>
                                                <select className='registration-form-select'>
                                                    <option>Select Your T-shirt size</option>
                                                </select>
                                                <img src={Icdropdown} alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-4 mb-4 mb-lg-0 media-width'>
                                        <div>
                                            <div>
                                                <label className='mb-3 registration-form-label'>Club Designation<span>*</span></label><br></br>
                                                <input type='text' className='registration-form-input' placeholder='Enter Club Designation'></input>
                                            </div>
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

                                    <div className='col-12 col-lg-4 mb-5 media-width'>
                                        <div>
                                            <label className='mb-3 registration-form-label'>Rotasia Designation</label><br></br>
                                            <input type='text' className='registration-form-input' placeholder='Enter First name'></input>
                                        </div>
                                    </div>

                                    <div className='col-12 col-lg-4 mb-5 media-width'>
                                        <div>
                                            <label className='mb-3 registration-form-label'>Blood Group</label><br></br>
                                            <div className='position-relative'>
                                                <select className='registration-form-select'>
                                                    <option>Select Blood Group</option>
                                                </select>
                                                <img src={Icdropdown} alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-12 col-lg-4 mb-5 media-width'>
                                        <div>
                                            <label className='mb-3 registration-form-label'>Disease</label><br></br>
                                            <input type='text' className='registration-form-input' placeholder='Enter Disease'></input>
                                        </div>
                                    </div>
                                </div>
                                {/* Resident Address  */}
                                <div className='row'>
                                    <div className='col-12 mb-4'>
                                        <label className='mb-3 registration-form-label'>Resident Address<span>*</span></label><br></br>
                                        <input type='text' className='registration-resident-input px-4' placeholder='Street address'></input>
                                    </div>
                                    <div className='col-12 col-lg-6 mb-4'>
                                        <input type='text' className='registration-resident-input px-4' placeholder='Landmark'></input>
                                    </div>
                                    <div className='col-12 col-lg-6 mb-4'>
                                        <input type='text' className='registration-resident-input px-4' placeholder='Pincode'></input>
                                    </div>
                                    <div className='col-12 col-lg-4 mb-4'>
                                        <div className='position-relative'>
                                            <select className='registration-resident-input registration-select px-4'>
                                                <option>City</option>
                                            </select>
                                            <img src={Icdropdown} alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-4 mb-4'>
                                        <div className='position-relative'>
                                            <select className='registration-resident-input registration-select px-4'>
                                                <option>State</option>
                                            </select>
                                            <img src={Icdropdown} alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-4 mb-4'>
                                        <div className='position-relative'>
                                            <select className='registration-resident-input registration-select px-4'>
                                                <option>Country</option>
                                            </select>
                                            <img src={Icdropdown} alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-12'>
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
                                </div>
                                <div className='text-center text-lg-end  mt-lg-2 pt-4 pt-lg-4'>
                                    <Link to='/registration'><button className='registartion-prev-btn mx-4'>Previous</button></Link>
                                    <Link to='/registration03'><button type="submit" className='registration-next-btn'>Next</button></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
