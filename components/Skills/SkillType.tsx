export const SkillType = (props: {skilltype: string}) => {
    const {skilltype} = props;
    return(
        <span className={`skill-type-${skilltype}`}>{skilltype}</span>
    );
}