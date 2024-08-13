import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import OtpInput from 'react-otp-input'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../Features/auth/authSlice';
import { API_ENDPOINT } from '../config'

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [phoneno, setPhoneno] = useState('')
    const [otpSent, setotpSent] = useState(false)
    const [otp, setOtp] = useState('');
    const [loading, setloading] = useState(false);
    // console.log(phoneno);
    // console.log(otp);
    const isAdminUrl = window.location.pathname.includes('admin');
    const formattedPhoneno = phoneno.startsWith('+') ? phoneno.slice(1) : phoneno;
    let requestData = { vMobile: phoneno };
    requestData.vMobile = formattedPhoneno;

    // For-Phoneno
    const submitPhoneno = () => {
        setloading(true);
        if (phoneno === undefined || phoneno === '') {
            toast.error("Please Enter Phone Number")
            setloading(false);
            return;
        }

        requestData.isAdmin = isAdminUrl;

        axios.post(`${API_ENDPOINT}user/login`, requestData)
            .then(response => {
                console.log(response);
                toast.success("OTP Sent Successfully!");
                setloading(false);
                setotpSent(true);
            })
            .catch(error => {
                console.log("Error Sending Phone No: ", error);
                if (error.response && error.response.data) {
                    toast.error(error.response.data.vMessage || "An error occurred");
                } else {
                    toast.error(error.message || "An error occurred");
                }
                setloading(false);
            })
    }

    // For-OTP
    const verifyOtp = () => {
        setloading(true);
        console.log("Request Data ===> ", requestData);
        axios.post(`${API_ENDPOINT}user/verifyMobileOtp`, { ...requestData, vOtp: otp })
            .then(response => {
                const userData = response.data.data;
                console.log("userData ===> ", userData.vLoginToken);
                // const token = userData.vLoginToken;
                sessionStorage.setItem('currentUser', JSON.stringify(userData))
                sessionStorage.setItem('token', userData.vLoginToken);
                console.log("Token stored ===> ", userData.vLoginToken);
                toast.success("OTP Sent Successfully!");
                setloading(false);
                console.log('Resoponse ===> ', response);
                // navigate('/dashboard');
                if (isAdminUrl) {
                    navigate('/admin/dashboard');
                } else {
                    navigate('/dashboard');
                }
                dispatch(login(userData));
            })
            .catch(error => {
                console.log("Error Sending Phone No: ", error);
                if (error.response && error.response.data) {
                    toast.error(error.response.data.vMessage || "An error occurred");
                } else {
                    toast.error(error.message || "An error occurred");
                }
                setloading(false);
            });
    }

    return (
        <div className='bg-white'>
            {/* login */}
            <div className='container-fluid pt-5 ps-0'>
                <div className='row mt-5'>
                    <div className='col-12 col-lg-6'>
                        <img src='/img/img_login_01.png' alt='img_login_01' className='img-fluid'></img>
                    </div>
                    <div className='col-12 col-lg-6 px-4 px-lg-5 mt-4 pt-5'>

                        <form>
                            {/* Render phone number input div only if OTP has not been sent */}
                            {!otpSent && (
                                <>
                                    <div>
                                        <h2 className='display-4 fw-bolder mb-0 title-login'>Login</h2>
                                    </div>
                                    <div className='mt-4 mt-lg-5 pt-4 pt-lg-5'>
                                        <label className='login-label'>Mobile Number<span>*</span></label> <br></br>
                                        <PhoneInput
                                            className='login-input mt-3 py-2'
                                            placeholder="Enter Your Mobile Number"
                                            defaultCountry="IN"
                                            value={phoneno}
                                            onChange={setPhoneno}
                                        />
                                    </div>
                                </>
                            )}
                            {/* Render OTP input div only if OTP has been sent */}
                            {otpSent && (
                                <>
                                    <div className='otp-heder-text'>
                                        <h2 className='display-4 fw-bolder mb-0 title-login'>OTP</h2>
                                        <p className='mb-0 mt-4'>Please Enter  Verification Code Received On {phoneno}</p>
                                    </div>
                                    <div className='mt-4 mt-lg-5 pt-2'>
                                        <label className='login-label'>Enter OTP Code</label> <br></br>
                                        <OtpInput
                                            value={otp}
                                            onChange={setOtp}
                                            numInputs={4}
                                            renderSeparator={<span></span>}
                                            renderInput={(props) => <input {...props} className='mt-3 py-2 mx-2 otp-input fs-4' />}
                                        />
                                    </div>
                                </>
                            )}
                            <div className='text-center mt-4 mt-lg-5 pt-4 pt-lg-5'>
                                {/* Render different buttons based on OTP sent state */}
                                {!otpSent ? (
                                    <button type="button" disabled={loading} className='login-get-otp-btn' onClick={submitPhoneno}>
                                        {loading ? <span className="spinner-border loader-spinner" role="status"></span> : ''} Get OTP
                                    </button>
                                ) : (
                                    <>
                                        <button type="button" disabled={loading} className='login-get-otp-btn' onClick={verifyOtp}>
                                            {loading ? <span className="spinner-border loader-spinner" role="status"></span> : ''} Submit
                                        </button>
                                        <div>
                                            <p className='mb-0 mt-4 otp-resend-text'>Not Get ? <span onClick={submitPhoneno}>Re-send</span></p>
                                        </div>
                                    </>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    )
}