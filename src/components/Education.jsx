import { useState } from "react";

function Education() {
  const [isEditing, setIsEditing] = useState(true);
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [year, setYear] = useState("");

  return (
    <div>
      <h2>Education</h2>
      {isEditing ? (
        <div>
          <label>School:</label>
          <input type="text" value={school} onChange={(e) => setSchool(e.target.value)} />

          <label>Degree:</label>
          <input type="text" value={degree} onChange={(e) => setDegree(e.target.value)} />

          <label>Year:</label>
          <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
        </div>
      ) : (
        <div>
          <p><strong>School:</strong> {school}</p>
          <p><strong>Degree:</strong> {degree}</p>
          <p><strong>Year:</strong> {year}</p>
        </div>
      )}

      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </div>
  );
}

export default Education;
