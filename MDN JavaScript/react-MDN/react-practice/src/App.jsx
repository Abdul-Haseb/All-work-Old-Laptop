/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import './App.css';
import Clock from './components/Clock';
import { PackingList } from './components/PakingList';
import { Profile } from './components/Profile';
import { ListOfPeople } from './components/RenderingDataFromArray';
import { TeaGathering } from './KeepCompPure';
import { Buttons } from './components/Button';
import { ImageGallery } from './components/ImageGallery';
import { Hello } from './components/Hello';
import { UpdateObject } from './components/UpdateObject';
import { RespondingToEvents } from './components/RespondingToEvent';
import { SendMessage } from './components/SendingMessage';
import { Form } from './components/Form';
import { MovingBall } from './components/MovingBall';
import { ObjectForm } from './components/OBjectForm';
import { UpdatingArray } from './components/UpdatingArrayInStat';
import { Removing } from './components/RemoveFromAnArray';
import { ReplacingItems } from './components/ReplacingItemsInArray';
import { Inserting } from './components/InsertingIntoArray';
import { UpdatingObjArr } from './components/UpdatingObjectInsideArray';
import { Challenge1 } from './components/Challenge1';
import { ApiWork } from './components/ApiWork';
import { Imagecarousel } from './components/ImageCarousel';

const App = () => {
  // const people = [
  //   {
  //     id: 0,
  //     name: 'Creola Katherine Johnson',
  //     profession: 'mathematician',
  //   },
  //   {
  //     id: 1,
  //     name: 'Mario José Molina-Pasquel Henríquez',
  //     profession: 'chemist',
  //   },
  //   {
  //     id: 2,
  //     name: 'Mohammad Abdus Salam',
  //     profession: 'physicist',
  //   },
  //   {
  //     id: 3,
  //     name: 'Percy Lavon Julian',
  //     profession: 'chemist',
  //   },
  //   {
  //     id: 4,
  //     name: 'Subrahmanyan Chandrasekhar',
  //     profession: 'astrophysicist',
  //   },
  // ];
  // const showChemist = people.filter(
  //   (person) => person.profession === 'chemist',
  // );
  // const mapData = showChemist.map((chemist, id) => (
  //   <ul key={id}>
  //     <li>{chemist.name}</li>
  //     <li>{chemist.profession}</li>
  //   </ul>
  // ));
  return (
    <div id="mainDiv" className=" bg-[#212121] text-white ">
      {/* <Profile
        name="Maria Sklodowska-Curie"
        imageId="szV5sdG"
        profession="physicist and chemist"
        awards={['Nobel prize in Physics', 'Nobel Prize in Chemistry']}
        discovered="Polonium (chemical element)"
      /> */}
      {/* <PackingList name="Space suit" isPacked={true} />
      <PackingList name="Helmet with a golden leaf" isPacked={false} />
      <PackingList name="Photo of Mom" isPacked={true} /> */}
      {/* <ArrayData people={people} /> */}
      {/* <ul>{mapData}</ul> */}
      {/* <ListOfPeople />
      <TeaGathering />
      <Clock time={new Date()} />
      <Buttons />
      <ImageGallery />
      <Hello />
      <UpdateObject />
      <RespondingToEvents />
      <SendMessage />
      <Form />
      <MovingBall />
      <ObjectForm />
      <UpdatingArray />
      <Removing />
      <ReplacingItems />
      <Inserting />
      <UpdatingObjArr />
      <Challenge1 /> */}
      {/* <ApiWork /> */}
      <Imagecarousel />
    </div>
  );
};

export default App;
