import {useState} from 'react';
import {TopAppBar} from './components/TopAppBar';
import {HomeTab} from './components/HomeTab';
import {EditTab} from './components/EditTab';
import {Resume} from './Resume';

function App() {
  const [curScreen, setCurScreen] = useState('home');
  const [resume, setResume] = useState({
    info: {
      name: 'John',
      lastname: 'Doberman',
      email: 'user@domen.com',
      phone: '+79998887766',
      color: '#fb923c',
    },
    learn: [
      {
        id: '1',
        degree: 'CS',
        university: 'MGU',
        city: 'Moscow',
        country: 'Russia',
      },
      {
        id: '2',
        degree: 'CS',
        university: 'MGU',
        city: 'Moscow',
        country: 'Russia',
      },
      {
        id: '3',
        degree: 'CS',
        university: 'MGU',
        city: 'Moscow',
        country: 'Russia',
      },
      {
        id: '4',
        degree: 'CS',
        university: 'MGU',
        city: 'Moscow',
        country: 'Russia',
      },
    ],
    work: [
      {
        id: '1',
        title: 'Software engineer',
        company: 'Google',
        startDate: '06.05.2007',
        endDate: '13.07.2008',
        description: 'Pisal govnocode',
      },
      {
        id: '2',
        title: 'Software engineer',
        company: 'Google',
        startDate: '06.05.2007',
        endDate: '13.07.2008',
        description: 'Pisal govnocode',
      },
    ],
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
    <div className="bg-background flex h-screen w-screen flex-col lg:flex-row">
      <TopAppBar cur={curScreen} setCur={setCurScreen} />
      {app}
    </div>
  );
}

export default App;
