import {SectionModel} from "../sectionModel";
import {Section} from "../section";

export class ContactForm extends SectionModel {
    constructor(
        public emailLabel: string,
        public placeholder: string,
        public buttonSend: string,
        public contactMeHeading: string,
        public emailNotValid: string
    ) {
        super();
    }
}

export const contactFormSection: Section<ContactForm> = {
    SK: {
        emailLabel: 'Vaša e-mailová adresa',
        placeholder: 'Napíšte mi...',
        buttonSend: 'Odoslať',
        contactMeHeading: 'Kontaktujte ma',
        emailNotValid: 'Prosím, zadajte validnú emailovú adresu'
    },
    EN: {
        emailLabel: 'Your e-mail address',
        placeholder: 'Leave me an e-mail...',
        buttonSend: 'Send',
        contactMeHeading: 'Contact me',
        emailNotValid: 'Please insert a valid email'
    },
    DE: {
        emailLabel: 'Seine e-mail Adresse',
        placeholder: 'Schreibe mir ein e-mail',
        buttonSend: 'Senden',
        contactMeHeading: 'Kontakt mich',
        emailNotValid: 'Bitte schreibe eine valid email Adresse'
    }
}