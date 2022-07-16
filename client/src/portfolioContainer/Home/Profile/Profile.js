import React from 'react';
import Typical from 'react-typical';
import ScrollService from '../../../Utilities/ScrollService';
import './Profile.css';

function Profile() {
    return (
        <div className='profile-container'>
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">




                            <a href="https://www.facebook.com/aliimran.adilcute/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-facebook-square"></i>
                            </a>
                            <a href="https://twitter.com/000ADIL" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/%E2%9C%A8ali-imran-adil-65a21842/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-linkedin-square"></i>
                            </a>
                            <a href="https://github.com/IMRANDIL" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-github-square"></i>
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=918651688561" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>

                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I'm <span className='highlighted-text'>ALI IMRAN ADIL</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={['Node/Express Dev 🏋️‍♂️', 5000, 'Cloud Engineer 🌨️', 5000, 'ReactNative/Kotlin MobDev 🫀', 5000, 'React/Next Dev 😻', 5000]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                Have the knack of building applications with front and back end operations.
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className="btn primary-btn"
                            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                        >
                            {""}
                            Hire Me{" "}
                        </button>
                        <a href="backend.pdf" download='Ali backend.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
