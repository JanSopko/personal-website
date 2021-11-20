export const SkillIcon = (
    props: {skillName: string, deviconClass: string}
) => {
    return (
        <div className="skill-icon">
            <i className={props.deviconClass}/>
            <div>{props.skillName}</div>
        </div>
    );
}