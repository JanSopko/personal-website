import {High, Medium, Low} from './SkillLevels/SkillLevels';

export const SkillsList = () => {
    return(
        <div className="content">
            <div id="skills-list">
                <div className="skill-info">
                    PHP: <High />
                </div>
                <div className="skill-info">
                    JavaScript: <Medium />
                </div>
                <div className="skill-info">
                    NodeJS: <Medium />
                </div>
                <div className="skill-info">
                    CSS: <Low />
                </div>
                <div className="skill-info">
                    GraphQL: <Low />
                </div>
            </div>
        </div>
    );
}