import {useState} from 'react';
import {Resume, WorkPlace} from '../Resume';
import {v4 as uuidv4} from 'uuid';
import {WorkItem} from './WorkItem';

export function WorkEdit({
  resume,
  setResume,
}: {
  resume: Resume;
  setResume: Function;
}) {
  const [workItem, setLearnItem] = useState({} as WorkPlace);
  function updateResume() {
    const newArray = resume.work;
    newArray.push(workItem);
    const newResume = {...resume, work: newArray} as Resume;
    setResume(newResume);
  }
  return (
    <div className="bg-background">
      <div className="flex flex-col gap-2 px-8 py-1">
        <input
          type="text"
          placeholder="Должность"
          className="rounded-md bg-secondary p-3 font-body text-lg text-text outline-2 outline-accent"
          onChange={(e) => {
            setLearnItem({...workItem, title: e.target.value});
          }}
        />
        <input
          type="text"
          placeholder="Место работы"
          className="rounded-md bg-secondary p-3 font-body text-lg text-text outline-2 outline-accent"
          onChange={(e) => {
            setLearnItem({...workItem, company: e.target.value});
          }}
        />
        <input
          type="date"
          className="rounded-md bg-secondary p-3 font-body text-lg text-text outline-2 outline-accent"
          onChange={(e) => {
            setLearnItem({...workItem, startDate: e.target.value});
          }}
        />
        <input
          type="date"
          className="rounded-md bg-secondary p-3 font-body text-lg text-text outline-2 outline-accent"
          onChange={(e) => {
            setLearnItem({...workItem, endDate: e.target.value});
          }}
        />
        <input
          type="text"
          placeholder="Описание"
          className="rounded-md bg-secondary p-3 font-body text-lg text-text outline-2 outline-accent"
          onChange={(e) => {
            setLearnItem({...workItem, description: e.target.value});
          }}
        />
        <button
          className="rounded-xl bg-primary p-2 text-white"
          onClick={() => {
            workItem.id = uuidv4();
            updateResume();
          }}>
          Сохранить
        </button>
      </div>
      {resume.work.map((item) => (
        <WorkItem
          key={item.id}
          title={item.title}
          company={item.company}
          startDate={item.startDate}
          endDate={item.endDate}
          description={item.description}
        />
      ))}
    </div>
  );
}
