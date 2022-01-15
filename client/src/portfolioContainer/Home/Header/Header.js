import React, { useState } from 'react'
import { TOTAL_SCREENS, GET_SCREEN_INDEX } from '../../../Utilities/CommonUtils';
import ScrollService from '../../../Utilities/ScrollService';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css'




function Header() {
    const [selectScreen, setSelectScreen] = useState(0);
    const [showHeaderOptions, setShowHeaderOptions] = useState(false);


    const updateScreen = (currentScreen) => {
        if (!currentScreen || !currentScreen.screenInView) return;
        let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
        if (screenIndex < 0) return;
    }


    ScrollService.currentScreenBroadCaster.subscribe(updateScreen);

    const getHeaderOptions = () => {
        return (
            TOTAL_SCREENS.map((screen, i) => {
                return (
                    <div key={screen.screen_name} className={getHeaderOptionsClass(i)} onClick={() => switchScreen(i, screen)}>

                        <span>{screen.screen_name}</span>
                    </div>
                )

            })
        )
    }



    const getHeaderOptionsClass = (index) => {

        let classes = `header-option`;

        (index < TOTAL_SCREENS.length - 1) ? classes = `header-option header-option-seperator` : classes = `${classes}`;





        return (selectScreen === index) ? classes = `header-option header-option-seperator selected-header-option` : classes = `${classes} header-option-seperator`;




    }



    const switchScreen = (i, screen) => {
        let screenComponent = document.getElementById(screen.screen_name);
        if (!screenComponent) return;
        screenComponent.scrollIntoView({ behavior: 'smooth' });
        setSelectScreen(i);
        setShowHeaderOptions(false);

    }

    return (
        <div>
            <div className="header-container" onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
                <div className="header-parent">
                    <div className="header-hamburger" onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
                        <FontAwesomeIcon className='header-hamburger-bars' icon={faBars} />
                    </div>
                    <div className="header-logo">
                        <span>A~DIL</span>
                    </div>
                    <div className={(showHeaderOptions) ? "header-options show-hamburger-options" : "header-options"}>
                        {getHeaderOptions()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
