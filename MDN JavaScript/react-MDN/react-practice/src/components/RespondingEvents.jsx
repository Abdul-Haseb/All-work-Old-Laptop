/* eslint-disable react/prop-types */
const Button = ({ onClick, children }) => {
  return <buttono onClick={onClick}>{children}</buttono>;
};
const ToolBar = ({ onPlayMovie, onUploadImage }) => {
  return (
    <div>
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </div>
  );
};

const RespondingEvents = () => {
  return (
    <div>
      <ToolBar
        onPlayMovie={() => alert('Movie is playing')}
        onUploadImage={() => alert('Upload YOur Image')}
      />
    </div>
  );
};

export default RespondingEvents;
