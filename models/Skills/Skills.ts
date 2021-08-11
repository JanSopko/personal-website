import {SectionModel} from "../sectionModel";
import {Section} from "../section";

export class Skills extends SectionModel {
    constructor(
        public highLevelSkills: string,
        public lowLevelSkills: string,
        public databases: string,
        public otherLanguages: string
    ) {
        super();
    }
}

export const skillsSection: Section<Skills> = {
    SK: {
        highLevelSkills: 'Technológie, s ktorými pracujem',
        lowLevelSkills: 'Technológie, s ktorými mám čiastočnú skúsenosť',
        databases: 'Databázy',
        otherLanguages: 'Iné programovacie jazyky'
    },
    EN: {
        highLevelSkills: 'Technologies I regularly use at work',
        lowLevelSkills: 'Technologies I have partial experience with',
        databases: 'Databases',
        otherLanguages: 'Other programming languages'
    },
    DE: {
        highLevelSkills: '',
        lowLevelSkills: '',
        databases: '',
        otherLanguages: ''
    }
};