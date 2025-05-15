import React, { useState } from "react";

function PolicyFetcher() {
  const [id, setId] = useState("");
  const [policy, setPolicy] = useState(null);
  const [error, setError] = useState("");

  const fetchPolicy = async () => {
    setError("");
    setPolicy(null);
    try {
      const response = await fetch(`http://localhost:8080/api/policies/${id}`);
      if (!response.ok) {
        setError("Policy not found");
        return;
      }
      const data = await response.json();
      setPolicy(data);
    } catch (err) {
      setError("Error fetching policy");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <input
        type="number"
        placeholder="Enter Policy ID"
        value={id}
        onChange={e => setId(e.target.value)}
        style={{ marginRight: 8 }}
      />
      <button onClick={fetchPolicy}>Fetch Details</button>
      {error && <div style={{ color: "red", marginTop: 8 }}>{error}</div>}
      {policy && (
        <table border="1" cellPadding="8" style={{ marginTop: 16, width: "100%" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Policy Number</th>
              <th>Policy Holder Name</th>
              <th>Premium Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{policy.id}</td>
              <td>{policy.policyNumber}</td>
              <td>{policy.policyHolderName}</td>
              <td>{policy.premiumAmount}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default PolicyFetcher;