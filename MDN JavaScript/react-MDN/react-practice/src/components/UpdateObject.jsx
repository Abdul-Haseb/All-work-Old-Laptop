import { useState } from 'react';

export const UpdateObject = () => {
  const [person, setPerson] = useState({
    name: 'Nick',
    artwork: {
      title: 'Blue Nana',
      city: 'NewYork',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    },
  });

  const handleNameChange = (e) => {
    setPerson({
      ...person,
      name: e.target.value,
    });
  };

  const handleTitleChange = (e) => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  };

  const handleCityChange = (e) => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value,
      },
    });
  };

  const handleImageChange = (e) => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value,
      },
    });
  };
  return (
    <>
      <label>Name</label>
      <input value={person.name} onChange={handleNameChange} />
      <label>Title:</label>
      <input value={person.artwork.title} onChange={handleTitleChange} />
      <label>City:</label>
      <input value={person.artwork.city} onChange={handleCityChange} />
      <label>
        Image:
        <input value={person.artwork.image} onChange={handleImageChange} />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  );
};
