import Image from "next/image";
import player from "../public/player.webp"
import table from "../public/table-background.png"
import "./globals.css"

export default function Home() {
  return (
    <main className="home-page">
      <div className="animation-slide" >
        <Image className="player-image" src={player} width={370} height={370}  alt="Player"/>
        <span className="ball"></span>
      </div>
    </main>
  );
}
