import React, {useState} from "react";
import {ContactForm} from "../ContactForm/ContactForm";

export const InfoBox = () => {
    const INFO_OPTION_CLASSNAME = 'info-option';
    const [selected, setSelected] = useState(1);

    return (
        <div id="info-box">
            <div id="info-options">
                <div className={selected !== 1 ? INFO_OPTION_CLASSNAME : INFO_OPTION_CLASSNAME + ' option-active'} onClick={() => setSelected(1)}>O mne</div>
                <div className={selected !== 2 ? INFO_OPTION_CLASSNAME : INFO_OPTION_CLASSNAME + ' option-active'} onClick={() => setSelected(2)}>Bio</div>
                <div className={selected !== 3 ? INFO_OPTION_CLASSNAME : INFO_OPTION_CLASSNAME + ' option-active'} onClick={() => setSelected(3)}>Skills</div>
                <div className={selected !== 4 ? INFO_OPTION_CLASSNAME : INFO_OPTION_CLASSNAME + ' option-active'} onClick={() => setSelected(4)}>kontaktuj ma</div>
            </div>
            <div id="info-content">
                {
                    selected === 1 &&
                        <>
                            <h2>O mne</h2>
                            Lorem Ipsum
                        </>
                }
                {
                    selected === 2 &&
                    <>
                        <h2>Nejake to pozadie</h2>
                        Lorem Ipsum
                    </>
                }
                {
                    selected === 3 &&
                    <>
                        <h2>Daco take ze moje skills</h2>
                        Lorem Ipsum
                    </>
                }
                {
                    selected === 4 &&
                    <>
                        <h2>Kontakt</h2>
                        <ContactForm />
                    </>
                }
            </div>
        </div>
    );
}