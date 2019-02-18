function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(sUser => goodUsers.some( gUser => sUser.id === gUser.id))
    };
}

module.exports = checkUsersValid;
