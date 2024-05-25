import { useState } from 'react';

export const Hello = () => {
  const [to, setTo] = useState('Alice');
  const [message, setMessage] = useState('Hello');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 2000);
  };
  return (
    <div
      style={{
        border: '1px solid #414141',
        width: '500px',
        margin: '10px auto',
        padding: '5px',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <label>To:</label>
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
        <textarea value={message} onChange={(e) => e.target.value}></textarea>
        <button
          style={{
            border: '1px solid black',
            padding: '5px',
          }}
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};
