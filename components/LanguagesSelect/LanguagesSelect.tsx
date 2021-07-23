import React from "react";
import {
    Select,
    InputLabel,
    MenuItem,
    FormHelperText,
    FormControl,
    makeStyles, withStyles
} from "@material-ui/core";
import {languagesList, languages} from "../../language-config/languages.list";
import {LanguagesEnum} from "../../language-config/languages.enum";
import IconButton from '@material-ui/core/IconButton';

export const LanguagesSelect = (props: {
    currentLanguage: LanguagesEnum,
    setLanguage: (...args: any[]) => any | void
}) => {
    const LANGUAGE_LABEL = 'language-label';
    const {currentLanguage} = props;

    return(
            <FormControl>
            <InputLabel
                shrink
                id={LANGUAGE_LABEL}
            >
                {languagesList[currentLanguage].languageWord}
            </InputLabel>
            <Select
                labelId={LANGUAGE_LABEL}
                label="label"
                id="language-select"
                value={languagesList[currentLanguage].short}
                onChange={e => props.setLanguage(e.target.value)}
            >
                {
                    languages.map(lang => (
                        <MenuItem value={lang.short} key={lang.short}>
                            <IconButton>
                                <img src={lang.flagUrl} alt={`${lang.short}-flag`} height={20} width={20}/>
                            </IconButton>
                            {lang.full}
                        </MenuItem>
                    ))
                }
            </Select>
            </FormControl>
    );
}