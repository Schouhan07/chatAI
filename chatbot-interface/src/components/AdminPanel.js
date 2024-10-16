
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [responses, setResponses] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchResponses = async () => {
      try {
        const result = await axios.get('/api/chatbot/responses'); // Using relative path due to proxy
        setResponses(result.data);
      } catch (err) {
        setError('Error fetching responses');
        console.error(err);
      }
    };

    fetchResponses();
  }, []);

  return (
    <div className="container">
      <h1>Admin Panel</h1>
      {error && <p className="error">{error}</p>}
      <ul>
        {responses.map((response, index) => (
          <li key={index}>
            <strong>Query:</strong> {response.query} <br />
            <strong>Summary:</strong> {response.summary} <br />
            <strong>Result:</strong> {response.result_text} <br />
            <strong>Table:</strong> {response.result_table_path && <a href={response.result_table_path}>View Table</a>} <br />
            <strong>Visualization:</strong> {response.result_visualization_path && <a href={response.result_visualization_path}>View Visualization</a>} <br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
