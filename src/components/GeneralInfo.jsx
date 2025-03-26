import { useState } from "react";

function GeneralInfo({ name, email, phone }) {
  const [userName, setUserName] = useState(name);
  const [userEmail, setUserEmail] = useState(email);
  const [userPhone, setUserPhone] = useState(phone);

  return (
    <div>
      <h2>General Information</h2>

      <label>Name:</label>
      <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />

      <label>Email:</label>
      <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />

      <label>Phone:</label>
      <input type="tel" value={userPhone} onChange={(e) => setUserPhone(e.target.value)} />

      <h3>Preview</h3>
      <p><strong>Name:</strong> {userName}</p>
      <p><strong>Email:</strong> {userEmail}</p>
      <p><strong>Phone:</strong> {userPhone}</p>
    </div>
  );
}

export default GeneralInfo;
