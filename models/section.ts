import {SectionModel} from "./sectionModel";
import {LanguagesEnum} from "../language-config/languages.enum";

export type Section<ModelType extends SectionModel> = {
    [key in LanguagesEnum]: ModelType;
}