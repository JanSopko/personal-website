import React, {useContext} from "react";
import {LanguageContext} from "../../pages/_app";
import {Button, Fade} from "@material-ui/core";
import {submittedSection} from "../../models/ContactForm/Submitted";

export const Submitted = (props: {unsetSubmitted: () => void}) => {
    const lang = useContext(LanguageContext);

    return(
        <Fade in={true} timeout={500}>
        <div>
            <h2>{submittedSection[lang].thankYou}</h2>
            <Button
                className="custom-button"
                onClick={props.unsetSubmitted}
            >
                {submittedSection[lang].writeAgain}
            </Button>
        </div>
        </Fade>
    );
}