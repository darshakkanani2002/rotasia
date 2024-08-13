import React, { Component } from 'react'
import Imglogin from '../img/img_login_01.png'
import Imgtimeline from '../img/timetine.png'
import { Link } from 'react-router-dom'

export default class Registration04 extends Component {
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
                                <img src={Imgtimeline} className='img-fluid' alt='timetine'></img>
                            </div>
                            <div className='col-12 col-lg-12'>
                                <div>
                                    <label className='mb-3 registration-form-label'>About Me<span>*</span></label><br></br>
                                    <textarea className='registration-form-textarea px-4 py-2' placeholder='Write down...'></textarea>
                                </div>
                            </div>

                            <div className='text-end text-center text-lg-end  mt-lg-2 pt-4 pt-lg-4'>
                                <Link to='/registration03'><button className='registartion-prev-btn mx-4'>Previous</button></Link>
                                <Link to='/registrationperson2'><button type="submit" className='registration-next-btn'>Next</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
