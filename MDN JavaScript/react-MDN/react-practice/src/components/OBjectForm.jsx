import { useState } from 'react';

export const ObjectForm = () => {
  const [person, setPerson] = useState({
    firstName: 'Xyzee',
    lastName: 'Haseeb',
    email: 'Haseeb@aartec.com',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    },
  });

  const handleInputChange = (property, e) =>
    setPerson({
      ...person,
      [property]: e.target.value,
    });

  const handleNestedInputChange = (nestProp, e) =>
    setPerson((prevPerson) => ({
      ...prevPerson,
      artwork: {
        ...prevPerson.artwork,
        [nestProp]: e.target.value,
      },
    }));

  const handleFirstNameChange = (e) => handleInputChange('firstName', e);
  const handleLastNameChange = (e) => handleInputChange('lastName', e);
  const handleEmailChange = (e) => handleInputChange('email', e);
  const handleTitleChange = (e) => handleNestedInputChange('title', e);
  const handleCityChange = (e) => handleNestedInputChange('city', e);

  return (
    <div className="justify-centet flex flex-col items-center gap-5 text-black">
      <label>
        First name:
        <input value={person.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <label>
        Email:
        <input value={person.email} onChange={handleEmailChange} />
      </label>
      <label>
        Title:
        <input value={person.artwork.title} onChange={handleTitleChange} />
      </label>
      <label>
        City:
        <input value={person.artwork.city} onChange={handleCityChange} />
      </label>
      <label>
        ImageUrl:
        <input />
      </label>
      <p className="text-white">
        {person.firstName} {person.lastName} {person.email}{' '}
        {person.artwork.title} {person.artwork.city}
      </p>
    </div>
  );
};
