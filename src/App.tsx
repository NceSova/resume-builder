import {useState} from 'react';
import {TopAppBar} from './components/TopAppBar';
import {HomeTab} from './components/HomeTab';
import {EditTab} from './components/EditTab';

function App() {
  const [curScreen, setCurScreen] = useState('home');
  let app = <h1>oops</h1>;
  switch (curScreen) {
    case 'home':
      app = <HomeTab />;
      break;
    case 'edit':
      app = <EditTab />;
      break;

    default:
      break;
  }
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-background">
      <TopAppBar cur={curScreen} setCur={setCurScreen} />
      <div className="flex-1">{app}</div>
    </div>
  );
}

export default App;
