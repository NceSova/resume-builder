import {useState} from 'react';
import {LearnPlace, Resume} from '../Resume';
import {v4 as uuidv4} from 'uuid';
import {LearnItem} from './LearnItem';

export function LearnEdit({
  resume,
  setResume,
}: {
  resume: Resume;
  setResume: Function;
}) {
  const [learnItem, setLearnItem] = useState({} as LearnPlace);
  function updateResume() {
    const newArray = resume.learn;
    newArray.push(learnItem);
    const newResume = {...resume, learn: newArray} as Resume;
    setResume(newResume);
  }
  return (
    <div className="bg-background">
      <div className="flex flex-col gap-2 px-8 py-1">
        <input
          type="text"
          placeholder="Специальность"
          className="rounded-md bg-secondary p-3 font-body text-lg text-text outline-2 outline-accent"
          onChange={(e) => {
            setLearnItem({...learnItem, degree: e.target.value});
          }}
        />
        <input
          type="text"
          placeholder="Университет"
          className="rounded-md bg-secondary p-3 font-body text-lg text-text outline-2 outline-accent"
          onChange={(e) => {
            setLearnItem({...learnItem, university: e.target.value});
          }}
        />
        <input
          type="text"
          placeholder="Город"
          className="rounded-md bg-secondary p-3 font-body text-lg text-text outline-2 outline-accent"
          onChange={(e) => {
            setLearnItem({...learnItem, city: e.target.value});
          }}
        />
        <input
          type="text"
          placeholder="Страна"
          className="rounded-md bg-secondary p-3 font-body text-lg text-text outline-2 outline-accent"
          onChange={(e) => {
            setLearnItem({...learnItem, country: e.target.value});
          }}
        />
        <button
          className="rounded-xl bg-primary p-2 text-white"
          onClick={(e) => {
            learnItem.id = uuidv4();
            updateResume();
          }}>
          Сохранить
        </button>
      </div>
      {resume.learn.map((item) => (
        <LearnItem
          key={item.id}
          degree={item.degree}
          university={item.university}
          city={item.city}
          country={item.country}></LearnItem>
      ))}
    </div>
  );
}
