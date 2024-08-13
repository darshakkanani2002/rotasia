import React from 'react'

export default function RegistrationType({ formData, setFormData, handleChange }) {
    let userType = formData.userType;

    const handleInputChange = (field, value) => {
        setFormData(prevState => ({
            ...prevState,
            registrationDetails: {
                ...prevState.registrationDetails,
                [field]: value
            }
        }));
    };

    return (
        <>
            <h4 className='registration-step-title pb-2'>Registration Type</h4>
            <div>
                <form className='registration-form'>
                    <div className='row'>
                        <div className='col-12 my-2'>
                            <div>
                                <div className='regi-type-radio-box py-2 px-3 me-3'>
                                    <label htmlFor="Rotaractor/Rotarian">Rotaractor/Rotarian</label>
                                    <input type="radio"
                                        id='Rotaractor/Rotarian'
                                        name='registration-type'
                                        value="1"
                                        checked={formData.userType === 1}
                                        onChange={() => handleChange('userType', 1)}
                                    />
                                </div>
                                <div className='regi-type-radio-box py-2 px-3'>
                                    <label htmlFor="Guest">Guest</label>
                                    <input type="radio"
                                        id='Guest'
                                        name='registration-type'
                                        value="2"
                                        checked={formData.userType === 2}
                                        onChange={() => handleChange('userType', 2)}
                                    />
                                </div>
                            </div>
                        </div>
                        {userType === 1 && (
                            <>
                                <div className='col-12 my-2'>
                                    <div>
                                        <label htmlFor='registrationType'>Registration Type<span>*</span></label>
                                        <select
                                            className='form-select'
                                            name="registrationType"
                                            id="registrationType"
                                            value={formData.registrationDetails?.registrationType || ''}
                                            onChange={(e) => handleInputChange('registrationType', e.target.value)}
                                        >
                                            <option value="Select">Select</option>
                                            <option value="Couple">Couple</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-12 col-md-6 my-2'>
                                    <div>
                                        <label htmlFor='registrationType'>District No<span>*</span></label>
                                        <select
                                            className='form-select'
                                            name="registrationType"
                                            id="registrationType"
                                            value={formData.registrationDetails?.districtNo || ''}
                                            onChange={(e) => handleInputChange('districtNo', e.target.value)}
                                        >
                                            <option value="Select">Select</option>
                                            <option value="2981">2981</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-12 col-md-6 my-2'>
                                    <div>
                                        <label htmlFor='registrationType'>Club Name<span>*</span></label>
                                        <select
                                            className='form-select'
                                            name="registrationType"
                                            id="registrationType"
                                            value={formData.registrationDetails?.clubName || ''}
                                            onChange={(e) => handleInputChange('clubName', e.target.value)}
                                        >
                                            <option value="Select">Select</option>
                                            <option value="Hello">Hello</option>
                                        </select>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </form>
            </div>
        </>
    )
}