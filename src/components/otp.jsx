import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import OtpInput from 'react-otp-input'

export default function Otp() {

    const [otp, setOtp] = useState('');
    console.log(otp);

    return (
        <div>
            <div className='container-fluid pt-5 ps-0'>
                <div className='row mt-5'>
                    <div className='col-12 col-lg-6'>
                        <img src='/img/img_login_01.png' alt='img_login_01' className='img-fluid'></img>
                    </div>
                    <div className='col-12 col-lg-6 px-4 px-lg-5 mt-4 pt-5'>
                        <div className='otp-heder-text'>
                            <h2 className='display-4 fw-bolder mb-0 title-login'>OTP</h2>
                            <p className='mb-0 mt-4'>Please Enter Your receive a Verification Code.</p>
                        </div>
                        <form>
                            <div className='mt-4 mt-lg-5 pt-4 pt-lg-5'>
                                <label className='login-label'>Enter OTP Code</label> <br></br>
                                <OtpInput
                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={4}
                                    renderSeparator={<span></span>}
                                    renderInput={(props) => <input {...props} className='mt-3 py-2 mx-2 otp-input fs-4' />}
                                />
                                {/* <div className='d-flex'>
                                    <input type='number' maxLength="1" className='mt-3 py-2 mx-2 otp-input' required></input>
                                    <input type='number' maxLength="1" className='mt-3 py-2 mx-2 otp-input' required></input>
                                    <input type='number' maxLength="1" className='mt-3 py-2 mx-2 otp-input' required></input>
                                    <input type='number' maxLength="1" className='mt-3 py-2 mx-2 otp-input' required></input>
                                </div> */}
                            </div>

                            <div className='text-center mt-4 mt-lg-5 pt-4 pt-lg-5'>
                                <Link to='/dashboard'><button className='login-get-otp-btn'>Submit</button></Link>
                                <div>
                                    <p className='mb-0 mt-4 otp-resend-text'>Not Get ? <span href="#">Re-send</span></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
