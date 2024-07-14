import {ChangeEvent, useState} from 'react';
import {Info, Resume} from '../Resume';
import {Button} from './Button';
import {Input} from './Input';

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
  function setNewName(e: ChangeEvent) {
    const newInfo = {
      ...info,
      name: (e.target as HTMLInputElement).value,
    } as Info;
    setInfo(newInfo);
  }
  function setNewLastname(e: ChangeEvent) {
    const newInfo = {
      ...info,
      lastname: (e.target as HTMLInputElement).value,
    } as Info;
    setInfo(newInfo);
  }
  function setNewEmail(e: ChangeEvent) {
    const newInfo = {
      ...info,
      email: (e.target as HTMLInputElement).value,
    } as Info;
    setInfo(newInfo);
  }
  function setNewPhone(e: ChangeEvent) {
    const newInfo = {
      ...info,
      phone: (e.target as HTMLInputElement).value,
    } as Info;
    setInfo(newInfo);
  }
  function setNewColor(e: ChangeEvent) {
    const newInfo = {
      ...info,
      color: (e.target as HTMLInputElement).value,
    } as Info;
    setInfo(newInfo);
  }
  return (
    <div className="row-auto grid grid-cols-[2fr,_1fr] gap-3 px-8 py-1">
      <Input
        type="text"
        placeholder="Имя"
        value={info.name}
        onChange={(e: ChangeEvent) => setNewName(e)}
      />
      <Button className="" onClick={setNewResume}>
        Отправить
      </Button>
      <Input
        type="text"
        placeholder="Фамилия"
        value={info.lastname}
        onChange={(e: ChangeEvent) => setNewLastname(e)}
      />
      <Button className="" onClick={setNewResume}>
        Отправить
      </Button>
      <Input
        type="text"
        placeholder="Почта"
        value={info.email}
        onChange={(e: ChangeEvent) => setNewEmail(e)}
      />
      <Button className="" onClick={setNewResume}>
        Отправить
      </Button>
      <Input
        type="text"
        placeholder="Телефон"
        value={info.phone}
        onChange={(e: ChangeEvent) => setNewPhone(e)}
      />
      <Button className="" onClick={setNewResume}>
        Отправить
      </Button>
      <div className="flex items-center gap-2 rounded-md bg-secondary p-3">
        <label className="font-body text-lg text-text">Цвет заголовка</label>
        <input
          type="color"
          placeholder="цвет"
          className="h-10 w-14"
          value={info.color}
          onChange={(e: ChangeEvent) => setNewColor(e)}
        />
      </div>
      <Button className="" onClick={setNewResume}>
        Отправить
      </Button>
    </div>
  );
}
