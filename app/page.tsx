"use client"
import { Grid } from '@/components/Grid';
import getRandomCards from '@/lib/apiMagic';
import { useState, useEffect } from 'react';

interface Card {
  id: string;
  name: string;
  imageUrl: string;
}


export default function Home() {
  const [data, setData] = useState<Card[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRandomCards = async () => {
      try {
        const randomCards = await getRandomCards();
        setData(randomCards);
        setIsLoading(false);
        // Perform any additional operations with the retrieved cards
      } catch (error) {
        console.error('Error fetching random cards:', error);
      }
    };

    fetchRandomCards();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="w-full flex flex-col items-center mt-20">
        {isLoading ? (
          <div className="loading-animation">Loading...</div>
        ) : (
          <Grid cardData={data} />
        )}
      </div>
    </main>
  );
}
