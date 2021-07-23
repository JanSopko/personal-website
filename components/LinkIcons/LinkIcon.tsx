import React from "react";
import {OverridableComponent} from "@material-ui/core/OverridableComponent";

export const LinkIcon = (props: {href: string, iconElement: OverridableComponent<any>}) => {
    return(
        <a href={props.href} target="_blank" rel="noreferrer">
            {React.createElement(props.iconElement, {className:'link-icon'})}
        </a>
    );
}