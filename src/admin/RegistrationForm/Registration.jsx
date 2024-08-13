import React, { useState } from 'react';
import RegistrationType from './RegistrationType';
import PersonDetails from './PersonDetails';
import BusinessDetails from './BusinessDetails';
import PaymentDetails from './PaymentDetails';

function Registration() {
    const [step, setStep] = useState(1);
    // const [formData, setFormData] = useState({
    //     userType: '',
    //     registrationType: '',
    //     districtNo: '',
    //     clubName: '',
    //     Person: [],
    //     bussinessDetails: {},
    // });

    const [formData, setFormData] = useState(() => {
        const storedFormData = sessionStorage.getItem('formData');
        return storedFormData ? JSON.parse(storedFormData) : {
            userType: 1,
            // registrationType: '',
            // districtNo: '',
            // clubName: '',
            businessType: 1,
            paymentType: 1,
            Person: [],
            businessDetails: {},
            paymentDetails: {},
            registrationDetails: {}
        };
    });
    sessionStorage.setItem('formData', JSON.stringify(formData));

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    // console.log("Form Data ==> ", formData);

    const handleSubmit = () => {
        console.log("Submited Form Data ==> ", formData);
        sessionStorage.removeItem('formData');
    }

    return (
        <div className='bg-white'>
            <div className='pt-3'>
                <div className='container-fluid'>
                    <div className="row">
                        <div className='col-12 col-lg-6 ps-0'>
                            <div className='main-img-box'>
                                <img src="/img/img_login_01.png" alt="img_login_01" className='img-fluid' />
                            </div>
                        </div>
                        {/* Switch statement to render dynamic steps */}
                        <div className='col-12 col-lg-6 my-3 position-relative'>
                            <div className='registration-form-div'>
                                <h2 className='h1 registration-title'>Registration</h2>
                                <div className='registration-steps-bar mt-2 mb-5'>
                                    <div className='d-flex flex-wrap'>
                                        <div className={`col registration-steps  ${step === 1 ? 'registration-steps-active' : ''}`}>
                                            <div><span className='fs-4'>1</span></div>
                                            <p className='mb-0'>Registration Type</p>
                                        </div>
                                        <div className={`col registration-steps  ${step === 2 ? 'registration-steps-active' : ''}`}>
                                            <div><span className='fs-4'>2</span></div>
                                            <p className='mb-0'>Person Details</p>
                                        </div>
                                        <div className={`col registration-steps  ${step === 3 ? 'registration-steps-active' : ''}`}>
                                            <div><span className='fs-4'>3</span></div>
                                            <p className='mb-0'>Business Details</p>
                                        </div>
                                        <div className={`col registration-steps  ${step === 4 ? 'registration-steps-active' : ''}`}>
                                            <div><span className='fs-4'>4</span></div>
                                            <p className='mb-0'>Payment Details</p>
                                        </div>
                                    </div>
                                </div>
                                {step === 1 && (
                                    <RegistrationType
                                        handleChange={handleChange}
                                        formData={formData}
                                        setFormData={setFormData}
                                    />
                                )}
                                {step === 2 && (
                                    <PersonDetails
                                        handleChange={handleChange}
                                        formData={formData}
                                        setFormData={setFormData}
                                        registrationType={formData.registrationType}
                                    />
                                )}
                                {step === 3 && (
                                    <BusinessDetails
                                        handleChange={handleChange}
                                        setFormData={setFormData}
                                        formData={formData}
                                    />
                                )}
                                {step === 4 && (
                                    <PaymentDetails
                                        handleChange={handleChange}
                                        setFormData={setFormData}
                                        formData={formData}
                                    />
                                )}
                                <div className='registration-step-btn-box position-absolute z-3'>
                                    {step !== 1 && step !== 4 && (
                                        <button className='registration-step-btn px-5 py-2' onClick={prevStep}>Previous</button>
                                    )}
                                    {step !== 4 && (
                                        <button className='registration-step-btn px-5 py-2 ms-4' onClick={nextStep}>Next</button>
                                    )}
                                    {step === 4 && (
                                        <button className='registration-step-btn px-5 py-2 ms-4' onClick={handleSubmit}>Submit</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registration;