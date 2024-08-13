import React, { useState } from 'react'
import Imglogin from '../img/img_login_01.png'
import Imgtimeline04 from '../img/timetine_04.png'
import Ictime from '../img/ic_time.svg'
import Icdate from '../img/ic_date.svg'
import Icgallery from '../img/icon_gallery.svg'
import { Link } from 'react-router-dom'

export default function Paymentdetails() {
  const [selectedFile02, setSelectedFile02] = useState(null);
  const [selectedName02, setSelectedName02] = useState("");

  const handleFileChange02 = (event) => {
    const file02 = event.target.files[0];
    setSelectedFile02(file02);
    setSelectedName02(file02.name);
  };
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
              <img src={Imgtimeline04} className='img-fluid' alt='timetine_04'></img>
            </div>
            <div className='mt-3 registration-form-title mb-4'>
              <h2>Payment<span className='registration-form-are'> Details</span></h2>
            </div>
            <form>
              <div className='row'>
                <div className='col-12 col-lg-4 mb-4'>
                  <div>
                    <h4>Select The Payment Method</h4>
                  </div>
                </div>
                <div className='col-12 col-lg-4 mb-4 accordion' id="accordionExample">
                  <div className='accordion-item'>
                    <div className='payment-back px-3 mb-4 mb-lg-0 py-2 accordion-header' id="headingOne">
                      <div>
                        <div className='d-flex align-items-center justify-content-between' type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          <label htmlFor='onlinepayment' className='registration-form-label'>Online Payment</label>
                          {/* <input type="radio" id="onlinepayment" name="payment" value="ONLINEPAYMENT"></input> */}
                          <label className="radio-container me-2" htmlFor='onlinepayment'>
                            <input type="radio" id='onlinepayment' name='payment' value='ONLINEPAYMENT' />
                            <span className="checkmarkradio"></span>
                          </label>
                        </div>

                        <div id="collapseOne" className='accordion-collapse collapse' aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                          <div className='d-flex'>
                            <div className='me-3'>
                              <label htmlFor="upi">
                                UPI
                                <input className='ms-2' type="radio" id='upi' name='method' value='UPI' />
                              </label>
                            </div>
                            <div>
                              <label htmlFor="banktransfer">
                                Bank Transfer
                                <input className='ms-2' type="radio" id='banktransfer' name='method' value='BANKTRANSFER' />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12 col-lg-4 mb-4'>
                  <div className='payment-back px-3 py-2 mb-4 mb-lg-0'>
                    <div className='d-flex align-items-center justify-content-between'>
                      <label htmlFor='offlinepayment' className='registration-form-label'>Offline Payment</label>
                      {/* <input type="radio" id="offlinepayment" name="payment" value="OFFLINEPAYMENT"></input> */}
                      <label className="radio-container me-2" htmlFor='offlinepayment'>
                        <input type="radio" id='offlinepayment' name='payment' value='OFFLINEPAYMENT' />
                        <span className="checkmarkradio"></span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className='col-12 col-lg-6 mb-4 media-width'>
                  <div>
                    <label className='mb-3 registration-form-label'>Payment Transaction Id<span>*</span></label><br></br>
                    <input type='text' className='registration-form-input' placeholder='Enter Payment Transaction id'></input>
                  </div>
                </div>

                <div className='col-12 col-lg-6 mb-4'>
                  <div>
                    <label className='mb-3 registration-form-label'>Payment Date<span>*</span></label><br></br>
                    <div className='position-relative'>
                      <input type='date' className='registration-form-input' placeholder='Enter Date'></input>
                      <img src={Icdate} className='img-fluid position-absolute bottom-50 end-0' alt="ic_date" />
                    </div>
                  </div>
                </div>

                <div className='col-12 col-lg-6 mb-4'>
                  <div>
                    <label className='mb-3 registration-form-label'>Payment Time<span>*</span></label><br></br>
                    <div className='position-relative'>
                      <input type='time' className='registration-form-input' placeholder='Enter Payment Time'></input>
                      <img src={Ictime} className='img-fluid position-absolute bottom-50 end-0 ' alt="ic_time" />
                    </div>
                  </div>
                </div>

                <div className='col-12 col-lg-6 mb-4 media-width'>
                  <div>
                    <label className='mb-3 registration-form-label'>Receive Payment by Person Name<span>*</span></label><br></br>
                    <input type='text' className='registration-form-input' placeholder='Receive Person Name'></input>
                  </div>
                </div>

                <div className='col-12 col-lg-12 mb-4'>
                  <div>
                    <label className='mb-3 registration-form-label'>Payment Receipt Photos<span>*</span></label><br></br>
                    {/* <input type='file' className='registration-form-input registration-form-file' placeholder=''></input> */}
                    <div className='file-upload'>
                      <div className='registration-input-file'>
                        <img src={Icgallery} alt="upload" className='mb-2' />
                        <h3> {selectedName02 || "Upload Payment photo or screenshort"}</h3>
                      </div>
                      <input type='file' className='registration-form-input' placeholder='Enter Your Emergency no' onChange={handleFileChange02}></input>
                    </div>
                  </div>
                </div>
                <div className='text-center text-lg-end mt-lg-2 pt-4 pt-lg-4'>
                  <Link to='/registrationprofessional'><button className='registartion-prev-btn mx-4'>Previous</button></Link>
                  <Link to=''><button type="submit" className='registration-next-btn' data-bs-toggle="modal" data-bs-target="#exampleModal">Submit</button></Link>
                </div>

                {/* <!-- Modal --> */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered thankyou-popup">
                    <div className="modal-content thankyou-popup-bg">
                      {/* <div class="modal-header z-1">
                          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div> */}
                      <div className="modal-body text-center position-relative z-1">
                        <h3 className='thankyou-popup-text fw-bolder'>Successful</h3>
                        <div className='mt-5 thankyou-popup-cont mb-5'>
                          <h4 className='mb-4'>Your registration is completed successfully !</h4>
                          <h4 className='mb-4'>You can login once <span>admin approve</span> <br></br>your request !!</h4>
                          <h3 className='fw-bolder'>Thank you!</h3>
                        </div>
                        <div>
                          <button className='thankyou-popup-ok-btn' data-bs-dismiss="modal">Ok</button>
                        </div>
                      </div>
                      {/* <div class="text-center position-relative z-1 pb-4">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Save changes</button>
                        </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )

}
