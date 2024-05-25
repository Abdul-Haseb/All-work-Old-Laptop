const Cup = ({ guest }) => {
  return <h2>Tea cup for guest#{guest}</h2>;
};

export const TeaGathering = () => {
  let cup = [];
  for (let i = 1; i < 12; i++) {
    cup.push(<Cup key={i} guest={i} />);
  }
  return cup;
};
