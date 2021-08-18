import React, {useContext, useEffect, useState} from "react";
import { FormControl, TextField, TextareaAutosize, Button } from "@material-ui/core";
import {contactFormSection} from "../../models/ContactForm/ContactForm";
import {LanguageContext} from "../../pages/_app";
import {Submitted} from "./Submitted";
import {sendMail} from "../../pages/api/calls/sendMail";
import {isValidEmail} from "../../utils/functions/isValidEmail";


export const ContactForm = () => {;

    const language = useContext(LanguageContext);
    const {emailLabel, placeholder, buttonSend, contactMeHeading, emailNotValid} = contactFormSection[language];
    const [currentEmailLabel, setCurrentEmailLabel] = useState<string>(emailLabel);
    const [emailValid, setEmailValid] = useState<boolean>(true);
    const [email, setEmail] = useState<string>('@');
    const [textMessage, setTextMessage] = useState<string>('');
    const [submitted, setSubmitted] = useState<boolean>(false);
    const formClassName = submitted ? "contact-form-submitted" : "contact-form";

    useEffect(() => {
        if (!emailValid) {
            setCurrentEmailLabel(contactFormSection[language].emailNotValid);
        }
    }, [language]);

    const sendForm = (email: string, textMessage: string) => {
        if (!isValidEmail(email)) {
            setCurrentEmailLabel(emailNotValid);
            setEmailValid(false);
        } else {
            sendMail(email, textMessage);
            setSubmitted(true);
            setEmailValid(true);
            setCurrentEmailLabel(emailLabel);
            setTextMessage('');
            setEmail('@');
        }
    }

    return(
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
    );
}