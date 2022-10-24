import { Controls } from './components/Controls';
import { GentleMenList } from './components/GentlemenList';
import { Header } from './components/Header';
import { Main } from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Controls />
      <Main>
        <GentleMenList></GentleMenList>
      </Main>
    </div>
  );
}

export default App;
