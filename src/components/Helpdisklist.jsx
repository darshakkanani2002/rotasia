import React, { useState } from 'react'

export default function Helpdisklist() {
    const [showContent, setShowContent] = useState(false);

    const handleClick = () => {
        setShowContent(!showContent);
    };
    return (
        <div>
            <div className='d-flex flex-wrap bg-white py-2 px-4 align-items-center justify-content-between dashboard-title-text'>
                <div>
                    <h5 className='mb-0'>Helpdesk</h5>
                </div>
                <div>
                    <div type='button' data-bs-toggle="modal" data-bs-target="#staticBackdrop08">
                        <button type='button' className='create-admin-btn fw-medium px-4 py-2'>Create Helpdesk</button>
                    </div>
                    {/* Create Helpdesk Model  */}
                    <div className="modal fade" id="staticBackdrop08" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered agenda-event-list-popup create-helpdesk-popup">
                            <div className="modal-content create-help-desk-content pt-4">
                                <button type="button" className="btn-close position-absolute popup-btn-close z-1" data-bs-dismiss="modal" aria-label="Close"></button>
                                <div className="text-center create-admin-text">
                                    <h3 className='mb-0'>Create Helpdesk</h3>
                                </div>
                                <div className="modal-body mt-5 align-items-center mt-4">
                                    <form>
                                        <div className='container-fluid'>
                                            <div className='row'>
                                                <div className='col-12 col-lg-6'>
                                                    <div className='mb-3'>
                                                        <label htmlFor="formGroupExampleInput1" className="create-admin-popup-label">Head Name</label>
                                                        <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput1" placeholder="Enter here" />
                                                    </div>
                                                </div>
                                                <div className='col-12 col-lg-6'>
                                                    <div className='mb-3'>
                                                        <label htmlFor="formGroupExampleInput2" className="create-admin-popup-label">Contrack Number</label>
                                                        <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput2" placeholder="Enter Contrack Number" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center mt-5 pb-3">
                                                <button type="button" className='allocate-room-popup-btn' data-bs-dismiss="modal">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* old design */}
            <div className='d-none'>
                <div className='text-center create-admin-text position-relative mb-5'>
                    <div>
                        <button className='help-desk-no-btn p-2'><a href='tel:+919285285201'>Help Desk No. : +91 92852 85201</a></button>
                        <button className='help-desk-rotasia-management-btn p-2 ms-0 ms-lg-3'><a href='tel:26195202585'>Rotasia Management No. : 261 952 025 85</a></button>
                    </div>
                    <img src='/img/ic_back.svg' className='position-absolute start-0 bottom-50' alt="ic_back" onClick={handleClick} />
                </div>
                <div className='mt-5'>
                    <div className='container'>
                        <div>
                            <table className='helpdesk-table table-striped'>
                                <thead>
                                    <tr>
                                        <th>Head Name</th>
                                        <th>Contact Number</th>
                                    </tr>
                                </thead>
                                <tbody className='helpdesk-table-body'>
                                    <tr>
                                        <td>Register</td>
                                        <td>+91 85200 15285 / +91 8521 52015</td>
                                    </tr>
                                    <tr>
                                        <td>Accommodation</td>
                                        <td>+91 85200 15285 / +91 8521 52015</td>
                                    </tr>
                                    <tr>
                                        <td>Food</td>
                                        <td>+91 85200 15285 / +91 8521 52015</td>
                                    </tr>
                                    <tr>
                                        <td>Transport</td>
                                        <td>+91 85200 15285 / +91 8521 52015</td>
                                    </tr>
                                    <tr>
                                        <td>Medical</td>
                                        <td>+91 85200 15285 / +91 8521 52015</td>
                                    </tr>
                                    <tr>
                                        <td>Agenda</td>
                                        <td>+91 85200 15285 / +91 8521 52015</td>
                                    </tr>
                                    <tr>
                                        <td>Helpdesk</td>
                                        <td>+91 85200 15285 / +91 8521 52015</td>
                                    </tr>
                                    <tr>
                                        <td>Special Task</td>
                                        <td>+91 85200 15285 / +91 8521 52015</td>
                                    </tr>
                                    <tr>
                                        <td>Delegate</td>
                                        <td>+91 85200 15285 / +91 8521 52015</td>
                                    </tr>
                                    <tr>
                                        <td>Guest</td>
                                        <td>+91 85200 15285 / +91 8521 52015</td>
                                    </tr>
                                    <tr>
                                        <td>Sargent</td>
                                        <td>+91 85200 15285 / +91 8521 52015</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
