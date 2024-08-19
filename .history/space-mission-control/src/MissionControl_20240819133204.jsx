import MissionCard from "./MissionCard";
import MissionAction from "./MissionAction";
import MissionFilter from "./MissionFilter";

function MissionControl({ missions }) {
  const [filteredStatus, setFilteredStatus] = useState("All");
  const [missionList, setMissionList] = useState(missions);

  //Update the mission status
  const handleStausChange = (id, newStatus) => {
    setMissionList(
      missionList.map((mission) =>
        mission.id === id ? { ...mission, status: newStatus } : mission
      )
    );
  };
  //Update the filter status
  const handleFilterChange = (status) => {
    setFilteredStatus(status);
  };
  //Filter the mission based on the selected status
  const filteredMissions =
    filteredStatus === "All"
      ? missionList
      : missionList.filter((mission) => mission.status === filteredStatus);

  return (
    <div className="mission-control">
      <MissionFilter onFilterChange={handleFilterChange} />
      {filteredMissions.map((mission) => (
        <div key={mission.id} className="mission-item">
          <MissionCard mission={mission} />
          <MissionAction mission={mission} onStatusChange={handleStausChange} />
        </div>
      ))}
    </div>
  );
}

export default MissionControl;
