import React, {useContext, useState} from "react";
import {Container, FormControl, InputLabel, TextField, TextareaAutosize, Button} from "@material-ui/core";
import {contactFormSection} from "../../models/ContactForm/ContactForm";
import {LanguageContext} from "../../pages/_app";

const sendForm = (email: string, textMessage: string) => {
    alert(`email: ${email}, text: ${textMessage}`);
}

export const ContactForm = () => {
    const language = useContext(LanguageContext);
    const {emailLabel, placeholder, buttonSend, contactMeHeading} = contactFormSection[language];
    const [email, setEmail] = useState('@');
    const [textMessage, setTextMessage] = useState('');

    return(
        // <Container>
            <div className="content">

            <FormControl id="contact-form">
                <h3>{contactMeHeading}</h3>
                <TextField
                    required id="contact-email"
                    label={emailLabel}
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
                <Button color="primary" className="contact-input" onClick={() => sendForm(email, textMessage)}>
                    {buttonSend}
                </Button>
            </FormControl>
            </div>
        // </Container>
    );
}