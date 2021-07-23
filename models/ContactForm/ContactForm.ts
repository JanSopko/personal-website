import {SectionModel} from "../sectionModel";
import {Section} from "../section";

export class ContactForm extends SectionModel {
    constructor(public emailLabel: string, public placeholder: string, public buttonSend: string, public contactMeHeading: string) {
        super();
    }
}

export const contactFormSection: Section<ContactForm> = {
    SK: {
        emailLabel: 'Vaša e-mailová adresa',
        placeholder: 'Napíšte mi...',
        buttonSend: 'Odoslať',
        contactMeHeading: 'Kontaktujte ma'
    },
    EN: {
        emailLabel: 'Your e-mail address',
        placeholder: 'Leave me an e-mail...',
        buttonSend: 'Send',
        contactMeHeading: 'Contact me'
    },
    DE: {
        emailLabel: 'Seine e-mail Adresse',
        placeholder: 'Schreibe mir ein e-mail',
        buttonSend: 'Senden',
        contactMeHeading: 'Kontakt mich'
    }
}