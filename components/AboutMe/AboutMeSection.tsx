import {LabelAndText} from "../../models/AboutMe/AboutMe";

export const AboutMeSection = (props: {content: LabelAndText}) => {
    return(
        <>
            <h3>
                {props.content.label}
            </h3>
            {props.content.text}
        </>
    );
}