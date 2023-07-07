"use client"
import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Card } from "./Card";

interface CardData {
  id: string;
  name: string;
  imageUrl: string;
}

interface GridProps {
  cardData: CardData[];
}

export function Grid({ cardData }: GridProps) {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="grid w-3/5 object-center items-center gap-1.5">
        <Label htmlFor="Card Name"></Label>
        <Input
          type="text"
          value={search}
          id="search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search for your card"
        ></Input>
      </div>
      <div className="w-full mt-20 flex gap-2 flex-wrap justify-center">
        {cardData.map((card) => (
          <Card key={card.id} id={card.id} name={card.name} imageUrl={card.imageUrl} />
        ))}
      </div>
    </>
  );
}
