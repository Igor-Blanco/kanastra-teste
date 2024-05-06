import React, { useState } from 'react';
import axios from 'axios';

function TestAPI() {
  const [name, setName] = useState('');
  const [government_id, setGovernmentId] = useState('');
  const [search_gov_id, setSearchGovernmentId] = useState('');
  const [email, setEmail] = useState('');
  const [debt_amount, setDebtAmount] = useState('');
  const [debt_due_date, setDebtDueDate] = useState('');
  const [total_debt_amount, setTotalDebtAmount] = useState('');

  const handlePost = async (event) => {
    event.preventDefault();
    try {
      const payload = {
        name,
        government_id,
        email,
        debt_amount: parseFloat(debt_amount),
        debt_due_date
      };
      const response = await axios.post('http://localhost:8000/charges', payload);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error posting data:', error.response.data);
    }
  };

  const handleGetTotalDebt = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/charges/${search_gov_id}/total`);
      console.log('Response get:', response);
      if (response.data) {
        setTotalDebtAmount(response.data);
      } else {
        setTotalDebtAmount(response[0]);
      }
    } catch (error) {
      console.error('Error fetching total debt:', error);
      setTotalDebtAmount('Error fetching data');
    }
  };

  return (
    <div>
      <h1>Test API Page</h1>
      <form onSubmit={handlePost}>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input type="text" placeholder="Gov. ID" value={government_id} onChange={e => setGovernmentId(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="number" placeholder="Debt Amount" value={debt_amount} onChange={e => setDebtAmount(e.target.value)} />
        <input type="date" placeholder="Debt Due Date" value={debt_due_date} onChange={e => setDebtDueDate(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <br></br>
      <input type="text" placeholder="Search Gov. ID" value={search_gov_id} onChange={e => setSearchGovernmentId(e.target.value)} />
      <button onClick={handleGetTotalDebt}>Fetch Total Debt</button>
      <div>
        <h2>Fetch result:</h2>
        <p>Gov. ID: {search_gov_id}</p>
        <p>Total Debt Amount: {total_debt_amount}</p>
      </div>
    </div>
  );
}

export default TestAPI;
