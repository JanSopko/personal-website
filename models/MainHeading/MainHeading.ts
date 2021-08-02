import {SectionModel} from "../sectionModel";
import {Section} from "../section";

export class MainHeading extends SectionModel{
    constructor(public text: string) {
        super();
    }
}

export const mainHeadingSection: Section<MainHeading> = {
    SK: {
        text: 'Vitajte, volám sa Ján Sopko'
    },
    EN: {
        text: 'Welcome, my name is Ján Sopko'
    },
    DE: {
        text: 'Willkommen, Ich heiße Ján Sopko'
    }
}