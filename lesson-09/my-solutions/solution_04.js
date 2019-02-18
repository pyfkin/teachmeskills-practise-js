function getShortMessages(messages) {
    return messages.map( item =>
         item.message.length < 50 ? item.message : null
    ).filter(i => i !== null)
}

module.exports = getShortMessages;
