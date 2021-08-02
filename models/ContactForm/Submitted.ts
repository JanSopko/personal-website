import {SectionModel} from "../sectionModel";
import {Section} from "../section";

export class SubmittedTexts extends SectionModel {
    constructor(public thankYou: string, public writeAgain: string) {
        super();
    }
}

export const submittedSection: Section<SubmittedTexts> = {
    SK: {
        thankYou: "Ďakujem za Vašu správu!",
        writeAgain: "Napísať znova"
    },
    EN: {
        thankYou: "Thank you for Your message!",
        writeAgain: "Write again"
    },
    DE: {
        thankYou: "Danke für Seine Nachricht",
        writeAgain: "Schreib mal wieder"
    }
}