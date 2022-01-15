import React, { useState } from 'react';
import Typical from 'react-typical';
import imgBack from '../../images/mailz.jpeg';
import load1 from '../../images/load2.gif';
import ScreenHeading from '../../Utilities/SubHeading/ScreenHeading';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../../Utilities/Animations';
import axios from 'axios';
import { toast } from 'react-toastify';

import './ContactMe.css';


window.addEventListener('scroll', () => {
    const mybutton = document.querySelector('.scroll-container');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
})




function ContactMe(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [banner, setBanner] = useState('');
    const [bool, setBool] = useState(false);


    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animation.fadeInScreen(props.id)
    }

    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }


    const handleMessage = (e) => {
        setMessage(e.target.value)
    }


    const submitForm = async (e) => {
        e.preventDefault();
        try {

            let data = {
                name,
                email,
                message
            }
            setBool(true)
            const res = await axios.post('/contact', data);
            if (name.length === 0 || email.length === 0 || message.length === 0) {
                setBanner(res.data.msg);
                toast.error(res.data.msg);
                setBool(false)
            } else if (res.status === 200) {
                setBanner(res.data.msg);
                toast.success(res.data.msg);
                setBool(false);
                setName('');
                setEmail('');
                setMessage('');
            }

        } catch (error) {
            console.log(error);
        }


    }



    return (
        <div className='main-container' id={props.id || ''}>
            <ScreenHeading
                title={'Contact Me'}
                subHeading={`Let's get in touch!`}

            />

            <div className="central-form">
                <div className="col">
                    <h2 className='title'>
                        {" "}
                        <Typical
                            loop={Infinity}
                            steps={['Get In Touch 🔌', 1000,]}
                        />
                    </h2>

                    <a href="https://www.facebook.com/aliimran.adilcute/" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-facebook-square"></i>
                    </a>
                    <a href="https://twitter.com/000ADIL" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/ali-imran-adil-65a21842/" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-linkedin-square"></i>
                    </a>
                    <a href="https://github.com/IMRANDIL" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github-square"></i>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=918651688561" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-whatsapp"></i>
                    </a>
                </div>
                <div className="back-form">
                    <div className="img-back">
                        <h4>Send Your Message Here!</h4>
                        <img src={imgBack} alt="img" />
                    </div>
                    <form action='/contact' method='POST' onSubmit={submitForm}>
                        <p>{banner}</p>
                        <label htmlFor="name">Name</label>
                        <input type="text" onChange={handleName} value={name} />
                        <label htmlFor="email">Email</label>
                        <input type="email" onChange={handleEmail} value={email} />
                        <label htmlFor="message">Message</label>
                        <textarea type='text' onChange={handleMessage} value={message} />
                        <div className="send-btn">
                            <button type='submit'>
                                send<i className='fa fa-paper-plane' />
                                {bool ? <b className='load'>
                                    <img src={load1} alt="img not responding" />  </b> : ('')
                                }
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="scroll-container">
                <button
                    className="btn-scroll"
                    onClick={() => ScrollService.scrollHandler.scrollToHoMe()}
                >
                    {" "}
                    <i className="fa fa-arrow-up"></i>
                </button>
            </div>
        </div>

    )
}

export default ContactMe
