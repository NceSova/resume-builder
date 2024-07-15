import {useState} from 'react';
import {TopAppBar} from './components/TopAppBar';
import {HomeTab} from './components/HomeTab';
import {EditTab} from './components/EditTab';
import {Resume} from './Resume';

function App() {
  const [curScreen, setCurScreen] = useState('home');
  const [resume, setResume] = useState({
    info: {
      name: '',
      lastname: '',
      email: '',
      phone: '',
      color: '#68cdfe',
    },
    learn: [],
    work: [],
  } as Resume);

  let app = <h1>oops</h1>;
  switch (curScreen) {
    case 'home':
      app = <HomeTab resume={resume} />;
      break;
    case 'edit':
      app = <EditTab resume={resume} setResume={setResume} />;
      break;
  }

  return (
    <div className="flex min-h-screen flex-col bg-background lg:flex-row">
      <TopAppBar cur={curScreen} setCur={setCurScreen} />
      {app}
    </div>
  );
}

export default App;
