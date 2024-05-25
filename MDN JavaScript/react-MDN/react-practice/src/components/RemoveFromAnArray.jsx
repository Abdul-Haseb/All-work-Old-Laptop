import { useState } from 'react';
import { Button } from './ReusableButton';

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' },
];

export const Removing = () => {
  const [artists, setArtists] = useState(initialArtists);

  const hanldeDeleteArtist = (id) => {
    setArtists(artists.filter((artist) => artist.id !== id));
  };
  return (
    <>
      <h1> Inspiring Sculptores:</h1>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist.name}{' '}
            <Button
              text={'Delete'}
              color={'#414141'}
              onClick={() => hanldeDeleteArtist(artist.id)}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
