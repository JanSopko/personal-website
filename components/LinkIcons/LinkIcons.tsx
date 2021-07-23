import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import {LinkIcon} from "./LinkIcon";

export const LinkIcons = () => {
    return(
        <div id="icons-container">
            <LinkIcon href="https://www.facebook.com/jsopk0/" iconElement={FacebookIcon} />
            <LinkIcon href="https://www.linkedin.com/in/j%C3%A1n-sopko-a09b891a9/" iconElement={LinkedInIcon} />
            <LinkIcon href="https://github.com/JanSopko" iconElement={GitHubIcon} />
        </div>
    );
}