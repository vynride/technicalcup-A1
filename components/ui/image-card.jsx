import { cn } from "@/lib/utils"

export default function ImageCard({
  imageUrl,
  caption,
  className
}) {
  return (
    <figure
      className={cn(
        "w-[280px] overflow-hidden rounded-2xl border-2 border-black bg-white font-sans shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
        className
      )}>
      <img className="w-full aspect-[3/4] object-cover border-b-2 border-black" src={imageUrl} alt={caption} />
      <figcaption className="p-4 font-bold text-black border-black">
        {caption}
      </figcaption>
    </figure>
  );
}
