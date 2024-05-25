import { useState } from 'react';
import { Button } from './ReusableButton';

let initialCounters = [0, 0, 0];

export const ReplacingItems = () => {
  const [counter, setCounter] = useState(initialCounters);

  const hanldeIncrement = (index) => {
    const incremCoun = counter.map((c, i) => {
      if (i === index) {
        return c + 1;
      } else {
        return c;
      }
    });
    setCounter(incremCoun);
  };

  return (
    <>
      <ul>
        {counter.map((count, i) => (
          <li key={i}>
            {count}{' '}
            <Button
              text={'+1'}
              color={'gray'}
              onClick={() => hanldeIncrement(i)}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
