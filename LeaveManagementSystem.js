import React, { useState } from "react";

function LeaveManagementSystem() {
  const [leaveBalance, setLeaveBalance] = useState({
    casual: 12,
    medical: 10,
  });

  const [leaveType, setLeaveType] = useState("casual");
  const [days, setDays] = useState("");
  const [message, setMessage] = useState("");

  const applyLeave = (e) => {
    e.preventDefault();

    const requestedDays = parseInt(days);

    if (!requestedDays || requestedDays <= 0) {
      setMessage("Enter valid number of days");
      return;
    }

    if (requestedDays > leaveBalance[leaveType]) {
      setMessage(`Insufficient ${leaveType} leave balance`);
      return;
    }

    // Deduct leave balance
    setLeaveBalance({
      ...leaveBalance,
      [leaveType]: leaveBalance[leaveType] - requestedDays,
    });

    setMessage(
      `${requestedDays} day(s) ${leaveType} leave applied successfully`
    );

    setDays("");
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Leave Management System</h1>

      <h2>Available Leave Balance</h2>
      <p>Casual Leave: {leaveBalance.casual} days</p>
      <p>Medical Leave: {leaveBalance.medical} days</p>

      <hr />

      <h2>Apply for Leave</h2>

      <form onSubmit={applyLeave}>
        <label>Leave Type: </label>
        <select
          value={leaveType}
          onChange={(e) => setLeaveType(e.target.value)}
        >
          <option value="casual">Casual Leave</option>
          <option value="medical">Medical Leave</option>
        </select>

        <br /><br />

        <label>Number of Days: </label>
        <input
          type="number"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />

        <br /><br />

        <button type="submit">Apply Leave</button>
      </form>

      <br />

      {message && (
        <h3 style={{ color: "green" }}>
          {message}
        </h3>
      )}
    </div>
  );
}

export default LeaveManagementSystem;