import {ChangeEvent, useState} from 'react';
import {Info, Resume} from '../Resume';
import {Button} from './Button';

export function HeaderEdit({
  resume,
  setResume,
}: {
  resume: Resume;
  setResume: Function;
}) {
  const [info, setInfo] = useState(resume.info);
  function setNewResume() {
    const newResume = {...resume, info: info} as Resume;
    setResume(newResume);
  }
  function setNewInfo(e: ChangeEvent) {
    const newInfo = {
      ...info,
      name: (e.target as HTMLInputElement).value,
    } as Info;
    setInfo(newInfo);
  }
  return (
    <div className="">
      <input
        type="text"
        className=""
        placeholder="Имя"
        value={info.name}
        onChange={(e) => setNewInfo(e)}
      />
      <Button className="" onClick={setNewResume}>
        Отправить
      </Button>
    </div>
  );
}
