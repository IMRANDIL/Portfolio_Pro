import React, { useState } from 'react';
import ScreenHeading from '../../Utilities/SubHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations';


import './Resume.css'
// import index from 'react-typical';
function Resume(props) {
    const [selectBulletIndex, setSelectBulletIndex] = useState(0);
    const [caraousalOffSetStyle, setCarousalOffSetStyle] = useState({});

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animation.fadeInScreen(props.id)
    }

    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const ResumeHeading = (props) => {
        return (
            <div className="resume-heading">
                <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>{props.heading ? props.heading : ''}</span>
                    {props.fromDate && props.toDate ? (
                        <div className="heading-date">
                            {props.fromDate + '_' + props.toDate}
                        </div>
                    ) : (
                        <div></div>
                    )}

                    <div className="resume-sub-heading">
                        <span>{props.subHeading ? props.subHeading : ''}</span>
                    </div>
                    <div className="resume-heading-description">
                        <span>{props.description ? props.description : ''}</span>
                    </div>
                </div>
            </div>
        )
    }

    const resumeBullets = [
        { label: 'Eduacation', logoSrc: 'education.svg' },
        { label: 'Certification', logoSrc: 'work-history.svg' },
        { label: 'Programming Skills', logoSrc: 'programming-skills.svg' },
        { label: 'Projects', logoSrc: 'projects.svg' },
        { label: 'Interests', logoSrc: 'interests.svg' }
    ];

    const programmingSkillDetails = [
        { skill: 'JavaScript', ratingPercentage: 75 },
        { skill: 'React Js', ratingPercentage: 60 },
        { skill: 'React Native', ratingPercentage: 60 },
        { skill: 'Express Js', ratingPercentage: 80 },
        { skill: 'Node Js', ratingPercentage: 70 },
        { skill: 'Mongo Db', ratingPercentage: 70 },
        { skill: 'HTML', ratingPercentage: 80 },
        { skill: 'CSS', ratingPercentage: 65 },
        { skill: 'MYSQL', ratingPercentage: 60 },
        { skill: 'PostgreSQL', ratingPercentage: 60 }
    ];

    const projectDetails = [
        {
            title: 'Personal Portfolio Website',
            duration: { fromDate: '2021', toDate: '2022' },
            description: 'A Personal Portfolio Website to showcase all my details and projects at one place.',
            subHeading: 'Technologies Used: React JS, BootStrap, Node Js, Express Js'
        },
        {
            title: 'The File_Sharing Website',
            duration: { fromDate: '2021', toDate: '2022' },
            description: 'A File Sharing App where we can share our files and share it to anyone and can send email the link to the file too.',
            subHeading: 'Technologies Used: HTML, CSS, JavaScript, Node JS, Express JS'
        },
        {
            title: 'E-Commerce Website',
            duration: { fromDate: '2021', toDate: '2022' },
            description: 'An E-Commerce website called Comfy Store where we can search the items and add it to the cart.',
            subHeading: 'Technologies Used: HTML, CSS, Vanilla JavaScript'
        }

    ];



    const resumeDetails = [
        <div className="resume-screen-container" key='education' >
            <ResumeHeading
                heading={'Patna University,India'}
                subHeading={'BACHELOR OF COMMERCE'}
                fromDate={'2012'}
                toDate={'2015'}

            />


            <ResumeHeading
                heading={'YNP,Inter College,India'}
                subHeading={'INTERMEDIATE OF SCIENCE(MATH)'}
                fromDate={'2010'}
                toDate={'2012'}

            />
            <ResumeHeading
                heading={'Azad Academy,Araria,India'}
                subHeading={'Secondary School Certificate'}
                fromDate={'2009'}
                toDate={'2010'}

            />
        </div>,



        <div className="resume-screen-container" key='work-experience'>

            <ResumeHeading
                heading={'Udemy'}
                subHeading={'Javascript Tutorial and Projects Course(John Smilga)'}
                fromDate={'2020'}
                toDate={'2021'}

            />
            <div className="experience-description">
                <span className='resume-description-text'>
                    Learned the three fundamental languages of the web: HTML, CSS and Javascript.
                </span>
            </div>
            <div className="experience-description">
                <span className='resume-description-text'>
                    - Built 15 JavaScript Projects including an E-Commerce Website(Comfy Store) and Pushed it to the Github.
                </span>
                <br />
                <span className='resume-description-text'>
                    - Some of the great Project is Fetching Github Followers and show them on the page and using pagination and another great Project where we fetched the data from the CocktailDb API.
                </span>
                <br />
                <span className='resume-description-text hidethis'>
                    - Learned How to get data from the API and show them on the page.
                </span>
            </div>
        </div>,



        <div className="resume-screen-container programming-skills-container" key='programming-skills'>
            {programmingSkillDetails.map((skill, index) => {
                return (
                    <div className="skill-parent" key={index}>
                        <div className="heading-bullet"></div>
                        <span>{skill.skill}</span>
                        <div className="skill-percentage">
                            <div style={{ width: skill.ratingPercentage + "%" }} className='active-percentage'>

                            </div>
                        </div>
                    </div>
                )
            })}
        </div>,




        <div className="resume-screen-container" key='projects'>
            {projectDetails.map((project, index) => {
                return (
                    <ResumeHeading
                        key={index}
                        heading={project.title}
                        subHeading={project.subHeading}
                        description={project.description}
                        fromDate={project.duration.fromDate}
                        toDate={project.duration.toDate}

                    />
                )
            })}
        </div>,






        <div className="resume-screen-container" key='interests'>
            <ResumeHeading
                heading='Playing Cricket'
                description='Apart from being a Tech Enthusiast and a Programmer, I love playing and watching Cricket.'


            />

            <ResumeHeading
                heading='Coding'
                description='I love Coding and I love to build and learn new things and now coding is becoming my passion.'


            />

            <ResumeHeading
                heading='Travelling'
                description='I love being transported from place to place and always try to find a way to travel.'


            />
        </div>


    ];


    const handleCarousal = (index) => {
        let offSetHeight = 380;
        let newCarousalOffset = {
            style: { transform: `translateY(${index * offSetHeight * -1}px)` }
        };
        setCarousalOffSetStyle(newCarousalOffset);
        setSelectBulletIndex(index)
    }


    const getBullets = () => {
        return resumeBullets.map((bullet, index) => {
            return (
                <div onClick={() => handleCarousal(index)} className={index === selectBulletIndex ? 'bullet selected-bullet' : 'bullet'} key={index}>
                    <img src={require(`../../assets/Resume/${bullet.logoSrc}`)} alt="oops...no internet connection" className="bullet-logo" />
                    <span className="bullet-label">{bullet.label}</span>
                </div>
            )
        })
    }


    const getResumeScreens = () => {
        return (
            <div
                style={caraousalOffSetStyle.style}
                className='resume-details-carousal'
            >
                {resumeDetails.map((detail) => detail)}
            </div>
        )
    }



    return (
        <div className='resume-container screen-container' id={props.id || ''}>
            <div className="resume-content">
                <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'} />
                <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>
                            <div className="bullets">{getBullets()}</div>
                        </div>
                    </div>
                    <div className="resume-bullet-details">
                        {getResumeScreens()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
