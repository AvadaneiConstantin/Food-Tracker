import React, { useState } from "react";
import "../css/ExerciseTracker.css"; // Import the CSS file

function ExerciseTracker() {
  const [exercise, setExercise] = useState({
    type: "",
    duration: "",
    intensity: "",
  });
  const [exerciseLog, setExerciseLog] = useState([
    { type: "Running", duration: 30, intensity: 8 },
    { type: "Weightlifting", duration: 60, intensity: 6 },
    { type: "Swimming", duration: 45, intensity: 7 },
    { type: "Yoga", duration: 60, intensity: 3 },
  ]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setExercise((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editIndex === -1) {
      setExerciseLog((prevState) => [...prevState, exercise]);
    } else {
      setExerciseLog((prevState) =>
        prevState.map((entry, index) =>
          index === editIndex ? exercise : entry
        )
      );
    }
    setExercise({ type: "", duration: "", intensity: "" });
    setEditIndex(-1);
  };

  const handleEdit = (index) => {
    setExercise(exerciseLog[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setExerciseLog((prevState) =>
      prevState.filter((entry, entryIndex) => entryIndex !== index)
    );
  };

  return (
    <div className="exercise-tracker">
      <h2 className="exercise-header">Daily Exercises</h2>
      <div className="exercise-form">
        <h3>Exercise entry form:</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="type">Type of exercise:</label>
            <input
              required
              type="text"
              id="type"
              name="type"
              value={exercise.type}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="duration">Duration (in minutes):</label>
            <input
              required
              type="number"
              id="duration"
              name="duration"
              value={exercise.duration}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="intensity">Intensity (1-10):</label>
            <input
              required
              type="number"
              id="intensity"
              name="intensity"
              min="1"
              max="10"
              value={exercise.intensity}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="form-button">
            {editIndex === -1 ? "Add" : "Update"}
          </button>
        </form>
      </div>
      <h3 className="exerciseLog">Exercise log:</h3>
      <table className="exercise-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Duration (minutes)</th>
            <th>Intensity (1-10)</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {exerciseLog.map((entry, index) => (
            <tr key={index}>
              <td>{entry.type}</td>
              <td>{entry.duration}</td>
              <td>{entry.intensity}</td>
<td>
<button onClick={() => handleEdit(index)}>Edit</button>
</td>
<td>
<button onClick={() => handleDelete(index)}>Delete</button>
</td>
</tr>
))}
</tbody>
</table>
</div>
);
};

export default ExerciseTracker;
