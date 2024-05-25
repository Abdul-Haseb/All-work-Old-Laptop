import { useState } from 'react';

export const SendMessage = () => {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('Hi');
  const [number, setNumber] = useState(0);

  if (isSent) {
    return <h1>Your message is on the way!</h1>;
  }
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsSent(true);
          setMessage(message);
        }}
        className="flex max-w-96 flex-col gap-4 bg-black text-white"
      >
        <textarea
          className="mt-5  bg-red-400"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="w-1/2 rounded-lg bg-red-400 p-2 text-center"
        >
          Send
        </button>
      </form>
      <span>{number} </span>{' '}
      <button
        onClick={() => {
          setNumber(number + 5);
          setNumber((n) => n + 1);
        }}
        className="border-2 p-3"
      >
        Increase The Number
      </button>
    </>
  );
};
