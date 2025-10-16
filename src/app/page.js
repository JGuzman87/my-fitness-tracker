import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <p>Home</p>
     <Image src={'/fitness.jpg'} alt="fitness" width={900} height={500} />
    </div>
  );
}
