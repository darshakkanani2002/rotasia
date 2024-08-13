import React, { useState, useEffect } from 'react'
import Adminlist from './AdiminList'
import { Link } from 'react-router-dom'
import Adminapprovedlist from './Adminapprovedlist'
import Memberlist from './Memberlist'
import Createhotel from './Createhotel'
import Accommodationlist from './Accommodationlist'
import Allocateroom from './Allocateroom'
import Createtransport from './Createtransport'
import Transportlist from './Transportlist'
import Allocatetransport from './Allocatetransport'
import Createfood from './Createfood'
import Foodlist from './Foodlist'
import Addhospital from './Addhospital'
import Agendafrontside from './Agendafrontside'
import Agendabackside from './Agendabackside'
import Helpdisklist from './Helpdisklist'
import Specialtasklist from './Specialtasklist'
import Delegateform from './Delegateform'
import Sargentnamelist from './Sargentnamelist'
import RegistrationType from '../MasterComponent/RegistrationType'
import DistrictNo from '../MasterComponent/DistrictNo'
import ClubName from '../MasterComponent/ClubName'
import BusinessCategory from '../MasterComponent/BusinessCategory'
import Role from '../MasterComponent/Role'
import AssignedPosition from '../MasterComponent/AssignedPosition'
import HotelFacility from '../MasterComponent/HotelFacility'
import VehicleType from '../MasterComponent/VehicleType'
import Route from '../MasterComponent/Route'
import AssignTo from '../MasterComponent/AssignTo'
import Module from '../MasterComponent/Module'
import Sponsor from '../MasterComponent/Sponsor'
import VehicleName from '../MasterComponent/VehicleName'
import Eventlist from './Eventlist'
import City from '../MasterComponent/City'
import UserSponsor from './UserSponsor'
import { useSelector } from 'react-redux'

export default function Dashboard() {
    const [showSpecialTaskList, setShowSpecialTaskList] = useState(false);
    const handleClick = () => {
        setShowSpecialTaskList(true);
    };

    // for help disk list
    const [showHelpDiskList, setShowHelpDiskList] = useState(false)
    const handleClick2 = () => {
        setShowHelpDiskList(true);
    };

    // for add hospital
    const [showAddHospital, setShowAddHospital] = useState(false)
    const handleClick3 = () => {
        setShowAddHospital(true);
    };

    // for delegate from
    const [showDelegateForm, setShowDelegateForm] = useState(false)
    const handleClick4 = () => {
        setShowDelegateForm(true);
    };

    // for sergentnamelist form
    const [showSargentNameList, setShowSargentNameList] = useState(false)
    const handleClick5 = () => {
        setShowSargentNameList(true);
    };

    // for sidebar toggler
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    useEffect(() => {
        function toggleSidebar() {
            setIsSidebarOpen(window.innerWidth >= 992);
        }

        // Toggle sidebar on page load
        toggleSidebar();

        // Toggle sidebar on window resize
        window.addEventListener('resize', toggleSidebar);

        // Cleanup event listener
        return () => {
            window.removeEventListener('resize', toggleSidebar);
        };
    }, []);

    const [showCreateFood, setShowCreateFood] = useState(false);


    return (
        <div>
            <div className='dashboard-back'>
                <div className='container-fluid'>
                    <div className='row flex-nowrap'>
                        <nav className="col-12 col-lg-2 d-md-block bg-light sidebar sidebar-section">
                            <div className='position-sticky'>
                                <div className="px-3 py-3 sidebar-toggle">
                                    {/* <!-- Navigation Toggler Button --> */}
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                        <img src='/img/ic_backside.svg' alt="ic_backside" className="navbar-toggler-icon" />
                                    </button>

                                    {/* <!-- Your logo or brand --> */}
                                    {/* <a className="navbar-brand me-md-auto" href="#">
                                        <img src={YourLogo} className="img-fluid" alt="Your Logo" />
                                    </a> */}
                                </div>
                                <div className={`collapse ${isSidebarOpen ? 'show' : ''} sidebar-menu`} id="sidebarCollapse">
                                    {/* <div className='header-text'>
                                        <h5 className='mb-0'>Rotasia <span>Daman 2025</span></h5>
                                    </div> */}
                                    <div className="nav navigation flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        {/* Dashboard */}
                                        <button className="nav-link active text-start pt-3" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true"><img src='/img/ic_dashboard.svg' className='ic-dashboard' alt='ic_dashboard'></img> Dashboard</button>

                                        <div className="accordion" id="accordionExample">
                                            {/* Admin */}
                                            <div>
                                                <div className="accordion-item">
                                                    <div className="accordion-header" id="headingOne">
                                                        <div type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            <button className="nav-link  text-start pt-3 pb-1" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false"><img src='/img/ic_admin.svg' className='ic-dashboard' alt='ic_user'></img> Admin</button>
                                                        </div>
                                                    </div>
                                                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                        <div>
                                                            <button className="nav-link  text-start py-1 d-none" id="v-pills-create-admin-tab" data-bs-toggle="pill" data-bs-target="#v-pills-create-admin" type="button" role="tab" aria-controls="v-pills-create-admin" aria-selected="false"> Create Admin</button>
                                                            <button className="nav-link  text-start py-1" id="v-pills-admin-list-tab" data-bs-toggle="pill" data-bs-target="#v-pills-admin-list" type="button" role="tab" aria-controls="v-pills-admin-list" aria-selected="false"> Admin List</button>
                                                            <button className="nav-link  text-start py-1" id="v-pills-admin-approved-list-tab" data-bs-toggle="pill" data-bs-target="#v-pills-admin-approved-list" type="button" role="tab" aria-controls="v-pills-admin-approved-list" aria-selected="false"> Approved List</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Registration */}
                                            <div>
                                                <div className="accordion-item">
                                                    <div className="accordion-header" id="headingTwo">
                                                        <div type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                            <button className="nav-link text-start py-3" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false"><img src='/img/ic_Registration.svg' className='ic-dashboard' alt='ic_Registration'></img> Registration</button>
                                                        </div>
                                                    </div>
                                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                        <div>
                                                            <button className="nav-link  text-start py-1 d-none" id="v-pills-create-registration-tab" data-bs-toggle="pill" data-bs-target="#v-pills-create-registration" type="button" role="tab" aria-controls="v-pills-create-registration" aria-selected="false"> Create Registration</button>

                                                            <button className="nav-link  text-start py-1" id="v-pills-member-list-tab" data-bs-toggle="pill" data-bs-target="#v-pills-member-list" type="button" role="tab" aria-controls="v-pills-member-list" aria-selected="false"> Registrations List</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Accommondation */}
                                            <div>
                                                <div className="accordion-item">
                                                    <div className="accordion-header" id="headingThree">
                                                        <div type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                                            <button className="nav-link text-start py-3" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false"><img src='/img/ic_accomodation.svg' className='ic-dashboard' alt='ic_accomodation'></img> Accommodation</button>
                                                        </div>
                                                    </div>
                                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                        <div>
                                                            <button className="nav-link  text-start py-1" id="v-pills-create-hotel-tab" data-bs-toggle="pill" data-bs-target="#v-pills-create-hotel" type="button" role="tab" aria-controls="v-pills-create-hotel" aria-selected="false"> Create Hotel</button>

                                                            <button className="nav-link  text-start py-1" id="v-pills-accommodation-list-tab" data-bs-toggle="pill" data-bs-target="#v-pills-accommodation-list" type="button" role="tab" aria-controls="v-pills-accommodation-list" aria-selected="false"> Accommodation List</button>

                                                            <button className="nav-link  text-start py-1" id="v-pills-allocate-room-tab" data-bs-toggle="pill" data-bs-target="#v-pills-allocate-room" type="button" role="tab" aria-controls="v-pills-allocate-room" aria-selected="false"> Allocate Room</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Transport */}
                                            <div>
                                                <div className="accordion-item">
                                                    <div className="accordion-header" id="headingFoure">
                                                        <div type="button" data-bs-toggle="collapse" data-bs-target="#collapseFoure" aria-expanded="true" aria-controls="collapseFoure">
                                                            <button className="nav-link text-start py-3" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false"><img src='/img/ic_transport.svg' className='ic_transport' alt='ic_dashboard'></img> Transport</button>
                                                        </div>
                                                    </div>
                                                    <div id="collapseFoure" className="accordion-collapse collapse" aria-labelledby="headingFoure" data-bs-parent="#accordionExample">
                                                        <div>
                                                            <button className="nav-link  text-start py-1" id="v-pills-create-transport-tab" data-bs-toggle="pill" data-bs-target="#v-pills-create-transport" type="button" role="tab" aria-controls="v-pills-create-transport" aria-selected="false"> Create Transport</button>

                                                            <button className="nav-link  text-start py-1" id="v-pills-transport-list-tab" data-bs-toggle="pill" data-bs-target="#v-pills-transport-list" type="button" role="tab" aria-controls="v-pills-transport-list" aria-selected="false">Transport List</button>

                                                            <button className="nav-link  text-start py-1" id="v-pills-allocate-transport-tab" data-bs-toggle="pill" data-bs-target="#v-pills-allocate-transport" type="button" role="tab" aria-controls="v-pills-allocate-transport" aria-selected="false"> Allocate Transport</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*  Food */}
                                            <div>
                                                <div className="accordion-item">
                                                    <div className="accordion-header" id="headingFive">
                                                        <div type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                                            <button className="nav-link text-start py-3" id="v-pills-foods-tab" data-bs-toggle="pill" data-bs-target="#v-pills-food" type="button" role="tab" aria-controls="v-pills-food" aria-selected="false"><img src='/img/ic_food.svg' className='ic-dashboard' alt='ic_food_head'></img> Food</button>
                                                        </div>
                                                    </div>
                                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                                        <div>
                                                            <button className="nav-link  text-start py-1" id="v-pills-create-food-tab" data-bs-toggle="pill" data-bs-target="#v-pills-create-food" type="button" role="tab" aria-controls="v-pills-create-food" aria-selected="false"> Create Food Menu</button>

                                                            <button className="nav-link  text-start py-1" id="v-pills-food-list-tab" data-bs-toggle="pill" data-bs-target="#v-pills-food-list" type="button" role="tab" aria-controls="v-pills-food-list" aria-selected="false"> Food Menu List</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Hospital */}
                                            <button className="nav-link text-start py-3" id="v-pills-medical-tab" data-bs-toggle="pill" data-bs-target="#v-pills-medical" type="button" role="tab" aria-controls="v-pills-medical" aria-selected="false"><img src='/img/ic_medical.svg' className='ic-dashboard' alt='ic_medical'></img> Hospital</button>

                                            {/* Agenda */}
                                            <div>
                                                <div className="accordion-item">
                                                    <div className="accordion-header" id="headingSix">
                                                        <div type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                                            <button className="nav-link text-start py-3" id="v-pills-agenda-tab" data-bs-toggle="pill" data-bs-target="#v-pills-agenda" type="button" role="tab" aria-controls="v-pills-agenda" aria-selected="false"><img src='/img/ic_agenda.svg' className='ic-dashboard' alt='ic_agenda'></img> Agenda</button>
                                                        </div>
                                                    </div>
                                                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                                        <div>
                                                            <button className="nav-link  text-start py-1" id="v-pills-front-side-tab" data-bs-toggle="pill" data-bs-target="#v-pills-front-side" type="button" role="tab" aria-controls="v-pills-front-side" aria-selected="false"> Front Team</button>

                                                            <button className="nav-link  text-start py-1" id="v-pills-back-side-tab" data-bs-toggle="pill" data-bs-target="#v-pills-back-side" type="button" role="tab" aria-controls="v-pills-back-side" aria-selected="false"> Back Team</button>

                                                            <button className="nav-link  text-start py-1" id="v-pills-event-list-tab" data-bs-toggle="pill" data-bs-target="#v-pills-event-list" type="button" role="tab" aria-controls="v-pills-event-list" aria-selected="false"> Event List</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Help Desk */}
                                            <button className="nav-link text-start py-3" id="v-pills-helpdesk-tab" data-bs-toggle="pill" data-bs-target="#v-pills-helpdesk" type="button" role="tab" aria-controls="v-pills-helpdesk" aria-selected="false"><img src='/img/ic_helodesk.svg' className='ic-dashboard' alt='ic_helodesk'></img> Helpdesk</button>

                                            {/* Special Task */}
                                            <button className="nav-link text-start py-3" id="v-pills-specialtask-tab" data-bs-toggle="pill" data-bs-target="#v-pills-specialtask" type="button" role="tab" aria-controls="v-pills-specialtask" aria-selected="false"><img src='/img/ic_special_task.svg' className='ic-dashboard' alt='ic_special_task'></img> Special Task</button>

                                            {/* Delegate */}
                                            <button className="nav-link text-start py-3" id="v-pills-delegate-tab" data-bs-toggle="pill" data-bs-target="#v-pills-delegate" type="button" role="tab" aria-controls="v-pills-delegate" aria-selected="false"><img src='/img/ic_delegate.svg' className='ic-dashboard' alt='ic_delegate'></img> Delegate</button>

                                            {/* Guest */}
                                            <button className="nav-link text-start py-3" id="v-pills-guest-tab" data-bs-toggle="pill" data-bs-target="#v-pills-guest" type="button" role="tab" aria-controls="v-pills-guest" aria-selected="false"><img src='/img/ic_guest.svg' className='ic-dashboard' alt='ic_guest'></img> Guest</button>

                                            {/* Sargent */}
                                            <button className="nav-link text-start py-3" id="v-pills-sargrnt-tab" data-bs-toggle="pill" data-bs-target="#v-pills-sargrnt" type="button" role="tab" aria-controls="v-pills-sargrnt" aria-selected="false"><img src='/img/ic_sargent.svg' className='ic-dashboard' alt='ic_sargent'></img> Sargent</button>

                                            {/* Sponsor */}
                                            <button className="nav-link text-start py-3" id="v-pills-user-sponsor-tab" data-bs-toggle="pill" data-bs-target="#v-pills-user-sponsor" type="button" role="tab" aria-controls="v-pills-user-sponsor" aria-selected="false"><img src='/img/ic_sponsor.svg' className='ic-dashboard' alt='ic_sponsor'></img> Sponsor</button>

                                            {/* Masters */}
                                            <div>
                                                <div className="accordion-item">
                                                    <div className="accordion-header" id="headingSeven">
                                                        <div type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                                                            <button className="nav-link text-start py-3" id="v-pills-master-tab" data-bs-toggle="pill" data-bs-target="#v-pills-master" type="button" role="tab" aria-controls="v-pills-master" aria-selected="false"><img src='/img/ic_masters.svg' className='ic-dashboard' alt='ic_master'></img> Masters</button>
                                                        </div>
                                                    </div>
                                                    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                                        <div>
                                                            <button className="nav-link master-link text-start py-1" id="v-pills-registration-type-tab" data-bs-toggle="pill" data-bs-target="#v-pills-registration-type" type="button" role="tab" aria-controls="v-pills-registration-type" aria-selected="false"> Registration Type</button>

                                                            <button className="nav-link master-link text-start py-1" id="v-pills-district-no-tab" data-bs-toggle="pill" data-bs-target="#v-pills-district-no" type="button" role="tab" aria-controls="v-pills-district-no" aria-selected="false"> District No</button>

                                                            <button className="nav-link master-link text-start py-1" id="v-pills-club-name-tab" data-bs-toggle="pill" data-bs-target="#v-pills-club-name" type="button" role="tab" aria-controls="v-pills-club-name" aria-selected="false"> Club Name</button>

                                                            <button className="nav-link master-link text-start py-1" id="v-pills-city-tab" data-bs-toggle="pill" data-bs-target="#v-pills-city" type="button" role="tab" aria-controls="v-pills-city" aria-selected="false"> City,State,Country</button>

                                                            <button className="nav-link master-link text-start py-1" id="v-pills-business-category-tab" data-bs-toggle="pill" data-bs-target="#v-pills-business-category" type="button" role="tab" aria-controls="v-pills-business-category" aria-selected="false"> Business Category</button>

                                                            <button className="nav-link master-link text-start py-1" id="v-pills-role-tab" data-bs-toggle="pill" data-bs-target="#v-pills-role" type="button" role="tab" aria-controls="v-pills-role" aria-selected="false"> Role</button>

                                                            <button className="nav-link master-link text-start py-1" id="v-pills-assign-position-tab" data-bs-toggle="pill" data-bs-target="#v-pills-assign-position" type="button" role="tab" aria-controls="v-pills-assign-position" aria-selected="false"> Assigned Position</button>

                                                            <button className="nav-link master-link text-start py-1" id="v-pills-hotel-facility-tab" data-bs-toggle="pill" data-bs-target="#v-pills-hotel-facility" type="button" role="tab" aria-controls="v-pills-hotel-facility" aria-selected="false"> Hotel Facility</button>

                                                            <button className="nav-link master-link text-start py-1" id="v-pills-vehicle-type-tab" data-bs-toggle="pill" data-bs-target="#v-pills-vehicle-type" type="button" role="tab" aria-controls="v-pills-vehicle-type" aria-selected="false"> Vehicle Type</button>

                                                            <button className="nav-link master-link text-start py-1" id="v-pills-vehicle-name-tab" data-bs-toggle="pill" data-bs-target="#v-pills-vehicle-name" type="button" role="tab" aria-controls="v-pills-vehicle-name" aria-selected="false"> Vehicle Name</button>

                                                            <button className="nav-link master-link text-start py-1" id="v-pills-route-tab" data-bs-toggle="pill" data-bs-target="#v-pills-route" type="button" role="tab" aria-controls="v-pills-route" aria-selected="false"> Route</button>

                                                            <button className="nav-link master-link text-start py-1" id="v-pills-assign-to-tab" data-bs-toggle="pill" data-bs-target="#v-pills-assign-to" type="button" role="tab" aria-controls="v-pills-assign-to" aria-selected="false"> Assign To</button>

                                                            <button className="nav-link master-link text-start py-1" id="v-pills-module-tab" data-bs-toggle="pill" data-bs-target="#v-pills-module" type="button" role="tab" aria-controls="v-pills-module" aria-selected="false"> Module</button>

                                                            <button className="nav-link master-link text-start py-1" id="v-pills-sponsor-tab" data-bs-toggle="pill" data-bs-target="#v-pills-sponsor" type="button" role="tab" aria-controls="v-pills-sponsor" aria-selected="false"> Sponsor</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </nav>

                        <main className='col-12 ms-sm-auto px-0 col-lg-10'>
                            <div className='tab-content tab-cont' id="v-pills-tabContent">
                                <div className="tab-pane fade show active bg-white dash-tab-back" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex="0">
                                    <div className='bg-white py-2 px-4 d-flex align-items-center dashboard-title-text'>
                                        <h5 className='mb-0'>Dashboard</h5>
                                    </div>
                                    {/* <div className='container-fluid'>
                                        <div className='row justify-content-between'>
                                            <div className='col-12 col-sm-6 col-md-6 col-lg-6 dashboard-no-data-found-text d-flex justify-content-center justify-content-lg-start align-items-center'>
                                               
                                                <h4 className='mb-0 pt-1 ms-2'> No data Found</h4>
                                            </div>
                                            <div className='col-12 col-sm-6 col-md-6 col-lg-6 text-center text-lg-end'>
                                                <button type="button" className="dashboard-create-btn fw-medium">
                                                    <img src={Icuser} className='creat-btn-ic' alt='ic_dashboard'></img>
                                                    <span>Create a admin</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div> */}

                                    <div className='text-center align-items-center mt-5 pt-5'>
                                        <img src='/img/img_data_not_found.png' alt='img_data_not_found' className='img-fluid'></img>
                                    </div>
                                </div>

                                {/* Admin */}
                                <div className="tab-pane fade  bg-white dash-tab-back" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0">
                                    <div className='d-flex flex-wrap bg-white py-2 px-5 align-items-center justify-content-between dashboard-title-text'>
                                        <div>
                                            <h5 className='mb-0'>Admin</h5>
                                        </div>
                                        <div>
                                            <button type='button' className='create-admin-btn fw-medium p-2' data-bs-toggle="modal" data-bs-target="#exampleModal3">Create Admin</button>
                                        </div>
                                        {/* <!--Create Admin Modal --> */}
                                        <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered admin-approved-popup">
                                                <div className="modal-content">
                                                    <div className="create-admin-text text-center pt-4">
                                                        <h3 id="exampleModalLabel">Create Admin</h3>
                                                        {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                                                    </div>
                                                    <div className="modal-body text-start px-5">
                                                        <form action="#">
                                                            <div className='row'>
                                                                <div className='col-12 col-lg-4'>
                                                                    <div className="mb-3">
                                                                        <label htmlFor="formGroupExampleInput1" className="create-admin-popup-label">First Name</label>
                                                                        <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput1" placeholder="Enter First Name" />
                                                                    </div>
                                                                </div>
                                                                <div className='col-12 col-lg-4'>
                                                                    <div className="mb-3">
                                                                        <label htmlFor="formGroupExampleInput2" className="create-admin-popup-label">Middle Name</label>
                                                                        <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput2" placeholder="Enter Middle Name" />
                                                                    </div>
                                                                </div>
                                                                <div className='col-12 col-lg-4'>
                                                                    <div className="mb-3">
                                                                        <label htmlFor="formGroupExampleInput3" className="create-admin-popup-label">Last Name</label>
                                                                        <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput3" placeholder="Enter Last Name" />
                                                                    </div>
                                                                </div>
                                                                <div className='col-12 col-lg-4'>
                                                                    <div className="mb-3">
                                                                        <label htmlFor="formGroupExampleInput4" className="create-admin-popup-label">Mobile No.</label>
                                                                        <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput4" placeholder="Enter Mobile No." />
                                                                    </div>
                                                                </div>
                                                                <div className='col-12 col-lg-4'>
                                                                    <div className="mb-3">
                                                                        <label htmlFor="formGroupExampleInput5" className="create-admin-popup-label">Assigning Position</label><br />
                                                                        {/* <input type="text" className="create-admin-popup-input px-2" id="formGroupExampleInput4" placeholder="Enter Mobile No." /> */}
                                                                        <select name="position" className='create-admin-select-input'>
                                                                            <option value="assign position">Select Assigning Position</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="text-center pb-5 mt-4">
                                                        <button type="button" className="create-admin-sharelink-btn" data-bs-dismiss="modal">Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-center align-items-center mt-5 pt-5'>
                                        <img src='/img/img_data_not_found.png' alt='img_data_not_found' className='img-fluid'></img>
                                    </div>
                                </div>
                                {/* Admin List */}
                                <div className="tab-pane fade  bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-admin-list" role="tabpanel" aria-labelledby="v-pills-create-admin-list" tabIndex="0">
                                    <Adminlist></Adminlist>
                                </div>

                                <div className="tab-pane fade  bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-admin-approved-list" role="tabpanel" aria-labelledby="v-pills-admin-approved-list" tabIndex="0">
                                    <Adminapprovedlist></Adminapprovedlist>
                                </div>

                                {/* Registrarion */}
                                <div className="tab-pane fade bg-white dash-tab-back" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabIndex="0">
                                    <div className='d-flex flex-wrap bg-white py-2 px-5 align-items-center justify-content-between dashboard-title-text'>
                                        <div>
                                            <h5 className='mb-0'>Registration</h5>
                                        </div>
                                        <div>
                                            <button type='button' className='create-admin-btn fw-medium p-2'>Create Registration</button>
                                        </div>
                                    </div>
                                    <div className='text-center align-items-center'>
                                        {/* <img src={Imgdatanofound} alt='img_data_not_found' className='img-fluid'></img> */}
                                        <h6 className='mb-0'>There are no records to display</h6>
                                    </div>
                                </div>


                                <div className="tab-pane fade  bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-member-list" role="tabpanel" aria-labelledby="v-pills-member-list-tab" tabIndex="0">
                                    <Memberlist></Memberlist>
                                </div>

                                {/* Accommodation */}

                                <div className="tab-pane fade bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabIndex="0">
                                    {/* <div className='row justify-content-between'>
                                        <div className='col-12 col-sm-6 col-md-6 col-lg-6 dashboard-no-data-found-text d-flex justify-content-center justify-content-lg-start  align-items-center'>
                                            <div><a href='createadmin.js'><img src={Icback} alt='ic_back' className='img-fluid'></img></a></div>
                                            <h4 className='mb-0 pt-1 ms-2'> No data Found</h4>
                                        </div>
                                        <div className='col-12 col-sm-6 col-md-6 col-lg-6 text-center text-lg-end'>
                                            <Link to='/createhotel'><button className='dashboard-create-btn fw-medium'><img src={Icregisten} className='creat-btn-ic' alt='ic_dashboard'></img>Create Hotel</button></Link>
                                        </div>
                                    </div> */}
                                    <div className='d-flex flex-wrap bg-white py-2 px-4 align-items-center justify-content-between dashboard-title-text'>
                                        <div>
                                            <h5 className='mb-0'>Accommodation</h5>
                                        </div>
                                        <div>
                                            <button type='button' className='create-admin-btn fw-medium p-2'>Create Hotel</button>
                                        </div>
                                    </div>
                                    <div className='text-center align-items-center mt-5 pt-5'>
                                        <img src='/img/img_data_not_found.png' alt='img_data_not_found' className='img-fluid'></img>
                                    </div>
                                </div>

                                <div className="tab-pane fade  bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-create-hotel" role="tabpanel" aria-labelledby="v-pills-create-hotel-tab" tabIndex="0">
                                    <Createhotel></Createhotel>
                                </div>

                                <div className="tab-pane fade  bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-accommodation-list" role="tabpanel" aria-labelledby="v-pills-accommodation-list-tab" tabIndex="0">
                                    <Accommodationlist></Accommodationlist>
                                </div>

                                <div className="tab-pane fade  bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-allocate-room" role="tabpanel" aria-labelledby="v-pills-allocate-room-tab" tabIndex="0">
                                    <Allocateroom></Allocateroom>
                                </div>

                                {/* transport */}

                                <div className="tab-pane fade bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabIndex="0">
                                    <div className='d-flex flex-wrap bg-white py-2 px-4 align-items-center justify-content-between dashboard-title-text'>
                                        <div>
                                            <h5 className='mb-0'>Transport</h5>
                                        </div>
                                        <div>
                                            <button type='button' className='create-admin-btn fw-medium p-2'>Create Transport</button>
                                        </div>
                                    </div>
                                    <div className='text-center align-items-center mt-5 pt-5'>
                                        <img src='/img/img_data_not_found_02.png' alt='img_data_not_found_02' className='img-fluid'></img>
                                    </div>
                                </div>

                                <div className="tab-pane fade  bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-create-transport" role="tabpanel" aria-labelledby="v-pills-create-transport-tab" tabIndex="0">
                                    <Createtransport></Createtransport>
                                </div>


                                <div className="tab-pane fade  bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-transport-list" role="tabpanel" aria-labelledby="v-pills-transport-list-tab" tabIndex="0">
                                    <Transportlist></Transportlist>
                                </div>


                                <div className="tab-pane fade  bg-white  create-admin-back overflow-y-auto dash-tab-back " id="v-pills-allocate-transport" role="tabpanel" aria-labelledby="v-pills-allocate-transport-tab" tabIndex="0">
                                    <Allocatetransport></Allocatetransport>
                                </div>

                                {/* food */}
                                <div className="tab-pane fade bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-food" role="tabpanel" aria-labelledby="v-pills-foods-tab" tabIndex="0">
                                    <div className='d-flex flex-wrap bg-white py-2 px-4 align-items-center justify-content-between dashboard-title-text'>
                                        <div>
                                            <h5 className='mb-0'>{showCreateFood ? 'Create Food Menu' : 'Food Menu List'}</h5>
                                        </div>
                                        {!showCreateFood && (
                                            <div>
                                                <button type='button' className='create-admin-btn fw-medium p-2' onClick={() => setShowCreateFood(true)}>Create Food Menu</button>
                                            </div>
                                        )}
                                    </div>
                                    {showCreateFood ? <Createfood /> : (
                                        <div className='text-center'>
                                            <p>Data not found</p>
                                        </div>
                                    )}
                                    {/* <div className='row justify-content-start justify-content-lg-between'>
                                        <div className='col-12 col-sm-6 col-md-6 col-lg-6 dashboard-no-data-found-text d-flex justify-content-center justify-content-lg-start  align-items-center'>
                                            <div><a href='createadmin.js'><img src='/img/ic_back.svg' alt='ic_back' className='img-fluid'></img></a></div>
                                            <h4 className='mb-0 pt-1 ms-2'> No data Found</h4>
                                        </div>
                                        <div className='col-12 col-sm-6 col-md-6 col-lg-6 text-center text-lg-end'>
                                            <Link to='/createhotel'><button className='dashboard-create-btn fw-medium mx-1 mb-2'><img src='/img/ic_food_plus.svg' className='creat-btn-ic' alt='ic_food_plus'></img><span>Create Food menu</span></button></Link>

                                            <button className='dashboard-create-btn fw-medium mx-1 ms-lg-3 mt-3 mt-lg-0 mb-2'><img src='/img/ic_food_menu.svg' className='creat-btn-ic' alt='ic_food_menu'></img><span> Food menu</span></button>
                                        </div>
                                    </div>
                                    <div className='text-center align-items-center mt-5 pt-5'>
                                        <img src='/img/img_data_not_found_03.png' alt='img_data_not_found_03' className='img-fluid'></img>
                                    </div> */}
                                </div>

                                <div className="tab-pane fade  bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-create-food" role="tabpanel" aria-labelledby="v-pills-create-food-tab" tabIndex="0">
                                    <Createfood></Createfood>
                                </div>

                                <div className="tab-pane fade  bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-food-list" role="tabpanel" aria-labelledby="v-pills-food-list-tab" tabIndex="0">
                                    <Foodlist></Foodlist>
                                </div>

                                {/* Hospital */}
                                <div className="tab-pane fade bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-medical" role="tabpanel" aria-labelledby="v-pills-medical-tab" tabIndex="0">
                                    <Addhospital></Addhospital>
                                </div>

                                {/* Agenda */}
                                <div className="tab-pane fade bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-agenda" role="tabpanel" aria-labelledby="v-pills-agenda-tab" tabIndex="0">
                                    <div className='d-flex flex-wrap bg-white py-2 px-4 align-items-center justify-content-between dashboard-title-text'>
                                        <div>
                                            <h5 className='mb-0'>Front Team</h5>
                                        </div>

                                        <div>
                                            <button type='button' className='create-admin-btn fw-medium p-2'>Create Front Team</button>
                                        </div>
                                    </div>
                                    {/* <div className='row justify-content-between'>
                                        <div className='col-12 col-sm-6 col-md-6 col-lg-6 dashboard-no-data-found-text d-flex justify-content-center justify-content-lg-start  align-items-center'>
                                            <div><a href='createadmin.js'><img src='/img/ic_back.svg' alt='ic_back' className='img-fluid'></img></a></div>
                                            <h4 className='mb-0 pt-1 ms-2'> No data Found</h4>
                                        </div>
                                        <div className='col-12 col-sm-6 col-md-6 col-lg-6 text-center text-lg-end'>
                                            <Link to=''><button className='dashboard-create-btn fw-medium me-0 me-lg-3 mb-3 mb-md-3 mb-lg-0'><span>Add Front Side</span></button></Link>
                                            <Link to=''><button className='dashboard-create-btn fw-medium'><span>Add Back Side</span></button></Link>
                                        </div>
                                    </div> */}
                                    <div className='text-center align-items-center mt-5 pt-5'>
                                        <img src='/img/img_data_not_found_04.png' alt='img_data_not_found_04' className='img-fluid'></img>
                                    </div>
                                </div>
                                <div className="tab-pane fade bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-front-side" role="tabpanel" aria-labelledby="v-pills-front-side-tab" tabIndex="0">
                                    <Agendafrontside></Agendafrontside>
                                </div>
                                <div className="tab-pane fade bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-back-side" role="tabpanel" aria-labelledby="v-pills-back-side-tab" tabIndex="0">
                                    <Agendabackside></Agendabackside>
                                </div>

                                <div className="tab-pane fade bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-event-list" role="tabpanel" aria-labelledby="v-pills-event-list-tab" tabIndex="0">
                                    <Eventlist></Eventlist>
                                </div>

                                {/* Helpdesk */}
                                <div className="tab-pane fade bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-helpdesk" role="tabpanel" aria-labelledby="v-pills-helpdesk-tab" tabIndex="0">
                                    <Helpdisklist></Helpdisklist>
                                </div>

                                {/* special task */}
                                <div className="tab-pane fade bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-specialtask" role="tabpanel" aria-labelledby="v-pills-specialtask-tab" tabIndex="0">
                                    <Specialtasklist></Specialtasklist>
                                </div>

                                {/* Deletage */}
                                <div className="tab-pane fade bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-delegate" role="tabpanel" aria-labelledby="v-pills-delegate-tab" tabIndex="0">
                                    <Delegateform></Delegateform>
                                </div>

                                {/* Guest */}
                                <div className="tab-pane fade bg-white px-4 pt-2 create-admin-back" id="v-pills-guest" role="tabpanel" aria-labelledby="v-pills-guest-tab" tabIndex="0">...</div>

                                {/* sergent */}
                                <div className="tab-pane fade bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-sargrnt" role="tabpanel" aria-labelledby="v-pills-guest-sargrnt" tabIndex="0">
                                    <Sargentnamelist></Sargentnamelist>
                                </div>

                                {/* sponsor */}
                                <div className="tab-pane fade bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-user-sponsor" role="tabpanel" aria-labelledby="v-pills-user-sponsor" tabIndex="0">
                                    <UserSponsor></UserSponsor>
                                </div>

                                {/* Master */}
                                <div className="tab-pane fade bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-master" role="tabpanel" aria-labelledby="v-pills-master-tab" tabIndex="0">
                                    {/* <RegistrationType></RegistrationType> */}
                                </div>

                                <div className="tab-pane fade bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-registration-type" role="tabpanel" aria-labelledby="v-pills-registration-type-tab" tabIndex="0">
                                    <RegistrationType></RegistrationType>
                                </div>

                                <div className="tab-pane fade bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-district-no" role="tabpanel" aria-labelledby="v-pills-district-no-tab" tabIndex="0">
                                    <DistrictNo></DistrictNo>
                                </div>

                                <div className="tab-pane fade bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-club-name" role="tabpanel" aria-labelledby="v-pills-club-name-tab" tabIndex="0">
                                    <ClubName></ClubName>
                                </div>

                                <div className="tab-pane fade bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-city" role="tabpanel" aria-labelledby="v-pills-city-tab" tabIndex="0">
                                    <City></City>
                                </div>

                                <div className="tab-pane fade bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-business-category" role="tabpanel" aria-labelledby="v-pills-business-category-tab" tabIndex="0">
                                    <BusinessCategory></BusinessCategory>
                                </div>

                                <div className="tab-pane fade bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-role" role="tabpanel" aria-labelledby="v-pills-role-tab" tabIndex="0">
                                    <Role></Role>
                                </div>

                                <div className="tab-pane fade bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-assign-position" role="tabpanel" aria-labelledby="v-pills-assign-position-tab" tabIndex="0">
                                    <AssignedPosition></AssignedPosition>
                                </div>

                                <div className="tab-pane fade bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-hotel-facility" role="tabpanel" aria-labelledby="v-pills-hotel-facility-tab" tabIndex="0">
                                    <HotelFacility></HotelFacility>
                                </div>

                                <div className="tab-pane fade bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-vehicle-type" role="tabpanel" aria-labelledby="v-pills-vehicle-type-tab" tabIndex="0">
                                    <VehicleType></VehicleType>
                                </div>


                                <div className="tab-pane fade bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-vehicle-name" role="tabpanel" aria-labelledby="v-pills-vehicle-name-tab" tabIndex="0">
                                    <VehicleName></VehicleName>
                                </div>

                                <div className="tab-pane fade bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-route" role="tabpanel" aria-labelledby="v-pills-route-tab" tabIndex="0">
                                    <Route></Route>
                                </div>

                                <div className="tab-pane fade bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-assign-to" role="tabpanel" aria-labelledby="v-pills-assign-to-tab" tabIndex="0">
                                    <AssignTo></AssignTo>
                                </div>

                                <div className="tab-pane fade bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-module" role="tabpanel" aria-labelledby="v-pills-module-tab" tabIndex="0">
                                    <Module></Module>
                                </div>

                                <div className="tab-pane fade bg-white create-admin-back overflow-y-auto dash-tab-back " id="v-pills-sponsor" role="tabpanel" aria-labelledby="v-pills-sponsor-tab" tabIndex="0">
                                    <Sponsor></Sponsor>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}
