import './App.scss';

import { InfoWidget } from './widgets/info/Info';
import { RoutesListWidget } from './widgets/routes-list/RoutesList';
import { RampsWidget } from './widgets/ramps/Ramps';

function App() {

  return (
    <div className="App">
      <main className='Main'>
        <InfoWidget />
        <RoutesListWidget />
        <RampsWidget />
      </main>
    </div>
  );
}

export default App;
