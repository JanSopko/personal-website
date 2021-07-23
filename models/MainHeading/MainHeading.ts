import {SectionModel} from "../sectionModel";
import {Section} from "../section";

export class MainHeading extends SectionModel{
    constructor(public text: string) {
        super();
    }
}

export const mainHeadingSection: Section<MainHeading> = {
    SK: {
        text: 'Ahojte, moje meno je Ján Sopko a vítam Vás na mojej osobnej webstránke.'
    },
    EN: {
        text: 'Hello, my name is Ján Sopko and I welcome you to my personal website'
    },
    DE: {
        text: 'Hallo, mein Name ist Ján Sopko und willkommen auf meiner Website'
    }
}