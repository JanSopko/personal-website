import {skillsSection} from "../../models/Skills/Skills";
import {LanguagesEnum} from "../../language-config/languages.enum";

export const SkillsUL = (props: {language: LanguagesEnum}) => {
    const {highLevelSkills, lowLevelSkills, databases, otherLanguages} = skillsSection[props.language];
    return(
        <div id="skills-list" className="content">
            <span>
                <h3>{highLevelSkills}</h3>
                <ul>
                    <li>Node.JS (NestJS, ExpressJS, vanilla Node)</li>
                    <li>PHP (Symfony, vanilla PHP)</li>
                    <li>{databases} (MySQL, PostgreSQL, Redis, MongoDB)</li>
                    <li>Testing (Jest, PHP Unit)</li>
                    <li>JavaScript / TypeScript(React, jQuery, vanilla JS)</li>
                    <li>Git</li>
                    <li>API documentation (Swagger, React-AsyncApi)</li>
                    <li>Docker</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
            </span>
            <span>
                <h3>{lowLevelSkills}</h3>
                <ul>
                    <li>Next.js</li>
                    <li>GraphQL</li>
                    <li>Message brokers (Kafka, RabbitMQ)</li>
                    <li>Laravel</li>
                    <li>Vue.js</li>
                    <li>{otherLanguages} (Java, Python...)</li>
                </ul>
            </span>
        </div>
    );
}