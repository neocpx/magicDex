import Link from "next/link";
import Image from "next/image";

interface MagicCard {
  id: string;
  name: string;
  imageUrl: string;
}

export function Card({ id, name, imageUrl }: MagicCard){
    return (
<Link
  href={name}
  className="group rounded-sm border border-transparent m-3 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  key={name}
>
  <div>
    <Image
      src={imageUrl}
      alt={name}
      width={200}
      height={300}
    />
    <h1 className="text-center font-extrabold p-2">{name}</h1>
  </div>
</Link>

    )

}