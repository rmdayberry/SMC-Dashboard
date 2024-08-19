function MissionAction({ mission, onStatusChange }) {
  const handleStatusClick = (newStatus) => {
    onStatusChange(mission.id, newStatus);
  };

  return (
    <div className="mission-action">
      <button onClick={() => handleStatusClick("Launched")}>
        Launch Mission
      </button>
      <button onClick={() => handleStatusClick("Completed")}>
        Complete Mission
      </button>
      <button onClick={() => handleStatusClick("Pending")}>
        Mark as Pending
      </button>
    </div>
  );
}

export default MissionAction;
