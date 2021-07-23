import {LanguagesEnum} from "./languages.enum";
import {Language} from "./language.model";

type LanguagesListType = {
    [key in LanguagesEnum]: Language;
}

const SK: Language = {
    short: 'SK',
    full: 'Slovenčina',
    flagUrl: 'https://image.flaticon.com/icons/png/512/197/197592.png',
    languageWord: 'Jazyk',
};

const EN: Language = {
    short: 'EN',
    full: 'English',
    flagUrl: 'https://image.flaticon.com/icons/png/512/197/197374.png',
    languageWord: 'Language',

};

const DE: Language = {
    short: 'DE',
    full: 'Deutsch',
    flagUrl: 'https://image.flaticon.com/icons/png/512/197/197571.png',
    languageWord: 'Sprache',
};

export const languagesList: LanguagesListType = {
    SK, EN, DE
}

export const languages = Object.values(languagesList);