import React, {useContext} from 'react';
import {mainHeadingSection} from "../../models/MainHeading/MainHeading";
import {LanguageContext} from "../../pages/_app";
import Image from "next/image";
import myPicture from '../../public/img/sopi.jpg';


export const AboutMe = () => {
    const language = useContext(LanguageContext);

    return(
        // <div className="about-section">
            <div className="content">
                <h1>
                    {mainHeadingSection[language].text}
                </h1>
                <section className="about-me-content">
                {/*<Image src={myPicture} alt="Photo of the author" height={200} width={150} id="photo"/>*/}
                    <figure id="photo">
                        {/*<img src="https://gitlab.i.etech.sk/uploads/-/system/user/avatar/230/avatar.png?width=90" alt="Photo of the author"/>*/}
                        <Image
                            src={myPicture}
                            width={108}
                            height={192}
                            alt="Photo of the author"
                        />
                    </figure>
                    {/*<div id="photo" />*/}
                    blablabla text o mne blablabla text o mne blablabla text o mne blablabla text o mne blablabla text o mne
                    blablabla text o mne blablabla text o mne blablabla text o mne blablabla text o mne blablabla text o mne
                    blablabla text o mne blablabla text o mne blablabla text o mne blablabla text o mne blablabla text o mne
                    blablabla text o mne blablabla text o mne blablabla text o mne blablabla text o mne blablabla text o mne
                    blablabla text o mne blablabla text o mne blablabla text o mne blablabla text o mne blablabla text o mne
                    {/*blablabla text o mne blablabla text o mne blablabla text o mne blablabla text o mne blablabla text o mne*/}
                    {/*blablabla text o mne blablabla text o mne blablabla text o mne blablabla text o mne blablabla text o mne*/}
                    {/*blablabla text o mne blablabla text o mne blablabla text o mne blablabla text o mne blablabla text o mne*/}
                    {/*blablabla text o mne blablabla text o mne blablabla text o mne blablabla text o mne blablabla text o mne*/}
                    {/*blablabla text o mne blablabla text o mne blablabla text o mne blablabla text o mne blablabla text o mne*/}
                    {/*blablabla text o mne blablabla text o mne blablabla text o mne blablabla text o mne blablabla text o mne*/}
                    {/*blablabla text o mne blablabla text o mne blablabla text o mne blablabla text o mne blablabla text o mne*/}
                    {/*blablabla text o mne blablabla text o mne blablabla text o mne blablabla text o mne blablabla text o mne*/}
                    {/*blablabla text o mne blablabla text o mne blablabla text o mne blablabla text o mne blablabla text o mne*/}
                    {/*blablabla text o mne blablabla text o mne blablabla text o mne blablabla text o mne blablabla text o mne*/}
                    {/*blablabla text o mne blablabla text o mne blablabla text o mne blablabla text o mne blablabla text o mne*/}
                </section>
            </div>
        // </div>
    );
}