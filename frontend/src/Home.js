import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get('http://localhost:8000/hello');
        setMessage(response.data);
      } catch (error) {
        console.error('Failed to fetch welcome message:', error);
      }
    };

    fetchMessage();
  }, []);

  return <h1>{message || "Loading..."}</h1>;
}

export default Home;
