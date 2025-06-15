import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [code, setCode] = useState(`function sum() {
  return 1 + 1;
}`);
  const [review, setReview] = useState('');

  async function reviewCode() {
    try {
      const response = await axios.post('http://localhost:3000/ai/get-review', { code });
      setReview(response.data);
    } catch (error) {
      console.error('Error fetching code review:', error);
      setReview('Failed to fetch review. Is your backend running?');
    }
  }

  return (
    <main>
      <div className="left">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={{
            width: '100%',
            height: '300px',
            fontFamily: 'monospace',
            fontSize: '16px',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            resize: 'vertical'
          }}
        />
        <button onClick={reviewCode} className="review-button">
          Review
        </button>
      </div>
      <div className="right">
        <pre style={{ whiteSpace: 'pre-wrap', backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px' }}>
          {review}
        </pre>
      </div>
    </main>
  );
}

export default App;
