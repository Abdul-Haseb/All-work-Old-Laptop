import { Children } from 'react';

export const Buttons = () => {
  return (
    <>
      <Toolbar
        onPlayMovie={() => alert('Movie is Playing')}
        onUploadImage={() => alert('Uploading')}
      />
    </>
  );
};

function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </div>
  );
}
function Button({ onClick, children }) {
  return (
    <button
      style={{
        border: '1px solid black',
        padding: '3px',
        backgroundColor: '#cfcfcf',
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
