/* eslint-disable react/prop-types */
export const PackingList = ({ name, isPacked }) => {
  return (
    <section>
      {/* <li>{isPacked ? <del>{name + '✔'}</del> : name}</li>
       */}
      <li>
        {name} {isPacked && '✔'}
      </li>
    </section>
  );
};
