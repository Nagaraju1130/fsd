import { useState } from "react"
export default function App() {
  const [leave, setLeave] = useState(10)
  const [type, setType] = useState("Casual")
  const [days, setDays] = useState("")
  const [message, setMessage] = useState("")
  const apply = () => {
    const numDays = parseInt(days)
    if (numDays > 0 && numDays <= leave) {
      setLeave(leave - numDays)
      setMessage(`${type} successfully applied`)
      setDays("")
    } else if (numDays > leave) {
      setMessage(`insufficient leaves`)
      setDays("")
    }else{
      alert("Invalid number of leaves")
    }
  }
  return (
    <div>
      <h2>Leave Management System</h2>
      <h3>Remaining Leaves: {leave}</h3>
      <select onChange={(e) => setType(e.target.value)}>
        <option>Casual</option>
        <option>Medical</option>
      </select>
      <br /><br />
      <input
        onChange={(e) => setDays(e.target.value)}
        type="number"
        placeholder="Enter number of leaves"
        value={days}
      />
      <br /><br />
      <button onClick={apply}>Apply Leave</button>
      <p>Selected Leave: {type}</p>
      <h3>{message}</h3>
    </div>
  )
}
