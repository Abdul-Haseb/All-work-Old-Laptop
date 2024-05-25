import { useState } from 'react';
import { Button } from './ReusableButton';

let nextId = 3;
const initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' },
];

const initialList = [
  { id: 0, title: 'Big Bellies' },
  { id: 1, title: 'Lunar Landscape' },
  { id: 2, title: 'Terracotta Army' },
];

export const Inserting = () => {
  const [artists, setArtists] = useState(initialArtists);
  const [name, setName] = useState('');
  const [list, setList] = useState(initialList);

  const hanldeOnchange = (e) => {
    setName(e.target.value);
  };

  const handleInsert = () => {
    const insertAt = 1;
    const nextArtist = [
      ...artists.slice(0, insertAt),
      { id: nextId++, name: name },
      ...artists.slice(insertAt),
    ];
    setArtists(nextArtist);
    setName('');
  };

  const handleListClick = () => {
    const nextList = [...list];
    nextList.reverse();
    setList(nextList);
  };
  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={hanldeOnchange} />
      <Button text={'Insert'} color={'gray'} onClick={handleInsert} />
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
      <ul>
        <Button text={'Reverse'} color={'#800000'} onClick={handleListClick} />
        {list.map((artWork) => (
          <li key={artWork.id}>{artWork.title}</li>
        ))}
      </ul>
    </>
  );
};
