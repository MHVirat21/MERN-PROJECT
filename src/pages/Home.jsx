import HeroSection from "../components/HeroSection";
import DestinationCard from "../components/DestinationCard";
import bali from "../assets/destinations/bali.jpg";
import paris from "../assets/destinations/paris.jpg";
import tokyo from "../assets/destinations/tokyo.jpg";

export default function Home() {
  const destinations = [
    { image: bali, name: "Bali", desc: "Beautiful beaches and temples." },
    { image: paris, name: "Paris", desc: "The city of lights and love." },
    { image: tokyo, name: "Tokyo", desc: "Modern vibes meet ancient culture." },
  ];

  return (
    <div>
      <HeroSection />
      <h2 style={{ textAlign: "center", margin: "2rem 0" }}>Popular Destinations</h2>
      <div className="destinations-grid">
        {destinations.map((d, i) => (
          <DestinationCard key={i} {...d} />
        ))}
      </div>
    </div>
  );
}
