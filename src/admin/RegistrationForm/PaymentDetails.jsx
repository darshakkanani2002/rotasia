import React from 'react'

export default function PaymentDetails({ formData, setFormData, handleChange }) {
    let selectedPaymentType = formData.paymentType;
    const handleInputChange = (field, value) => {
        setFormData(prevState => ({
            ...prevState,
            paymentDetails: {
                ...prevState.paymentDetails,
                [field]: value
            }
        }));
    };
    return (
        <>
            <h4 className='registration-step-title pb-2'>Your Payment <span>Details</span></h4>
            <div className='d-flex flex-wrap gap-3 my-3'>
                <div className='regi-type-radio-box py-1 ps-3 pe-2 justify-content-between'>
                    <label htmlFor="upi">UPI</label>
                    <input type="radio"
                        id='upi'
                        name='paymentType'
                        value='1'
                        checked={formData.paymentType === 1}
                        onChange={() => handleChange('paymentType', 1)}
                    />
                </div>
                <div className='regi-type-radio-box py-1 px-3 justify-content-between'>
                    <label htmlFor="bankTransfer">Bank Transfer</label>
                    <input type="radio"
                        id='bankTransfer'
                        name='paymentType'
                        value='2'
                        checked={formData.paymentType === 2}
                        onChange={() => handleChange('paymentType', 2)}
                    />
                </div>
            </div>
            {selectedPaymentType === 1 && (
                <div>
                    <form className='registration-form'>
                        <div className='row'>
                            <div className='col-12 col-lg-6 my-2'>
                                <label htmlFor={`paymentTransactionId`}>Payment Transaction Id<span>*</span></label>
                                <input
                                    className='form-control'
                                    type="text"
                                    name={`paymentTransactionId`}
                                    id={`paymentTransactionId`}
                                    value={formData.paymentDetails?.paymentTransactionId || ''}
                                    onChange={(e) => handleInputChange('paymentTransactionId', e.target.value)}
                                    placeholder='Enter Payment Transaction Id'
                                />
                            </div>
                            <div className='col-12 col-lg-6 my-2'>
                                <label htmlFor={`paymentDate`}>Payment Date<span>*</span></label>
                                <input
                                    className='form-control'
                                    type="date"
                                    name={`paymentDate`}
                                    id={`paymentDate`}
                                    value={formData.paymentDetails?.paymentDate || ''}
                                    onChange={(e) => handleInputChange('paymentDate', e.target.value)}
                                />
                            </div>
                            <div className='col-12 col-lg-6 my-2'>
                                <label htmlFor={`paymentTime`}>Payment Time<span>*</span></label>
                                <input
                                    className='form-control'
                                    type="time"
                                    name={`paymentTime`}
                                    id={`paymentTime`}
                                    value={formData.paymentDetails?.paymentTime || ''}
                                    onChange={(e) => handleInputChange('paymentTime', e.target.value)}
                                    placeholder='Enter Payment Time'
                                />
                            </div>
                            <div className='col-12 col-lg-6 my-2'>
                                <label htmlFor={`recievePaymentByPerson`}>Receive Payment by Person Name<span>*</span></label>
                                <input
                                    className='form-control'
                                    type="text"
                                    name={`recievePaymentByPerson`}
                                    id={`recievePaymentByPerson`}
                                    value={formData.paymentDetails?.recievePaymentByPerson || ''}
                                    onChange={(e) => handleInputChange('recievePaymentByPerson', e.target.value)}
                                    placeholder='Receive Person Name'
                                />
                            </div>
                        </div>
                    </form>
                </div>
            )}
            {selectedPaymentType === 2 && (
                <div>
                    <form className='registration-form'>
                        <div className='row'>
                            <div className='col-12 col-lg-6 my-2'>
                                <label htmlFor={`paymentTransactionId`}>Payment Transaction Id<span>*</span></label>
                                <input
                                    className='form-control'
                                    type="text"
                                    name={`paymentTransactionId`}
                                    id={`paymentTransactionId`}
                                    value={formData.paymentDetails?.paymentTransactionId || ''}
                                    onChange={(e) => handleInputChange('paymentTransactionId', e.target.value)}
                                    placeholder='Enter Payment Transaction Id'
                                />
                            </div>
                            <div className='col-12 col-lg-6 my-2'>
                                <label htmlFor={`paymentDate`}>Payment Date<span>*</span></label>
                                <input
                                    className='form-control'
                                    type="date"
                                    name={`paymentDate`}
                                    id={`paymentDate`}
                                    value={formData.paymentDetails?.paymentDate || ''}
                                    onChange={(e) => handleInputChange('paymentDate', e.target.value)}
                                />
                            </div>
                            <div className='col-12 col-lg-6 my-2'>
                                <label htmlFor={`paymentTime`}>Payment Time<span>*</span></label>
                                <input
                                    className='form-control'
                                    type="time"
                                    name={`paymentTime`}
                                    id={`paymentTime`}
                                    value={formData.paymentDetails?.paymentTime || ''}
                                    onChange={(e) => handleInputChange('paymentTime', e.target.value)}
                                    placeholder='Enter Payment Time'
                                />
                            </div>
                            <div className='col-12 col-lg-6 my-2'>
                                <label htmlFor={`recievePaymentByPerson`}>Receive Payment by Person Name<span>*</span></label>
                                <input
                                    className='form-control'
                                    type="text"
                                    name={`recievePaymentByPerson`}
                                    id={`recievePaymentByPerson`}
                                    value={formData.paymentDetails?.recievePaymentByPerson || ''}
                                    onChange={(e) => handleInputChange('recievePaymentByPerson', e.target.value)}
                                    placeholder='Receive Person Name'
                                />
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </>
    )
}