import React from 'react'

export default function Foodlist() {
    return (
        <div>
            <div className='container-fluid'>
                <div className='d-flex flex-wrap align-items-center justify-content-between'>
                    <div>
                        <img src='/img/ic_back.svg' alt="ic_back" />
                    </div>
                    <div className='create-admin-text'>
                        <h3 className='mb-0'>Food Menu List</h3>
                    </div>
                    <div>
                        <button className='food-date-btn me-0 me-lg-3 mt-3 mt-lg-0' type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop01"><img src='/img/ic_date.svg' className='img-fluid pb-1 food-ic-date-color me-2' alt="ic_date" />Date</button>
                        {/* Model */}
                        <div className="modal fade" id="staticBackdrop01" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="create-admin-text text-center pt-4">
                                        {/* <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                                        <h3>Select Date</h3>
                                    </div>
                                    <div className="modal-body food-date-striped p-0">
                                        <ul className='food-list-date-popup text-center food-date-body ps-0 mt-3'>
                                            <li>09 January 2025</li>
                                            <li>10 January 2025</li>
                                            <li>11 January 2025</li>
                                            <li>12 January 2025</li>
                                        </ul>
                                    </div>
                                    <div className="text-center pb-4">
                                        {/* <button type="button" class="registartion-prev-btn me-4" data-bs-dismiss="modal">Cancel</button> */}
                                        <button type="button" className="registration-next-btn" data-bs-dismiss="modal">Ok</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Add-food-menu-button */}
                        <button className='food-add-menu-btn mt-3 mt-lg-0' type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop03"><img src='/img/ic_btn_plus.svg' className='img-fluid pe-2' alt="ic_btn_plus" />Add food Menu</button>
                        {/* Model */}
                        <div className="modal fade" id="staticBackdrop03" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered food-breakfast-popup">
                                <div className="modal-content">
                                    <div className="create-admin-text text-center pt-4">
                                        <h3>Breakfast</h3>
                                    </div>
                                    <div className="modal-body px-5">
                                        <div className='food-breakfast-popup-cont'>
                                            <p className='mb-0'><span>Date :</span>  09 January,2025</p>
                                            <p className='mb-0'><span>Time :</span> 08:00Am To 10:00Am</p>
                                            <p className='mb-0'><span>Venue</span> : Abcd</p>

                                            <div className='row'>
                                                <div className='col-12 col-lg-4 mt-5'>
                                                    <div className='food-breakfast-popup-menu'>
                                                        <h3 className='text-center'>Veg</h3>
                                                    </div>
                                                    <div className='breakfast-menu-text'>
                                                        <h3>Menu</h3>
                                                        <ul className='breakfast-menu'>
                                                            <li>Waffles</li>
                                                            <li>Milk</li>
                                                            <li>Egg</li>
                                                            <li>Cheese</li>
                                                            <li>Upma</li>
                                                            <li>Toast</li>
                                                            <li>Green Salad</li>
                                                            <li>Bread Butter</li>
                                                            <li>Vegetable Sandwich</li>
                                                            <li>Tea Or Coffee.</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className='col-12 col-lg-4 mt-5'>
                                                    <div className='food-breakfast-popup-menu'>
                                                        <h3 className='text-center'>Non-Veg</h3>
                                                    </div>
                                                    <div className='breakfast-menu-text'>
                                                        <h3>Menu</h3>
                                                        <ul className='breakfast-menu'>
                                                            <li>Waffles</li>
                                                            <li>Milk</li>
                                                            <li>Egg</li>
                                                            <li>Cheese</li>
                                                            <li>Upma</li>
                                                            <li>Toast</li>
                                                            <li>Green Salad</li>
                                                            <li>Bread Butter</li>
                                                            <li>Vegetable Sandwich</li>
                                                            <li>Tea Or Coffee.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='col-12 col-lg-4 mt-5'>
                                                    <div className='food-breakfast-popup-menu'>
                                                        <h3 className='text-center'>Jain</h3>
                                                    </div>
                                                    <div className='breakfast-menu-text'>
                                                        <h3>Menu</h3>
                                                        <ul className='breakfast-menu'>
                                                            <li>Waffles</li>
                                                            <li>Milk</li>
                                                            <li>Egg</li>
                                                            <li>Cheese</li>
                                                            <li>Upma</li>
                                                            <li>Toast</li>
                                                            <li>Green Salad</li>
                                                            <li>Bread Butter</li>
                                                            <li>Vegetable Sandwich</li>
                                                            <li>Tea Or Coffee.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center pb-4">
                                        <div type="button" className="food-breackfast-popup-close" data-bs-dismiss="modal"><img src='/img/ic_popup_close.svg' alt="ic_popup_close" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 food-menu-list-text mt-3 mt-lg-5 pt-0 pt-lg-5'>
                        <h3 className='fw-bolder'>Date : 09 January,2025 </h3>
                    </div>
                    <div className='col-12 col-lg-6 mb-4'>
                        <div className='food-menu-list-back px-3 py-3'>
                            <div className='d-flex justify-content-between'>
                                <div className='food-menu-title'>
                                    <h5 className='mb-3'>Breakfast</h5>
                                    <p>Waffles, Milk,Egg, Cheese, Upma, Toast,Green Salad, Bread Butter, Vegetable Sandwich and Tea Or Coffee.</p>
                                </div>
                                <div>
                                    <img src='/img/ic_more.svg' alt="ic_more" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 mb-4'>
                        <div className='food-menu-list-back px-3 py-3'>
                            <div className='d-flex justify-content-between'>
                                <div className='food-menu-title'>
                                    <h5 className='mb-3'>Lunch</h5>
                                    <p>Soup, Paneer Sabji, Veg. Sabji, Butter Roti, Dal Fry, Rice, Butter Milk, Papad and Ice Cream</p>
                                </div>
                                <div>
                                    <img src='/img/ic_more.svg' alt="ic_more" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 mb-4'>
                        <div className='food-menu-list-back px-3 py-3'>
                            <div className='d-flex justify-content-between'>
                                <div className='food-menu-title'>
                                    <h5 className='mb-3'>High-Tea</h5>
                                    <p>Waffles, Milk,Egg, Cheese, Upma, Toast,Green Salad, Bread Butter, Vegetable Sandwich and Tea Or Coffee.</p>
                                </div>
                                <div>
                                    <img src='/img/ic_more.svg' alt="ic_more" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 mb-4'>
                        <div className='food-menu-list-back px-3 py-3'>
                            <div className='d-flex justify-content-between'>
                                <div className='food-menu-title'>
                                    <h5 className='mb-3'>Dinner</h5>
                                    <p>Soup, Mix Sabji, Veg Handi, Rice/Khichadi, Roasted Papad, Butter Milk, Salas+ Achar+ Sweet (3pes)</p>
                                </div>
                                <div>
                                    <img src='/img/ic_more.svg' alt="ic_more" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center mt-5'>
                        <button type="button" className="create-admin-submit-btn">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
