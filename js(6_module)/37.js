const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
  ];
  // Пиши код ниже этой строки
  
  const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));
  
  const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));
  
  const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
  
  const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);