export const getMessages = () => {
    let messages = JSON.parse(localStorage.getItem('messages'));
    if(messages === null) {
        messages = [];
    }
    return messages;
}
