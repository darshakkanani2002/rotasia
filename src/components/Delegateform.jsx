import React from 'react'

export default function Delegateform() {

    return (
        <div>
            <div className='d-flex flex-wrap bg-white py-2 px-4 align-items-center justify-content-between dashboard-title-text'>
                <div>
                    <h5 className='mb-0'>Delegate</h5>
                </div>
                <div>
                    <div type='button' data-bs-toggle="modal" data-bs-target="#staticBackdrop10">
                        <button type='button' className='create-admin-btn fw-medium px-4 py-2'>Add Delegate</button>
                    </div>
                    {/* Add Delegate Modal */}
                    <div className="modal fade" id="staticBackdrop10" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered add-delegate-popup">
                            <div className="modal-content create-help-desk-content pt-4">
                                <button type="button" className="btn-close position-absolute popup-btn-close z-1" data-bs-dismiss="modal" aria-label="Close"></button>
                                <div className="text-center create-admin-text">
                                    <h3 className='mb-0'>Add Delegate</h3>
                                </div>
                                <div className="modal-body mt-5 align-items-center mt-4">
                                    <form>
                                        <div className='container-fluid'>
                                            <div className='row'>
                                                <div className='col-12 col-lg-6'>
                                                    <div className='mb-3'>
                                                        <label htmlFor="formGroupExampleInput1" className="create-admin-popup-label">Delegate Name</label>
                                                        <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput1" placeholder="Enter Delegate Name" />
                                                    </div>
                                                </div>
                                                <div className='col-12 col-lg-6'>
                                                    <div className='mb-3'>
                                                        <label htmlFor="formGroupExampleInput2" className="create-admin-popup-label">Assign Person Name</label>
                                                        <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput2" placeholder="Enter Assign Name" />
                                                    </div>
                                                </div>
                                                <div className='col-12 col-lg-6'>
                                                    <div className='mb-3'>
                                                        <label htmlFor="formGroupExampleInput3" className="create-admin-popup-label">Assign Person Mobile No.</label>
                                                        <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput3" placeholder="Enter Assign Person Mobile No." />
                                                    </div>
                                                </div>
                                                <div className='col-12 col-lg-6'>
                                                    <div className='mb-3'>
                                                        <label htmlFor="formGroupExampleInput4" className="create-admin-popup-label">Profession</label>
                                                        <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput4" placeholder="Enter Profession" />
                                                    </div>
                                                </div>
                                                <div className='col-12 col-lg-12'>
                                                    <div className='mb-3'>
                                                        <label htmlFor="formGroupExampleInput5" className="create-admin-popup-label">Short Introduction </label>
                                                        <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput5" placeholder="Write Down" />
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
            <div>
                <div className='text-center create-admin-text position-relative mb-5'>
                    <h3 className='mb-0'>Form Fill For Delegate</h3>
                    <img src='/img/ic_back.svg' className='position-absolute start-0 bottom-50' alt="ic_back" />
                </div>

                <div className='container'>
                    <form>
                        <div className='row'>
                            <div className='col-12 col-lg-4 mb-4'>
                                <label htmlFor="exampleFormControlInput1" className="create-admin-label mb-2">Delegate Name</label>
                                <input type="text" className="create-admin-input px-4" id="exampleFormControlInput1" placeholder="Enter Delegate Name" required />
                            </div>
                            <div className='col-12 col-lg-8 mb-4'>
                                <label htmlFor="exampleFormControlInput2" className="create-admin-label mb-2">Assign Person Name & Mobile no.</label>
                                <input type="text" className="create-admin-input px-4" id="exampleFormControlInput2" placeholder="Enter Assign Person Name & Mobile no." required />
                            </div>
                            <div className='col-12 col-lg-4 mb-4'>
                                <label htmlFor="exampleFormControlInput3" className="create-admin-label mb-2">Profession</label>
                                <input type="text" className="create-admin-input px-4" id="exampleFormControlInput3" placeholder="Enter Delegate Profession name" required />
                            </div>
                            <div className='col-12 col-lg-8 mb-4'>
                                <label htmlFor="exampleFormControlInput4" className="create-admin-label mb-2">Short Introduction</label>
                                <input type="text" className="create-admin-input px-4" id="exampleFormControlInput4" placeholder="Write Down Short Introduction" required />
                            </div>
                            <div className='text-center mt-5 pt-5'>
                                <button type="button" className="create-admin-submit-btn">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
