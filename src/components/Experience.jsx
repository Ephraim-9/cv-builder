import { useState } from "react";

function Experience() {
  const [isEditing, setIsEditing] = useState(true);
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [yearsWorked, setYearsWorked] = useState("");

  return (
    <div>
      <h2>Experience</h2>
      {isEditing ? (
        <div>
          <label>Company:</label>
          <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />

          <label>Position:</label>
          <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} />

          <label>Years Worked:</label>
          <input type="text" value={yearsWorked} onChange={(e) => setYearsWorked(e.target.value)} />
        </div>
      ) : (
        <div>
          <p><strong>Company:</strong> {company}</p>
          <p><strong>Position:</strong> {position}</p>
          <p><strong>Years Worked:</strong> {yearsWorked}</p>
        </div>
      )}

      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </div>
  );
}

export default Experience;
