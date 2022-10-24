import { GentlemanCard } from './GentlemanCard';
import { useState } from 'react';

export function GentleMenList() {
  const initialState = [
    {
      id: 1,
      name: 'Bertin Osborne',
      status: 'Alive',
      profession: 'Youtuber',
      twitter: '@osbourne',
      picture: 'bertin.jpg',
      alternativeText: 'Osbourne pointing at you',
      selected: true,
    },
    {
      name: 'The Farytale',
      status: 'RIP',
      profession: 'Influencer',
      twitter: 'pending',
      picture: 'fary.jpg',
      alternativeText: 'The Fary pointing at you',
      id: 2,
      selected: false,
    },
    {
      id: 3,
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

  const renderThreeGentlemen = initialState.map((gentleman) => (
    <GentlemanCard
      id={gentleman.id}
      name={gentleman.name}
      status={gentleman.status}
      profession={gentleman.profession}
      twitter={gentleman.twitter}
      picture={gentleman.picture}
      alternativeText={gentleman.alternativeText}
      selected={gentleman.selected}
      key={gentleman.id}
    />
  ));

  return (
    <>
      <ul className="gentlemen">{renderThreeGentlemen}</ul>;
    </>
  );
}
