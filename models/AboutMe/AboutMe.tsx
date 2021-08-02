import {SectionModel} from "../sectionModel";
import {Section} from "../section";
import getMyAge from "../../utils/functions/getMyAge";

const age = getMyAge();

export type LabelAndText = {
    label: string;
    text: string;
}

type Bio = {
    aboutMe: LabelAndText;
    experience: LabelAndText;
    education: LabelAndText;
    freeTime: LabelAndText;
}

export class AboutMe extends SectionModel {
    constructor(public bio: Bio) {
        super();
    }
}

export const aboutMeSection: Section<AboutMe> = {
    SK: {
        bio: {
            aboutMe: {
                label: 'O mne 🤔',
                text: `Mám ${age} rokov a pochádzam z Trebišova, no momentálne bývam v Žiline, kde som študoval a kde pracujem
            ako backend (a občas aj frontend) developer.`
            },
            experience: {
                label: 'Skúsenosti 👨‍💻',
                text: 'Od roku 2019 pracujem v Ringier Axel Springer Communities (predtým Ringier Axel Springer SK as.) ' +
                    'v Žiline, kde som sa dostal úspešným dokončením Azet PHP Academy na jar 2019. ' +
                    'Náplňou mojej práce je tvorba backendu, REST API, WebSocket API a občasné úpravy na frontende. ' +
                    'Podieľal som sa na vývoji projektov v PHP (Symfony / čisté PHP), Node.js (NestJS, ExpressJS), REST a WebSocket APIs podľa špecifikácií ' +
                    'OpenApi a AsyncApi. Vo frontendových projektoch som získal skúsenosti s Reactom a frameworkom Next.JS.'
            },
            education: {
                label: 'Vzdelanie 👨🏻‍🎓',
                text: ''
            },
            freeTime: {
                label: 'Koníčky 🎸',
                text: ''
            }
        }
    },
    EN: {
        bio: {
            aboutMe: {
                label: 'About Me 🤔',
                text: `I'm ${age} years old and I'm from eastern Slovakian town Trebišov. Currently I live in Žilina, where I graduated
             and where I work as a backend (and occasionally frontend) developer.`
            },
            experience: {
                label: 'Experience 👨‍💻',
                text: `Since 2019 I work at Ringier Axel Springer Communities (previously known) 
                as Ringier Axel Springer SK as. in Žilina, where I got by successfully completing it's 
                Azet PHP Academy. My responsibilities include developing backend, REST API, WebSocket API and 
                occasional frontend changes. I developed and co-developed project using PHP (Symfony / pure PHP), 
                Node.js (NestJS, ExpressJS), REST and WebSocket APIs using OpenApi and AsyncApi specifications. 
                On the frontend, I've worked with React and Next.JS.`
            },
            education: {
                label: 'Education 👨🏻‍🎓',
                text: ''
            },
            freeTime: {
                label: 'Hobbies 🎸',
                text: ''
            }
        }
    },
    DE: {
        bio: {
            aboutMe: {
                label: 'Über mich 🤔',
                text: `Ich bin ${age} Jahre alt und ich bin aus Ostslowakische Stadt Trebišov. `
            },
            experience: {
                label: 'Experience 👨‍💻',
                text: 'Seit 2019 arbeite ich v Ringier Axel Springer Communities (predtým Ringier Axel Springer SK as.) ' +
                    'v Žiline, kde som sa dostal úspešným dokončením Azet PHP Academy na jar 2019. ' +
                    'Náplňou mojej práce je tvorba backendu, REST API, WebSocket API a občasné úpravy na frontende. ' +
                    'Podieľal som sa na vývoji projektov v PHP, Node.js (NestJS, ExpressJS), REST a WebSocket APIs podľa špecifikácií ' +
                    'OpenApi a AsyncApi. Vo frontendových projektoch som získal skúsenosti s Reactom a frameworkom Next.JS.'
            },
            education: {
                label: 'Bildung 👨🏻‍🎓',
                text: ''
            },
            freeTime: {
                label: 'Hobbies 🎸',
                text: ''
            }
        }
    }
}