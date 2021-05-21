// Пиши код ниже этой строки
const getTotalFriendCount = users => users.reduce((allTags, user) => {
    return allTags = allTags + user.friends.length
  }, 0);
  
  // Пиши код выше этой строки