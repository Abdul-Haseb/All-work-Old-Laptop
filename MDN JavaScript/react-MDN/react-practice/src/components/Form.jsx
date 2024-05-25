import { useState } from 'react';

export const Form = () => {
  const [person, setPerson] = useState({
    Name: 'Xyze',
    artwork: {
      title: 'ABDCDDF',
      city: 'Now York',
      Image:
        'https://images.unsplash.com/photo-1705171600800-e12460074415?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
    },
  });
  return (
    <>
      <form className="mx-auto mt-5 flex max-w-sm flex-col gap-5">
        <label>Name:</label>
        <input type="text" value={person.Name} />
        <label>Title:</label>
        <input type="text" value={person.artwork.title} />
        <label>City:</label>
        <input type="text" value={person.artwork.city} />
        <label>Image:</label>
        <input type="text" value={person.artwork.Image} />
      </form>
    </>
  );
};
