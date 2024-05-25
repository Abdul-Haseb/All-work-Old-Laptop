export const RespondingToEvents = () => {
  const handleClick = () => {
    alert('Button Clicked');
  };

  const AlertButton = ({ message, children }) => {
    return <button onClick={() => alert(message)}>{children}</button>;
  };

  const Button = ({ onClick, children }) => {
    return <button onClick={onClick}>{children}</button>;
  };

  const PlayButton = ({ movieName }) => {
    const handlePlayClick = () => alert(`Playing ${movieName}`);
    return <Button onClick={handlePlayClick}>Play {movieName}</Button>;
  };
  return (
    <>
      <button
        className="rounded-md border bg-gray-400 p-4"
        onClick={handleClick}
      >
        Click Me
      </button>
      <AlertButton message={'Playing'}>Play</AlertButton>
      <AlertButton message={'Uploading'}>Upload</AlertButton>
      <PlayButton movieName={'Avengers'} />
    </>
  );
};
