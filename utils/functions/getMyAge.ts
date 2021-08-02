const getMyAge = (): number => {
    const BD_YEAR = 1995;
    const BD_MONTH = 7;
    const BD_DAY = 19;
    const BIRTHDAY = new Date(BD_YEAR, BD_MONTH, BD_DAY);
    const TODAY = new Date();
    const CURRENT_MONTH = TODAY.getMonth() + 1;
    let age = TODAY.getFullYear() - BIRTHDAY.getFullYear();
    if (CURRENT_MONTH < BD_MONTH || (CURRENT_MONTH === BD_MONTH && TODAY.getDate() < BD_DAY)) {
        age = age - 1;
    }

    return age;
}

export default getMyAge;