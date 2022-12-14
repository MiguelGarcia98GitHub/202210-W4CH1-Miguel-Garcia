import { Controls } from './components/Controls';
import { GentleMenList } from './components/GentlemenList';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { useState } from 'react';

function App() {
  const initialState = [
    {
      id: 123,
      name: 'Bertin Osborne',
      status: 'Alive',
      profession: 'Youtuber',
      twitter: '@osbourne',
      picture: 'bertin.jpg',
      alternativeText: 'Osbourne pointing at you',
      selected: true,
    },
    {
      id: 456,
      name: 'Farytale',
      status: 'RIP',
      profession: 'Influencer',
      twitter: 'pending',
      picture: 'fary.jpg',
      alternativeText: 'The Fary pointing at you',

      selected: false,
    },
    {
      id: 789,
      name: 'Julius Churchs',
      status: 'Alive',
      profession: 'Java developer',
      twitter: '@julius_churchs',
      picture: 'julio.jpg',
      alternativeText: 'Churchs pointing at you',
      selected: true,
    },
  ];

  const [data, setData] = useState(initialState);

  function selectAll() {
    const newState = [...initialState];
    newState.forEach((item: any) => {
      item.selected = true;
    });
    return setData(newState);
  }

  return (
    <div className="App">
      <Header />
      <Controls data={data} selectAll={selectAll} />
      <Main>
        <GentleMenList data={data} setData={setData}></GentleMenList>
      </Main>
    </div>
  );
}

export default App;
