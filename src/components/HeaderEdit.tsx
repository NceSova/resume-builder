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
    <div className="flex flex-col gap-4 px-8">
      <div className="flex items-center gap-2">
        <Input
          type="text"
          placeholder="Имя"
          value={info.name}
          onChange={(e: ChangeEvent) => setNewName(e)}
        />
        <Button className="" onClick={setNewResume}>
          Отправить
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Input
          type="text"
          placeholder="Фамилия"
          value={info.lastname}
          onChange={(e: ChangeEvent) => setNewLastname(e)}
        />
        <Button className="" onClick={setNewResume}>
          Отправить
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Input
          type="text"
          placeholder="Почта"
          value={info.email}
          onChange={(e: ChangeEvent) => setNewEmail(e)}
        />
        <Button className="" onClick={setNewResume}>
          Отправить
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Input
          type="text"
          placeholder="Телефон"
          value={info.phone}
          onChange={(e: ChangeEvent) => setNewPhone(e)}
        />
        <Button className="" onClick={setNewResume}>
          Отправить
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <label className="bg-secondary text-text rounded-md p-3 font-body text-lg">
          Цвет заголовка
        </label>
        <input
          type="color"
          placeholder="цвет"
          className="h-10 w-14"
          value={info.color}
          onChange={(e: ChangeEvent) => setNewColor(e)}
        />
        <Button className="" onClick={setNewResume}>
          Отправить
        </Button>
      </div>
    </div>
  );
}
