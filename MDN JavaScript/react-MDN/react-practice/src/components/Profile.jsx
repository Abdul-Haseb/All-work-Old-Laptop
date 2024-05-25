/* eslint-disable react/prop-types */
// import { getImageUrl } from './utils';

const getImageUrl = (imageId, size = 's') => {
  return 'https://i.imgur.com/' + imageId + size + '.jpg';
};
export const Profile = ({ name, profession, imageId, awards, discovered }) => {
  return (
    <>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <h2>{name}</h2>
        <img className="avatar" src={getImageUrl(imageId)} alt={name} />
        <ul>
          <li>
            <b>Profession: {profession} </b>
          </li>
          <li>
            <b>Awards: {awards.length} </b>({awards.join(', ')})
          </li>
          <li>
            <b>Discovered: </b>
            {discovered}
          </li>
        </ul>
      </section>
    </>
  );
};
