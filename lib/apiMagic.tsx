interface Card {
  id: string;
  name: string;
  imageUrl: string;
  // Include other properties you want to extract from the API response
}

const getRandomCards = async (): Promise<Card[]> => {
  const cards: Card[] = [];

  while (cards.length < 20) {
    const timestamp = Date.now(); // Get the current timestamp
    const url = `https://api.scryfall.com/cards/random?format=standard&t=${timestamp}`;
    const response = await fetch(url);
    const cardData = await response.json();
    const imageUrl = cardData.image_uris?.normal || '';

    if (imageUrl) {
      const card: Card = {
        id: cardData.id,
        name: cardData.name,
        imageUrl,
        // Include other properties you want to extract from the API response
      };

      cards.push(card);
    }
  }

  return cards;
};

export default getRandomCards;
