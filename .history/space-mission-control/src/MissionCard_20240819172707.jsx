import "./MissionCard.css";
import MissionAction from "./MissionAction";

function MissionCard({ mission }) {
  return (
    <div className="mission-card">
      <h3 className="mission-name">{mission.name}</h3>
      <span className="missionInfo">
        <p className="mission-status">Status: {mission.status}</p>
        <p className="mission-crew">Crew: {mission.crew}</p>
      </span>
      <MissionAction mission={mission} onStatusChange={handleStausChange} />
    </div>
  );
}

export default MissionCard;
