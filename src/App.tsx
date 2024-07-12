import {useState} from 'react';
import {TopAppBar} from './components/TopAppBar';
import {HomeTab} from './components/HomeTab';
import {EditTab} from './components/EditTab';
import {Resume} from './Resume';

function App() {
  const [curScreen, setCurScreen] = useState('home');
  const [resume, setResume] = useState({} as Resume);

  let app = <h1>oops</h1>;
  switch (curScreen) {
    case 'home':
      app = <HomeTab />;
      break;
    case 'edit':
      app = <EditTab />;
      break;
  }

  return (
    <div className="bg-background flex h-screen w-screen flex-col lg:flex-row">
      <TopAppBar cur={curScreen} setCur={setCurScreen} />
      {app}
    </div>
  );
}

export default App;
