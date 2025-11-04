import "./DestinationCard.css";

export default function DestinationCard({ image, name, desc }) {
  return (
    <div className="destination-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{desc}</p>
    </div>
  );
}
