
import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post('/api/chatbot', { query });
      setResponse(result.data);
      setError(''); 
    } catch (err) {
      setError('Error occurred while fetching response');
      console.error(err); 
    }
  };

  return (
    <div className="container">
      <h1 class="breathing-text">Welcome to ChatAI</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask something..."
        />
        <button type="submit">Send</button>
      </form>

      {error && <p className="error">{error}</p>}
      {response && (
        <div className="response">
          <p><strong>Summary:</strong> {response.summary}</p>
          <p><strong>Result:</strong> {response.result_text}</p>
          {response.result_table_path && <a href={response.result_table_path}>View Table</a>}
          {response.result_visualization_path && <a href={response.result_visualization_path}>View Visualization</a>}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
