import React, { useState } from 'react'
import Imglogin from '../img/img_login_01.png'
import Imgtimeline02 from '../img/timetine_02.png'
import Icgallery from '../img/icon_gallery.svg'
import { Link } from 'react-router-dom'

export default function Registrationperson2_03() {
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
              <img src={Imgtimeline02} className='img-fluid' alt='timetine_02'></img>
            </div>

            {/* id-proof  */}
            <div className='row'>
              <div className='col-12 mb-1'>
                <label className='mb-3 registration-form-label'>Id Proof of Person 2</label><br></br>
              </div>
              <div className='col-12 col-lg-4 mb-4 media-width'>
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
              <div className='col-12 col-lg-4 mb-4 media-width'>
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
              <div className='col-12 col-lg-4 mb-4 media-width'>
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
              <div className='col-12 col-lg-6 mb-4'>
                <div className='file-upload'>
                  <div className='registration-input-file'>
                    <img src={Icgallery} alt="upload" className='mb-2' />
                    <h3> {selectedName || "Drop Your File here front Side"}</h3>
                  </div>
                  <input type='file' className='registration-form-input' placeholder='Enter Your Emergency no' onChange={handleFileChange}></input>
                </div>
              </div>
              <div className='col-12 col-lg-6 mb-4'>
                {/* <input type='file' className='registration-form-input' placeholder='Enter Your Emergency no'></input> */}
                <div className='file-upload'>
                  <div className='registration-input-file'>
                    <img src={Icgallery} alt="upload" className='mb-2' />
                    <h3> {selectedName02 || "Drop Your File here back Side"}</h3>
                  </div>
                  <input type='file' className='registration-form-input' placeholder='Enter Your Emergency no' onChange={handleFileChange02}></input>
                </div>
              </div>
              <div className='col-12 col-lg-12 mb-4'>
                <div>
                  <label className='mb-3 registration-form-label'>About Me<span>*</span></label><br></br>
                  <textarea className='registration-form-textarea px-4 py-2' placeholder='Write down...'></textarea>
                </div>
              </div>
              <div className='text-center text-lg-end  mt-lg-2 pt-4 pt-lg-4'>
                <Link to='/registrationperson2_02'><button className='registartion-prev-btn mx-4'>Previous</button></Link>
                <Link to='/registrationprofessional'><button type="submit" className='registration-next-btn'>Next</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

