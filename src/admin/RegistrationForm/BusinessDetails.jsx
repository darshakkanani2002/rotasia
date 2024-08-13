import React, { useState } from 'react'

export default function BusinessDetails({ formData, setFormData, handleChange, nextStep, prevStep }) {
    let selectedBusinessType = formData.businessType;
    const handleInputChange = (field, value) => {
        setFormData(prevState => ({
            ...prevState,
            businessDetails: {
                ...prevState.businessDetails,
                [field]: value
            }
        }));
    };
    return (
        <>
            <h4 className='registration-step-title pb-2'>Your Professional <span>Details</span></h4>
            <div className='d-flex flex-wrap gap-3 justify-content-center my-3'>
                <div className='col regi-type-radio-box py-1 ps-3 pe-2 justify-content-between'>
                    <label htmlFor="business">Business</label>
                    <input type="radio"
                        id='business'
                        name='businessType'
                        value='1'
                        checked={formData.businessType === 1}
                        onChange={() => handleChange('businessType', 1)}
                    // onClick={() => setSelectedBusinessType('business')}
                    />
                </div>
                <div className='col regi-type-radio-box py-1 px-3 justify-content-between'>
                    <label htmlFor="student">Student</label>
                    <input type="radio"
                        id='student'
                        name='businessType'
                        value='2'
                        checked={formData.businessType === 2}
                        onChange={() => handleChange('businessType', 2)}
                    // onClick={() => setSelectedBusinessType('student')}
                    />
                </div>
                <div className='col regi-type-radio-box py-1 px-3 justify-content-between'>
                    <label htmlFor="salariedPersonDetails">Salaried Person Details</label>
                    <input type="radio"
                        id='salariedPersonDetails'
                        name='businessType'
                        value='3'
                        checked={formData.businessType === 3}
                        onChange={() => handleChange('businessType', 3)}
                    // onClick={() => setSelectedBusinessType('salariedPersonDetails')}
                    />
                </div>
            </div>
            {selectedBusinessType === 1 && (
                <div>
                    <form className='registration-form'>
                        <div className='row'>
                            <div className='col-12 col-lg-6 my-2'>
                                <label htmlFor={`firstName`}>Business Name</label>
                                <input
                                    className='form-control'
                                    type="text"
                                    name={`firstName`}
                                    id={`firstName`}
                                    value={formData.businessDetails?.businessName || ''}
                                    onChange={(e) => handleInputChange('businessName', e.target.value)}
                                    placeholder='Enter Business name'
                                />
                            </div>
                            <div className='col-12 col-lg-6 my-2'>
                                <div>
                                    <label htmlFor={`businessCategory`}>Business Category</label>
                                    <select className='form-select' name={`businessCategory`} id={`businessCategory`}
                                        value={formData.businessDetails?.businessCategory || ''}
                                        onChange={(e) => handleInputChange('businessCategory', e.target.value)}
                                    >
                                        <option value="">Select Business Category</option>
                                        <option value="IT">IT</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-12 col-lg-6 my-2'>
                                <label htmlFor={`businessEmail`}>Your Business Email</label>
                                <input
                                    className='form-control'
                                    type="email"
                                    name={`businessEmail`}
                                    id={`businessEmail`}
                                    value={formData.businessDetails?.businessEmail || ''}
                                    onChange={(e) => handleInputChange('businessEmail', e.target.value)}
                                    placeholder='Enter Your Business Email'
                                />
                            </div>
                            <div className='col-12 col-lg-6 my-2'>
                                <label htmlFor={`businessWebsite`}>Business Website</label>
                                <input
                                    className='form-control'
                                    type="text"
                                    name={`businessWebsite`}
                                    id={`businessWebsite`}
                                    value={formData.businessDetails?.businessWebsite || ''}
                                    onChange={(e) => handleInputChange('businessWebsite', e.target.value)}
                                    placeholder='Enter Business Website'
                                />
                            </div>
                            <div className='col-12'>
                                <div>
                                    <label htmlFor="streetAdd">Business Address</label>
                                    <input
                                        className='form-control'
                                        type="text"
                                        name='bStreetAdd'
                                        id='bStreetAdd'
                                        value={formData.businessDetails?.bStreetAdd || ''}
                                        onChange={(e) => handleInputChange('bStreetAdd', e.target.value)}
                                        placeholder='Street address' />
                                </div>
                            </div>
                            <div className='col-12 col-lg-6'>
                                <div>
                                    <input
                                        className='form-control'
                                        type="text"
                                        name='bLandMark'
                                        id='bLandMark'
                                        value={formData.businessDetails?.bLandMark || ''}
                                        onChange={(e) => handleInputChange('bLandMark', e.target.value)}
                                        placeholder='Landmark' />
                                </div>
                            </div>
                            <div className='col-12 col-lg-6'>
                                <div>
                                    <input
                                        className='form-control'
                                        type="text"
                                        name='bPinCode'
                                        id='bPinCode'
                                        value={formData.businessDetails?.bPinCode || ''}
                                        onChange={(e) => handleInputChange('bPinCode', e.target.value)}
                                        placeholder='Pincode' />
                                </div>
                            </div>
                            <div className='col-12 col-lg-4'>
                                <div>
                                    <select
                                        className='form-select'
                                        name="bCity"
                                        id="bCity"
                                        value={formData.businessDetails?.bCity || ''}
                                        onChange={(e) => handleInputChange('bCity', e.target.value)}
                                    >
                                        <option value="">City</option>
                                        <option value="Surat">Surat</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-12 col-lg-4'>
                                <div>
                                    <select
                                        className='form-select'
                                        name="bState"
                                        id="bState"
                                        value={formData.businessDetails?.bState || ''}
                                        onChange={(e) => handleInputChange('bState', e.target.value)}
                                    >
                                        <option value="">State</option>
                                        <option value="Gujarat">Gujarat</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-12 col-lg-4'>
                                <div>
                                    <select
                                        className='form-select'
                                        name="bCountry"
                                        id="bCountry"
                                        value={formData.businessDetails?.bCountry || ''}
                                        onChange={(e) => handleInputChange('bCountry', e.target.value)}
                                    >
                                        <option value="">Country</option>
                                        <option value="India">India</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-12 mt-2'>
                                <div>
                                    <label htmlFor="businessDescription">Your Business Details</label>
                                    <textarea
                                        className='form-control p-2'
                                        name='businessDescription' id='businessDescription'
                                        value={formData.businessDetails?.businessDescription || ''}
                                        onChange={(e) => handleInputChange('businessDescription', e.target.value)}
                                        placeholder='Write down...' />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )}
            {selectedBusinessType === 2 && (
                <div>
                    <form className='registration-form'>
                        <div className='row'>
                            <div className='col-12 col-lg-6 my-2'>
                                <label htmlFor={`studyDetail`}>Study Detail</label>
                                <input
                                    className='form-control'
                                    type="text"
                                    name={`studyDetail`}
                                    id={`studyDetail`}
                                    value={formData.businessDetails?.studyDetail || ''}
                                    onChange={(e) => handleInputChange('studyDetail', e.target.value)}
                                    placeholder='Enter Study Detail'
                                />
                            </div>
                            <div className='col-12 col-lg-6 my-2'>
                                <label htmlFor={`collegeSchoolName`}>Collage/School name</label>
                                <input
                                    className='form-control'
                                    type="text"
                                    name={`collegeSchoolName`}
                                    id={`collegeSchoolName`}
                                    value={formData.businessDetails?.collegeSchoolName || ''}
                                    onChange={(e) => handleInputChange('collegeSchoolName', e.target.value)}
                                    placeholder='Enter Collage/School name'
                                />
                            </div>
                            <div className='col-12 col-lg-6 my-2'>
                                <label htmlFor={`studyYear`}>Which Year for Study(?)</label>
                                <input
                                    className='form-control'
                                    type="number"
                                    name={`studyYear`}
                                    id={`studyYear`}
                                    value={formData.businessDetails?.studyYear || ''}
                                    onChange={(e) => handleInputChange('studyYear', e.target.value)}
                                    placeholder='Enter Your Study Year'
                                />
                            </div>
                        </div>
                    </form>
                </div>
            )}
            {selectedBusinessType === 3 && (
                <div>
                    <form className='registration-form'>
                        <div className='row'>
                            <div className='col-12 col-lg-6 my-2'>
                                <label htmlFor={`companyName`}>Company Name</label>
                                <input
                                    className='form-control'
                                    type="text"
                                    name={`companyName`}
                                    id={`companyName`}
                                    value={formData.businessDetails?.companyName || ''}
                                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                                    placeholder='Enter Your Company Name'
                                />
                            </div>
                            <div className='col-12 col-lg-6 my-2'>
                                <label htmlFor={`userDesignation`}>Designation</label>
                                <input
                                    className='form-control'
                                    type="text"
                                    name={`userDesignation`}
                                    id={`userDesignation`}
                                    value={formData.businessDetails?.userDesignation || ''}
                                    onChange={(e) => handleInputChange('userDesignation', e.target.value)}
                                    placeholder='Enter Your Designation'
                                />
                            </div>
                            <div className='col-12 col-lg-6 my-2'>
                                <label htmlFor={`companyEmail`}>Company Email</label>
                                <input
                                    className='form-control'
                                    type="email"
                                    name={`companyEmail`}
                                    id={`companyEmail`}
                                    value={formData.businessDetails?.companyEmail || ''}
                                    onChange={(e) => handleInputChange('companyEmail', e.target.value)}
                                    placeholder='Enter Your Company Email'
                                />
                            </div>
                            <div className='col-12 col-lg-6 my-2'>
                                <label htmlFor={`companyWebsite`}>Your Company Website</label>
                                <input
                                    className='form-control'
                                    type="text"
                                    name={`companyWebsite`}
                                    id={`companyWebsite`}
                                    value={formData.businessDetails?.companyWebsite || ''}
                                    onChange={(e) => handleInputChange('companyWebsite', e.target.value)}
                                    placeholder='Enter Your Company website'
                                />
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </>
    )
}
