/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import { Fragment } from 'react';
import { people } from './data';
import { getImageUrl } from './data';

export const ListOfPeople = () => {
  const showData = people.map((person) => {
    return (
      <li key={person.id}>
        {
          <Fragment>
            <img src={getImageUrl(person.imageId)} alt={person.name} />
            <p>{person.name}</p>
            <p>{person.profession}</p>
            <p>{person.accomplishment}</p>
          </Fragment>
        }
      </li>
    );
  });
  return <ul>{showData}</ul>;
};
