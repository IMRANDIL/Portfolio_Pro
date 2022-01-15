import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from '../../Utilities/SubHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations';
import './Testimonial.css';



function Testimonial(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animation.fadeInScreen(props.id)
    }

    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)


    const options = {
        loop: true,
        margin: -10,
        nav: true,
        animateIn: 'bounceInRight',
        animateOut: 'bounceOutRight',
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,

            },
            768: {
                items: 1,

            },
            1000: {
                items: 2
            }
        }
    }


    return (
        <div id={props.id || ''}>
            <ScreenHeading

                title={'Certifications'}
                subHeading={'What My Instuctor Taught Me'}

            />
            <section className="testimonial-section" >
                <div className="container">
                    <div className="row">
                        <OwlCarousel className='owl-carousel' id='testimonial-carousel' {...options}>
                            <div className="col-lg-12">
                                <div className="testi-item">
                                    <div className="testi-comment">
                                        <p>
                                            <i className='fa fa-quote-left' />
                                            I learned three fundamental languages of the web HTML, CSS and Javascript and build 15 JavaScript Projects including an E-Commerce WebSite.


                                            <i className='fa fa-quote-right' />
                                        </p>
                                        <ul className='stars list-unstyled'>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star-half-alt" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="client-info">
                                        <img src="img/john.png" alt="instructor-img" />
                                        <h5>John Smilga</h5>
                                        <p>JavaScript and React Instructor</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-12">
                                <div className="testi-item">
                                    <div className="testi-comment">
                                        <p>
                                            <i className='fa fa-quote-left' />
                                            I am Learning The AWS Fundamentals: IAM, EC2, Load Balancing, Auto Scaling, EBS, EFS, Route 53, RDS, ElastiCache, S3, CloudFront and other AWS services.
                                            <i className='fa fa-quote-right' />
                                        </p>
                                        <ul className='stars list-unstyled'>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star-half-alt" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="client-info">
                                        <img src="img/stephen.jpg" alt="instructor-img" />
                                        <h5>Stephane Maarek</h5>
                                        <p>AWS Solution Architect Instructor</p>
                                    </div>
                                </div>
                            </div>



                            <div className="col-lg-12">
                                <div className="testi-item">
                                    <div className="testi-comment">
                                        <p>
                                            <i className='fa fa-quote-left' />
                                            I learned about the fundamental skills of deploying, monitoring, and maintaining projects on Google Cloud and learned Many other Google Cloud Services.
                                            <i className='fa fa-quote-right' />
                                        </p>
                                        <ul className='stars list-unstyled'>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star-half-alt" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="client-info">
                                        <img src="img/ranga.jpg" alt="instructor-img" />
                                        <h5>Ranga Karanam</h5>
                                        <p>Google Cloud Associate Engineer Instructor</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-12">
                                <div className="testi-item">
                                    <div className="testi-comment">
                                        <p>
                                            <i className='fa fa-quote-left' />
                                            I completed this: The Complete 2022 Web Development Bootcamp where I learned about HTML,CSS,JavaScript,Nodejs,Expressjs and MongoDb.
                                            <i className='fa fa-quote-right' />
                                        </p>
                                        <ul className='stars list-unstyled'>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star-half-alt" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="client-info">
                                        <img src="img/angela.jpeg" alt="instructor-img" />
                                        <h5>Dr. Angela Yu</h5>
                                        <p>Web Development Bootcamp Instructor</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-12">
                                <div className="testi-item">
                                    <div className="testi-comment">
                                        <p>
                                            <i className='fa fa-quote-left' />
                                            I completed this: NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno) course and learned Nodejs,Expressjs,MongoDb,SQL and much more. And In Next.js course Learned Next.js.
                                            <i className='fa fa-quote-right' />
                                        </p>
                                        <ul className='stars list-unstyled'>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star-half-alt" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="client-info">
                                        <img src="img/max.jpeg" alt="instructor-img" />
                                        <h5>Maximilian Schwarzmüller</h5>
                                        <p>Nodejs and Expressjs and Nextjs and MongoDb Instructor</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-12">
                                <div className="testi-item">
                                    <div className="testi-comment">
                                        <p>
                                            <i className='fa fa-quote-left' />
                                            I am learning SQL from this course: The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert and also took the JavaScript DSA course.
                                            <i className='fa fa-quote-right' />
                                        </p>
                                        <ul className='stars list-unstyled'>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star-half-alt" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="client-info">
                                        <img src="img/colt.jpg" alt="instructor-img" />
                                        <h5>Colt Steele</h5>
                                        <p>SQL and javaScript DSA Instructor</p>
                                    </div>
                                </div>
                            </div>

                        </OwlCarousel>
                    </div>
                </div>




            </section>
            <div className="footer-image">
                <img src="img/shape-bg.png" alt="shape-img" />
            </div>
        </div>
    )
}

export default Testimonial
