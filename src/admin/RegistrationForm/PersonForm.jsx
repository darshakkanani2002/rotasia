// PersonForm.js
import React, { useState } from 'react';

export default function PersonForm({ personData, handleInputChange, personNumber }) {
    const ordinalWords = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth'];
    // Function to get the ordinal word based on the person number
    const getOrdinalWord = () => {
        if (personNumber && personNumber <= ordinalWords.length) {
            return ordinalWords[personNumber - 1];
        }
        return personNumber.toString();
    };
    const [wordCount, setWordCount] = useState(0);

    const handleTextareaChange = (e) => {
        const { name, value } = e.target;
        const count = value.length;
        if (count <= 1000) {
            setWordCount(count);
            handleInputChange(name, value);
        }
    };

    return (
        <div>
            <h4 className='registration-step-title pb-2'>{getOrdinalWord()} Person Details</h4>
            <div className='row registration-form'>
                <div className='col-12 col-lg-4 my-2'>
                    <div>
                        <label htmlFor={`firstName`}>First Name<span>*</span></label>
                        <input
                            className='form-control'
                            type="text"
                            name={`firstName`}
                            id={`firstName`}
                            value={personData?.firstName || ''}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            placeholder='Enter First name'
                        />
                    </div>
                </div>
                <div className='col-12 col-lg-4 my-2'>
                    <div>
                        <label htmlFor={`middleName`}>Middle Name<span>*</span></label>
                        <input
                            className='form-control'
                            type="text"
                            name={`middleName`}
                            id={`middleName`}
                            value={personData?.middleName || ''}
                            onChange={(e) => handleInputChange('middleName', e.target.value)}
                            placeholder='Enter Middle name'
                        />
                    </div>
                </div>
                <div className='col-12 col-lg-4 my-2'>
                    <div>
                        <label htmlFor={`lastName`}>Last Name<span>*</span></label>
                        <input
                            className='form-control'
                            type="text"
                            name={`lastName`}
                            id={`lastName`}
                            value={personData?.lastName || ''}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            placeholder='Enter Last name'
                        />
                    </div>
                </div>
                <div className='col-12 col-lg-4 my-2'>
                    <div>
                        <label htmlFor="email">Email Address<span>*</span></label>
                        <input
                            className='form-control'
                            type="email"
                            name='email'
                            id='email'
                            value={personData?.email || ''}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder='Enter Email address' />
                    </div>
                </div>
                <div className='col-12 col-lg-4 my-2'>
                    <div>
                        <label htmlFor="dateOfBirth">Date Of Birth<span>*</span></label>
                        <input
                            className='form-control'
                            type="date"
                            name='dateOfBirth'
                            id='dateOfBirth'
                            value={personData?.dateOfBirth}
                            onChange={(e) => handleInputChange('dataOfBirth', e.target.value)}
                            placeholder='dd/mm/yyyy' />
                    </div>
                </div>
                <div className='col-12 col-lg-4 my-2'>
                    <div>
                        <label>Gender<span>*</span></label> <br />
                        <div className='d-flex flex-wrap'>
                            <div className='me-2 registration-radio d-flex align-items-center mt-2'>
                                <input type="radio"
                                    id='Male'
                                    name='gender'
                                    value='Male'
                                    checked={personData?.gender === "Male"}
                                    onChange={() => handleInputChange('gender', 'Male')}
                                />
                                <label htmlFor="Male">Male</label>
                            </div>
                            <div className='me-2 registration-radio d-flex align-items-center mt-2'>
                                <input type="radio"
                                    id='Female'
                                    name='gender'
                                    value='Female'
                                    checked={personData?.gender === "Female"}
                                    onChange={() => handleInputChange('gender', 'Female')}
                                />
                                <label htmlFor="Female">Female</label>
                            </div>
                            <div className='registration-radio d-flex align-items-center mt-2'>
                                <input type="radio"
                                    id='Other'
                                    name='gender'
                                    value='Other'
                                    checked={personData?.gender === "Other"}
                                    onChange={() => handleInputChange('gender', 'Other')}
                                />
                                <label htmlFor="Other">Other</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-4 my-2'>
                    <div>
                        <label htmlFor="mobileNo">Mobile No.<span>*</span></label>
                        <input
                            className='form-control'
                            type="tel"
                            name='mobileNo'
                            id='mobileNo'
                            value={personData?.mobileNo || ''}
                            onChange={(e) => handleInputChange('mobileNo', e.target.value)}
                            placeholder='Enter Your Mobile No.' />
                    </div>
                </div>
                <div className='col-12 col-lg-4 my-2'>
                    <div>
                        <label htmlFor="whatsappNo">Whatsapp No.<span>*</span></label>
                        <input
                            className='form-control'
                            type="tel"
                            name='whatsappNo'
                            id='whatsappNo'
                            value={personData?.whatsappNo || ''}
                            onChange={(e) => handleInputChange('whatsappNo', e.target.value)}
                            placeholder='Enter Whatsapp No.' />
                    </div>
                </div>
                <div className='col-12 col-lg-4 my-2'>
                    <div>
                        <label htmlFor="emergencyNo">Emergency No<span>*</span></label>
                        <input
                            className='form-control'
                            type="tel"
                            name='emergencyNo'
                            id='emergencyNo'
                            value={personData?.emergencyNo || ''}
                            onChange={(e) => handleInputChange('emergencyNo', e.target.value)}
                            placeholder='Enter Whatsapp No.' />
                    </div>
                </div>
                <div className='col-12'>
                    <div>
                        <label htmlFor="streetAdd">Resident Address<span>*</span></label>
                        <input
                            className='form-control'
                            type="text"
                            name='streetAdd'
                            id='streetAdd'
                            value={personData?.streetAdd || ''}
                            onChange={(e) => handleInputChange('streetAdd', e.target.value)}
                            placeholder='Street address' />
                    </div>
                </div>
                <div className='col-12 col-lg-6'>
                    <div>
                        <input
                            className='form-control'
                            type="text"
                            name='landMark'
                            id='landMark'
                            value={personData?.landMark || ''}
                            onChange={(e) => handleInputChange('landMark', e.target.value)}
                            placeholder='Landmark' />
                    </div>
                </div>
                <div className='col-12 col-lg-6'>
                    <div>
                        <input
                            className='form-control'
                            type="text"
                            name='pinCode'
                            id='pinCode'
                            value={personData?.pinCode || ''}
                            onChange={(e) => handleInputChange('pinCode', e.target.value)}
                            placeholder='Pincode' />
                    </div>
                </div>
                <div className='col-12 col-lg-4'>
                    <div>
                        <select className='form-select' name="city" id="city"
                            value={personData?.city || ''}
                            onChange={(e) => handleInputChange('city', e.target.value)}
                        >
                            <option value="">City</option>
                            <option value="Surat">Surat</option>
                        </select>
                    </div>
                </div>
                <div className='col-12 col-lg-4'>
                    <div>
                        <select className='form-select' name="state" id="state"
                            value={personData?.state || ''}
                            onChange={(e) => handleInputChange('state', e.target.value)}
                        >
                            <option value="">State</option>
                            <option value="Gujarat">Gujarat</option>
                        </select>
                    </div>
                </div>
                <div className='col-12 col-lg-4'>
                    <div>
                        <select className='form-select' name="country" id="country"
                            value={personData?.country || ''}
                            onChange={(e) => handleInputChange('country', e.target.value)}
                        >
                            <option value="">Country</option>
                            <option value="India">India</option>
                        </select>
                    </div>
                </div>
                <div className='col-12 mt-2'>
                    <div>
                        <label htmlFor="aboutMe">About Me<span>*</span></label>
                        <div className='position-relative overflow-hidden'>
                            <textarea className='form-control p-2' name='aboutMe' id='aboutMe' value={personData?.aboutMe || ''} onChange={handleTextareaChange} placeholder='Write down...' style={{ border: wordCount >= 1000 ? '1px solid red' : '1px solid transparent' }} />
                            <p className='registration-about-word-count'>{wordCount}/1000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
