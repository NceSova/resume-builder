import {Resume} from '../Resume';
import {HeaderEdit} from './HeaderEdit';
import {LearnEdit} from './LearnEdit';

export function EditTab({
  resume,
  setResume,
}: {
  resume: Resume;
  setResume: Function;
}) {
  return (
    <div className="">
      <HeaderEdit resume={resume} setResume={setResume} />
      <LearnEdit resume={resume} setResume={setResume} />
    </div>
  );
}
