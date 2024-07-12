import {Resume} from '../Resume';
import {ResumeComponent} from './ResumeComponent';

export function HomeTab({resume}: {resume: Resume}) {
  const res = {
    info: {
      name: 'John',
      lastname: 'Doberman',
      email: 'user@domen.com',
      phone: '+79998887766',
      color: '#fbcfe8',
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
  } as Resume;
  return (
    <div className="grid h-full w-full flex-1 bg-background-950 p-8">
      <div className="max-w-prose bg-white shadow-lg">
        <ResumeComponent resume={res} />
      </div>
    </div>
  );
}
