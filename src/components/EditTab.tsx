import {Resume} from '../Resume';
import {HeaderEdit} from './HeaderEdit';
import {LearnEdit} from './LearnEdit';
import {WorkEdit} from './WorkEdit';

export function EditTab({
  resume,
  setResume,
}: {
  resume: Resume;
  setResume: Function;
}) {
  return (
    <div className="flex flex-col gap-8 bg-background">
      <HeaderEdit resume={resume} setResume={setResume} />
      <LearnEdit resume={resume} setResume={setResume} />
      <WorkEdit resume={resume} setResume={setResume} />
    </div>
  );
}
