// Пиши код ниже этой строки
const getSortedFriends = users => [...users]

.flatMap((user) => user.friends)
.filter((friend, index, array) => array.indexOf(friend) === index)
.sort((a, b) => a.localeCompare(b));

// Пиши код выше этой строки