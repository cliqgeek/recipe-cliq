module.exports = (Franz) => {
  const getMessages = () => {
    if(ConversationsList){
      Franz.setBadge(ConversationsList.getUnreadBadgeCount());
    }
  }
  Franz.loop(getMessages);
}
