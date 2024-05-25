import { useState } from 'react';
import { Button } from './ReusableButton';

let nextId = 0;
export const UpdatingArray = () => {
  const [inputValue, setInputValue] = useState('');
  const [artist, setArtist] = useState([]);

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleArtist = () =>
    setArtist([...artist, { id: nextId++, name: inputValue }]);
  return (
    <>
      <div>
        <h1 className="my-4">Inspiring scuptors:</h1>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <Button text={'Add'} onClick={handleArtist} color={'#ccfcffaa'} />
        <ul>
          {artist.map((artis) => (
            <li key={artis.id} className="list list-disc">
              {artis.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
