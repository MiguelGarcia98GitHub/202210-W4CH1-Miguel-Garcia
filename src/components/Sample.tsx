import { Counter } from './Counter';
import './sample.module.css';

export function Sample() {
  const title: string = 'Hola Mundo';

  return (
    <>
      <h1>{title}</h1>
      <Counter />
    </>
  );
}
