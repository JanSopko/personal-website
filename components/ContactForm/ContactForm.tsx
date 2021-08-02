import React, {useContext, useState} from "react";
import {Container, FormControl, InputLabel, TextField, TextareaAutosize, Button, makeStyles} from "@material-ui/core";
import {contactFormSection} from "../../models/ContactForm/ContactForm";
import {LanguageContext} from "../../pages/_app";
import {Submitted} from "./Submitted";
import axios from "axios";

const useStyles = makeStyles({
    customButton: {
        border: "1px solid #848484"
    }
});

export const ContactForm = () => {
    const classes = useStyles();

    const language = useContext(LanguageContext);
    const {emailLabel, placeholder, buttonSend, contactMeHeading, emailNotValid} = contactFormSection[language];
    const [currentEmailLabel, setCurrentEmailLabel] = useState<string>(emailLabel);
    const [emailValid, setEmailValid] = useState<boolean>(true);
    const [email, setEmail] = useState<string>('@');
    const [textMessage, setTextMessage] = useState<string>('');
    const [submitted, setSubmitted] = useState<boolean>(false);
    const formClassName = submitted ? "contact-form-submitted" : "contact-form";

    const sendForm = (email: string, textMessage: string) => {
        // axios.post('/api/sendMail', {email, textMessage});
        if (!isValidEmail()) {
            setCurrentEmailLabel(emailNotValid);
            setEmailValid(false);
        } else {
            setSubmitted(true);
            setEmailValid(true);
            setCurrentEmailLabel(emailLabel);
            setTextMessage('');
            setEmail('@');
        }
    }

    const isValidEmail = (): boolean => {
        return !!email;
    }

    return(
        // <Container>
            <div className="content">
                <FormControl id="contact-form" className={formClassName}>
                {
                    submitted
                        ? <Submitted unsetSubmitted={() => setSubmitted(false)}/>
                        : <>
                            <h3>{contactMeHeading}</h3>
                            <TextField
                                required
                                id="contact-email"
                                label={currentEmailLabel}
                                color={emailValid ? "primary" : "secondary"}
                                type="email"
                                className="contact-input"
                                value={email}
                                onChange={e => {setEmail(e.target.value)}}
                            />
                            <TextareaAutosize
                                aria-label="minimum height"
                                minRows={3}
                                placeholder={placeholder}
                                className="contact-input"
                                value={textMessage}
                                onChange={e => {setTextMessage(e.target.value)}}
                            />
                            <Button
                                color="primary"
                                className="contact-input custom-button"
                                onClick={() => sendForm(email, textMessage)}
                            >
                                {buttonSend}
                            </Button>
                        </>
                }
                </FormControl>
            </div>
        // </Container>
    );
}