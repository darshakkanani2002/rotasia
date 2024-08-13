import React, { Component } from 'react'
import Icclose from '../img/ic_close.svg'
import Iccopy from '../img/ic_copy.svg'
import Icdropdown from '../img/ic_dropdown.svg'
import Icback from '../img/ic_back.svg'

export default class Createadmin extends Component {
    render() {
        return (
            <div>
                <div className='text-center create-admin-text position-relative mb-5'>
                    <h3 className='mb-0'>Create Admin</h3>
                    <img src={Icback} className='position-absolute start-0 bottom-50' alt="ic_back" />
                </div>
                <div>
                    <form>
                        <div className='row align-items-center'>
                            <div className='col-12 col-lg-3 mt-4'>
                                <label htmlFor="exampleFormControlInput1" className="create-admin-label mb-2">First Name</label>
                                <input type="text" className="create-admin-input px-4" id="exampleFormControlInput1" placeholder="First Name" required />
                            </div>
                            <div className='col-12 col-lg-3 mt-4'>
                                <label htmlFor="exampleFormControlInput2" className="create-admin-label mb-2">Middle Name</label>
                                <input type="text" className="create-admin-input px-4" id="exampleFormControlInput2" placeholder="Middle Name" required />
                            </div>
                            <div className='col-12 col-lg-3 mt-4'>
                                <label htmlFor="exampleFormControlInput3" className="create-admin-label mb-2">Last Name</label>
                                <input type="text" className="create-admin-input px-4" id="exampleFormControlInput3" placeholder="Last Name" required />
                            </div>
                            <div className='col-12 col-lg-3 mt-4'>
                                <label htmlFor="exampleFormControlInput4" className="create-admin-label mb-2">Mobile No.</label>
                                <input type="number" className="create-admin-input px-4" id="exampleFormControlInput4" maxLength='10' placeholder="+91 99021 98205" required />
                            </div>
                            <div className='col-12 col-lg-4 mt-4 pt-4'>
                                <label htmlFor='exampleFormControlInput4' className="create-admin-label mb-2">Assigning Position</label><br></br>
                                <div className='position-relative'>
                                    <select name='position' id='position01' className='create-admin-select px-4'>
                                        <option>Admin</option>
                                    </select>
                                    <img src={Icdropdown} alt='ic_dropdown' className='img-fluid registration-ic-dropdown'></img>
                                </div>
                            </div>
                            <div className='text-center mt-5 pt-5'>
                                <button className='create-admin-submit-btn' data-bs-toggle="modal" data-bs-target="#exampleModal" type='submit'>Submit</button>
                            </div>

                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content p-3">
                                        <div>
                                            <img src={Icclose} type='button' className='d-flex ms-auto' data-bs-dismiss="modal" aria-label="Close"></img>
                                            {/* <button type="button" class="btn-close d-flex ms-auto" data-bs-dismiss="modal" aria-label="Close"></button> */}
                                            <h1 className="modal-title fs-5 text-center" id="exampleModalLabel">Create Link</h1>
                                        </div>
                                        <div className="modal-body">
                                            <div>
                                                <div className="col-12">
                                                    <label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">Username</label>
                                                    <div className="input-group mt-3">
                                                        <input type="text" className="form-control create-admin-popup-input" id="inlineFormInputGroupUsername" placeholder="Username" />
                                                        <div className="input-group-text"><img src={Iccopy} className='img-fluid' alt='ic_copy'></img></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center mt-3">
                                            <button type="button" className="create-admin-sharelink-btn" data-bs-dismiss="modal">Share link</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
