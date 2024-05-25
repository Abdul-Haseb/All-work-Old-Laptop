import { useState } from 'react';
import { sculptureList } from './Data/data2';

export const ImageGallery = () => {
  const [index, setIndex] = useState(0);
  const hasNext = index < sculptureList.length - 1;
  const [showMore, setShowMore] = useState(false);

  let sculpture = sculptureList[index];

  const handleNextClick = () => {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const handleMoreClick = () => {
    setShowMore(!showMore);
  };
  return (
    <div
      style={{
        maxWidth: '500px',

        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <button
        style={{
          border: '1px solid red',
          padding: '3px',
        }}
        onClick={handleNextClick}
      >
        Next
      </button>
      <h2>
        <b>{sculpture.name}</b>
        <br />
        by {sculpture.artist}
      </h2>
      ({index + 1} of {sculptureList.length})
      <button
        style={{
          border: '1px solid #cfcfcf',
          padding: '3px',
          width: '50%',
        }}
        onClick={handleMoreClick}
      >
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </div>
  );
};
