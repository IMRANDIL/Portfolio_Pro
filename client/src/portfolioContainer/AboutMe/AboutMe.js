import React from 'react';
import ScreenHeading from '../../Utilities/SubHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations';
import './AboutMe.css'



function AboutMe(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animation.fadeInScreen(props.id)
    }

    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)
    const SCREEN_CONSTANTS = {
        description: `Hi! My name is Ali Imran Adil and I have done Bachelor Of Commerce from Patna University. After Completing Graduation I started Learning Computer Networking and Web-Development and completed courses through Coursera and Udemy. I'm passionate about learning new things and I am a goal-oriented aspiring Developer.`,
        highlights: {
            bullets: [
                'Full Stack Web and Mobile Development',
                'Interactive Front End as per the design',
                'React and React Native',
                'Building REST and GraphQl API',
                'Managing DataBases',
                'Cloud Engineering'
            ],
            heading: 'Here are few Highlights:'
        }
    };


    const renderHighlights = () => {
        return (
            SCREEN_CONSTANTS.highlights.bullets.map((bullet, index) => {
                return (
                    <div className="highlight" key={index}>
                        <div className="highlight-blob"></div>
                        <span>{bullet}</span>
                    </div>
                )

            })
        )
    }


    return (
        <div className='about-me-container screen-container' id={props.id || ""}>
            <div className="about-me-parent">
                <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'} />
                <div className="about-me-card">
                    <div className="about-me-profile">

                    </div>
                    <div className="about-me-details">
                        <span className='about-me-description'>
                            {SCREEN_CONSTANTS.description}
                        </span>
                        <div className="about-me-highlights">
                            <div className="highlight-heading">
                                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                            </div>
                            {renderHighlights()}
                        </div>
                        <div className="about-me-options">
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
                </div>
            </div>
        </div>
    )
}

export default AboutMe
