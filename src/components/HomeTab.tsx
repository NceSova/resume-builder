import {Resume} from '../Resume';
import {ResumeComponent} from './ResumeComponent';

export function HomeTab({resume}: {resume: Resume}) {
  return (
    <div className="grid min-h-full w-full flex-1 bg-background p-8">
      <div className="max-w-prose bg-white shadow-lg">
        <ResumeComponent resume={resume} />
      </div>
    </div>
  );
}
