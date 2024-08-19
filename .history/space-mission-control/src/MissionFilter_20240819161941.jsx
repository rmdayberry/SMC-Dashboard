import "MissionFilter.css";

function MissionFilter({ onFilterChange }) {
  return (
    <div className="mission-filter">
      <button onClick={() => onFilterChange("All")}>All</button>
      <button onClick={() => onFilterChange("Launched")}>Launched</button>
      <button onClick={() => onFilterChange("Completed")}>Completed</button>
      <button onClick={() => onFilterChange("Pending")}>Pending</button>
    </div>
  );
}
export default MissionFilter;
