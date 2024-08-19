import "./MissionCard.css";

function MissionCard({ mission }) {
  return (
    <div className="mission-card">
      <h3>{mission.name}</h3>
      <p>Status: {mission.status}</p>
      <p>Crew: {mission.crew}</p>
    </div>
  );
}

export default MissionCard;
