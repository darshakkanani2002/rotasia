import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, setUser } from '../Features/auth/authSlice';

export default function Header() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const currentUser = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const storedToken = sessionStorage.getItem('token');
        if (storedToken) {
            // Dispatch an action to set the user as logged in
            dispatch(login());

            // Load user data from local storage and set it in Redux state
            const storedUser = JSON.parse(sessionStorage.getItem('currentUser'));
            if (storedUser) {
                dispatch(setUser(storedUser));
            }
        }
    }, [dispatch]);

    return (
        <div>
            <div className='header-back z-3'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='d-flex flex-wrap justify-content-between align-items-center'>
                                <div className='header-text'>
                                    <h5 className='mb-0'>Rotasia <span>Daman 2025</span></h5>
                                </div>
                                {isLoggedIn ? (
                                    <div className='d-flex align-items-center'>
                                        <div className='position-relative mx-2'>
                                            <img src="/img/ic_notification.svg" alt="ic_notification" />
                                            <span className="position-absolute translate-middle header-notification p-1">
                                                1
                                            </span>
                                        </div>
                                        <div className='mx-2'>
                                            <img src="/img/img_profile.svg" className='img-fluid' alt="img_profile" />
                                            <span className='header-profile-name fw-medium px-2'>
                                                {currentUser ? currentUser.vMobile : "User"}
                                            </span>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
