import "./MissionCard.css";

function MissionCard({ mission }) {
  return (
    <div className="mission-card">
      <h3 className="mission-name">{mission.name}</h3>
      <p className="mission-status">Status: {mission.status}</p>
      <p className="mission-crew">Crew: {mission.crew}</p>
    </div>
  );
}

export default MissionCard;
