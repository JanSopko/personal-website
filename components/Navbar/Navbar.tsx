import React from "react";
import {LanguagesSelect} from "../LanguagesSelect/LanguagesSelect";
import {LanguagesEnum} from "../../language-config/languages.enum";
import {LinkIcons} from "../LinkIcons/LinkIcons";

export const Navbar = (props: {
    currentLanguage: LanguagesEnum,
    setLanguage: (...args: any[]) => any | void
}) => {
    return(
        <div id="navbar-container">
        <div id="custom-navbar">
            <LanguagesSelect
                currentLanguage={props.currentLanguage}
                setLanguage={props.setLanguage}
            />
            <LinkIcons />
        </div>
        </div>
    );
}