import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = () => {
    setLoading(true);
    const postData = {
      "username": 'user_1',
      "password": 'password123'
    };

    axios.post('http://127.0.0.1:3000/users/login', postData)
      .then((response) => {
        setData(response.data);
        setLoading(false);
        console.log(response.data.success); // Access response data directly
      })
      .catch((error) => {
        setError(error.response);
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>API Data</h1>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      <button onClick={handleClick}>Fetch Data</button>
      <ul>
        <li>Success: {data.success && data.success.toString()}</li>
        {/* Render other data here */}
      </ul>
    </div>
  );
}

export default App;
