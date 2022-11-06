export const setMessages = (messages) => {
  localStorage.setItem('messages', JSON.stringify(messages));  
}

