import {Resume} from '../Resume';
import {HeaderEdit} from './HeaderEdit';

export function EditTab({
  resume,
  setResume,
}: {
  resume: Resume;
  setResume: Function;
}) {
  return (
    <div className="">
      <h1>Edit</h1>
      <HeaderEdit resume={resume} setResume={setResume} />
    </div>
  );
}
