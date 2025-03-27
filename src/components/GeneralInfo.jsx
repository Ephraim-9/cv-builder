import { useState } from "react";

function GeneralInfo({ name, email, phone }) {
  const [userName, setUserName] = useState(name);
  const [userEmail, setUserEmail] = useState(email);
  const [userPhone, setUserPhone] = useState(phone);
  const [isEditing, setIsEditing] = useState(true); 

  return (
    <div>
      <h2>General Information</h2>

      {isEditing ? (
        <div>
          <label>Name:</label>
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />

          <label>Email:</label>
          <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />

          <label>Phone:</label>
          <input type="tel" value={userPhone} onChange={(e) => setUserPhone(e.target.value)} />
        </div>
      ) : (
        <div>
          <p><strong>Name:</strong> {userName}</p>
          <p><strong>Email:</strong> {userEmail}</p>
          <p><strong>Phone:</strong> {userPhone}</p>
        </div>
      )}

      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </div>
  );
}

export default GeneralInfo;
