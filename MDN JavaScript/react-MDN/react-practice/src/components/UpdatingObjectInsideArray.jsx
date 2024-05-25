/* eslint-disable react/prop-types */
import { useState } from 'react';

let nextId = 3;
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export const UpdatingObjArr = () => {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  const hanldeToggleMyList = (artworkId, nextSeen) => {
    setMyList(
      myList.map((artwork) => {
        if (artwork.id === artworkId) {
          return { ...artwork, seen: nextSeen };
        } else {
          return artwork;
        }
      }),
    );
  };

  const handleToggleYourList = (artworkId, nextSeen) => {
    setYourList(
      yourList.map((artwork) => {
        if (artwork.id === artworkId) {
          return { ...artwork, seen: nextSeen };
        } else {
          return artwork;
        }
      }),
    );
  };
  return (
    <>
      <ul>
        <h1>Art Bucket List</h1>
        <h2>My list of art to see:</h2>
        <ItemList artWorks={myList} onToggle={hanldeToggleMyList} />
        <h2>YOur list of art to see:</h2>
        <ItemList artWorks={yourList} onToggle={handleToggleYourList} />
      </ul>
    </>
  );
};

const ItemList = ({ artWorks, onToggle }) => {
  return (
    <ul>
      {artWorks?.map((singleWork) => (
        <li key={singleWork.id}>
          <input
            type="checkbox"
            onChange={(e) => onToggle(singleWork.id, e.target.value)}
          />
          {singleWork.title}
        </li>
      ))}
    </ul>
  );
};
