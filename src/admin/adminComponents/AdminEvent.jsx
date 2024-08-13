import React, { useEffect, useState } from 'react'
import * as yup from 'yup';
import NoDataFoundMessage from '../../components/NoDataFoundMessage';
import axios, { all } from 'axios';
import { API_ENDPOINT, TOKEN } from '../../config';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

export default function AdminEvent() {
    const [formData, setFormData] = useState({
        vName: '',
        dtFromDate: '',
        dtToDate: '',
        vOrganizeBy: '',
        vVenue: '',
        vLogo: ''
    });
    const [errors, setErrors] = useState({});
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false)
    const [searchQuery, setSearchQuery] = useState("");
    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    console.log('Filtered data ===> ', filteredData);

    const eventSchema = yup.object().shape({
        vName: yup.string().required('Event Name is Required'),
        dtFromDate: yup.string().required('Start Date is Required'),
        dtToDate: yup.string().required('End Date is Required'),
        vOrganizeBy: yup.string().required('Organized By is Required'),
        vVenue: yup.string().required('Venue is Required'),
        // vLogo: yup.string().required('Logo is Required'),
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: ''
        }));
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // For File Upload
    // const handleFileChange = (e) => {
    //     const selectedFile = e.target.files[0];
    //     setFile(selectedFile);
    //     setFormData(prevState => ({
    //         ...prevState,
    //         vLogo: file 
    //     }));
    // };

    // For File Upload
    // const handleFileChange = (e) => {
    //     const selectedFile = e.target.files[0];
    //     setFile(selectedFile);

    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //         setFormData(prevState => ({
    //             ...prevState,
    //             vLogo: reader.result
    //         }));
    //     };
    //     reader.readAsDataURL(selectedFile);
    // };

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            await eventSchema.validate(formData, { abortEarly: false });
            // console.log('Form submitted successfully:', formData);
            axios.post(`${API_ENDPOINT}event/details`, formData, {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                }
            }).then(response => {
                console.log('LocalToken:', sessionStorage.getItem('token'))
                toast.success(response.data.vMessage);
            }).catch(error => {
                console.log("Error Submitig Form: ", error);
                if (error.response && error.response.data) {
                    toast.error(error.response.data.vMessage || "An error occurred");
                } else {
                    toast.error(error.message || "An error occurred");
                }
            }).finally(() => {
                setLoading(false);
            })
        } catch (validationErrors) {
            const errorsObj = {};
            validationErrors.inner.forEach(error => {
                errorsObj[error.path] = error.message;
            });
            setErrors(errorsObj);
            setLoading(false);
        }
    };

    // Fetch All Event
    useEffect(() => {
        const fetchData = async () => {
            try {
                axios.get(`${API_ENDPOINT}event/details`, {
                    headers: {
                        'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                    }
                }).then(response => {
                    setAllData(response.data.data);
                }).catch(error => {
                    console.log("Error Getting Data ===> ", error);
                })
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
    // SearchBar
    useEffect(() => {
        if (allData.length > 0) {
            const filtered = allData.filter(
                (item) => item?.vName?.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredData(filtered);
        }
    }, [searchQuery, allData]);
    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    // DeleteEvent
    const deleteEvnet = () => {

    }

    return (
        <>
            {/* Header */}
            <div>
                <div className='d-flex align-items-center  bg-white py-2 px-4 align-items-center justify-content-between dashboard-title-text mb-3'>
                    <div>
                        <h5 className='mb-0'>Event List</h5>
                    </div>
                    <div>
                        <div type='button' data-bs-toggle="modal" data-bs-target="#staticBackdrop07">
                            <button type='button' className='create-admin-btn fw-medium px-4 py-2'>Create Event</button>
                        </div>
                        <div className="modal fade" id="staticBackdrop07" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered agenda-event-list-popup">
                                <div className="modal-content pt-4">
                                    <button type="button" className="btn-close position-absolute popup-btn-close z-1" data-bs-dismiss="modal" aria-label="Close"></button>
                                    <div className="text-center create-admin-text">
                                        <h3 className='mb-0'>Create Event</h3>
                                    </div>
                                    <div className="modal-body mt-4">
                                        <form onSubmit={handleSubmit}>
                                            <div className='container-fluid'>
                                                <div className='row'>
                                                    <div className='col-12 col-lg-5'>
                                                        <div className="mb-3">
                                                            <label htmlFor="vName" className="create-admin-popup-label">Event Name</label>
                                                            <input type="text" className="create-admin-popup-input px-2" id="vName" name='vName' value={formData.vName} onChange={handleChange} placeholder="Enter Event Name" />
                                                            {errors.vName && <div className="text-danger yup-error-message">{errors.vName}</div>}
                                                        </div>
                                                    </div>
                                                    <div className='col-12 col-lg-7'>
                                                        <div className='row'>
                                                            <div className='col-12 col-lg-6'>
                                                                <label htmlFor="dtFromDate" className="create-admin-popup-label">Start Date</label>
                                                                <div className="mb-3">
                                                                    <input type="date" className="create-admin-popup-input px-2" id="dtFromDate" name='dtFromDate' value={formData.dtFromDate} onChange={handleChange} />
                                                                    {errors.dtFromDate && <div className="text-danger yup-error-message">{errors.dtFromDate}</div>}
                                                                </div>
                                                            </div>
                                                            <div className='col-12 col-lg-6'>
                                                                <label htmlFor="dtToDate" className="create-admin-popup-label">End Date</label>
                                                                <div className="mb-3">
                                                                    <input type="date" className="create-admin-popup-input px-2" id="dtToDate" name='dtToDate' value={formData.dtToDate} onChange={handleChange} />
                                                                    {errors.dtToDate && <div className="text-danger yup-error-message">{errors.dtToDate}</div>}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-12 col-lg-6'>
                                                        <div className='mb-3'>
                                                            <label htmlFor="vOrganizeBy" className="create-admin-popup-label">Organized By</label>
                                                            <div className='registration-form'>
                                                                <select name='vOrganizeBy' id='vOrganizeBy' value={formData.vOrganizeBy} onChange={handleChange} className='create-admin-popup-input form-select px-2 rounded-2'>
                                                                    <option value=''>Select Organizer</option>
                                                                    <option value='test'>test</option>
                                                                </select>
                                                                {errors.vOrganizeBy && <div className="text-danger yup-error-message">{errors.vOrganizeBy}</div>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-12 col-lg-6'>
                                                        <div className='mb-3'>
                                                            <label htmlFor="vVenue" className="create-admin-popup-label">Venue</label>
                                                            <div className='registration-form'>
                                                                <input type="text" className="create-admin-popup-input px-2 rounded-2" id="vVenue" name='vVenue' value={formData.vVenue} onChange={handleChange} placeholder="Enter Venue" />
                                                                {errors.vVenue && <div className="text-danger yup-error-message">{errors.vVenue}</div>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-12 col-lg-6'>
                                                        <label htmlFor='vLogo' className='create-admin-popup-label'>Event Logo</label>
                                                        <div className='file-upload'>
                                                            <div className='registration-input-file'>
                                                                {file ?
                                                                    <img src={URL.createObjectURL(file)} alt={file.name} className='uploaded-img' />
                                                                    : <img src='/img/icon_gallery.svg' alt="upload" className='mb-1' />
                                                                }
                                                                <h3 className='text-nowrap mb-0'>{file ? file.name : 'Upload Logo'}</h3>
                                                            </div>
                                                            <input type='file' className='registration-form-input' name='vLogo' id='vLogo' onChange={handleChange}></input>
                                                        </div>
                                                        {errors.vLogo && <div className="text-danger yup-error-message">{errors.vLogo}</div>}
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center mt-5 pb-3">
                                                    <button type="submit" className='allocate-room-popup-btn d-flex align-items-center justify-content-center'>
                                                        {loading ? <span className="spinner-border loader-spinner" role="status"></span> : ''} Submit
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Data-Table */}
            <div className='px-4'>
                <div className='col-12 col-md-3 mb-3'>
                    <input
                        className='adminlist-search-input transportlist-search-input px-5'
                        type="text"
                        value={searchQuery}
                        onChange={handleSearch}
                        placeholder="Search here"
                    />
                </div>
                {
                    allData.length === 0 ? <NoDataFoundMessage />
                        :
                        <div className='table-responsive'>
                            <table className='table event-table mb-0'>
                                <thead>
                                    <tr>
                                        <th className='logo'>Logo</th>
                                        <th className='name'>Name</th>
                                        <th className='venue'>Venue</th>
                                        <th className='organizer'>Organized By</th>
                                        <th className='startDate'>Start Date</th>
                                        <th className='endDate'>End Date</th>
                                        <th></th>
                                        <th className='actions'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData.length === 0 ? (
                                        <tr>
                                            <td colSpan="6" className='text-center py-4 fs-5'>No Data Found</td>
                                        </tr>
                                    ) : (
                                        filteredData.map((item, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <img src={item.vLogo} alt="Event Logo" className='event-logo' />
                                                </td>
                                                <td>{item.vName}</td>
                                                <td>{item.vVenue}</td>
                                                <td>{item.vOrganizeBy}</td>
                                                <td>{item.dtFromDate}</td>
                                                <td>{item.dtToDate}</td>
                                                <td>
                                                    <button className='event-add-admin-btn px-2 py-1'>Add Admin</button>
                                                </td>
                                                <td>
                                                    <div className='d-flex'>
                                                        <div onClick={deleteEvnet}>
                                                            <img src='/img/ic_delate.svg' className='img-fluid mx-1' alt='ic_delate' ></img>
                                                        </div>
                                                        <div>
                                                            <img src='/img/ic_edit_01.svg' className='img-fluid mx-1' alt="ic_edit_01" />
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                }
            </div>
            <Toaster />
        </>
    )
}