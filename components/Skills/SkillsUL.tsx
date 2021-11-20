import {skillsSection} from "../../models/Skills/Skills";
import {LanguagesEnum} from "../../language-config/languages.enum";
import {SkillIcon} from "./SkillIcon";

export const SkillsUL = (props: {language: LanguagesEnum}) => {
    const {highLevelSkills, lowLevelSkills, databases, otherLanguages} = skillsSection[props.language];
    return(
        <div id="skills-list" className="content">
            <span>
                <h3>{highLevelSkills}</h3>
                <div className="skills-group">
                    <div>
                        <SkillIcon skillName="nodeJS" deviconClass="devicon-nodejs-plain colored"/>
                        <SkillIcon skillName="expressJS" deviconClass="devicon-express-original colored"/>
                        <SkillIcon skillName="nestJS" deviconClass="devicon-nestjs-plain colored"/>
                        <SkillIcon skillName="typescript" deviconClass="devicon-typescript-plain colored"/>
                        <SkillIcon skillName="Jest" deviconClass="devicon-jest-plain colored"/>
                    </div>
                    <div>
                        <SkillIcon skillName="PHP" deviconClass="devicon-php-plain colored"/>
                        <SkillIcon skillName="symfony" deviconClass="devicon-symfony-original colored"/>
                        <SkillIcon skillName="MySQL" deviconClass="devicon-mysql-plain colored"/>
                        <SkillIcon skillName="redis" deviconClass="devicon-redis-plain colored"/>
                    </div>
                    <div>
                        <SkillIcon skillName="socket.io" deviconClass="devicon-socketio-original colored"/>
                        <SkillIcon skillName="kafka" deviconClass="devicon-apachekafka-original colored"/>
                        <SkillIcon skillName="docker" deviconClass="devicon-docker-plain colored"/>
                        <SkillIcon skillName="git" deviconClass="devicon-git-plain colored"/>
                        <SkillIcon skillName="jQuery" deviconClass="devicon-jquery-plain colored"/>
                    </div>
                    <div>
                        <SkillIcon skillName="HTML5" deviconClass="devicon-html5-plain colored"/>
                        <SkillIcon skillName="CSS3" deviconClass="devicon-css3-plain colored"/>
                        <SkillIcon skillName="JavaScript" deviconClass="devicon-javascript-plain colored"/>
                    </div>
                </div>
            </span>
            <span>
                <h3>{lowLevelSkills}</h3>
                <div className="skills-group">
                    <div>
                        <SkillIcon skillName="React" deviconClass="devicon-react-original colored"/>
                        <SkillIcon skillName="NEXT.JS" deviconClass="devicon-nextjs-original colored"/>
                        <SkillIcon skillName="GraphQL" deviconClass="devicon-graphql-plain colored"/>
                        <SkillIcon skillName="PostgreSQL" deviconClass="devicon-postgresql-plain colored"/>
                        <SkillIcon skillName="MongoDB" deviconClass="devicon-mongodb-plain colored"/>
                    </div>
                    {/*<div>*/}
                    {/*    <SkillIcon skillName="MongoDB" deviconClass="devicon-mongodb-plain colored"/>*/}
                    {/*    <SkillIcon skillName="PHP" deviconClass="devicon-php-plain colored"/>*/}
                    {/*    <SkillIcon skillName="symfony" deviconClass="devicon-symfony-original colored"/>*/}
                    {/*</div>*/}
                </div>
            </span>
        </div>
    );
}