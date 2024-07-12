import editIcon from '../assets/icons/edit.svg';
import homeIcon from '../assets/icons/home.svg';
import {NavIcon} from '../components/NavIcon';

export function TopAppBar({cur, setCur}: {cur: string; setCur: Function}) {
  return (
    <div className="bg-secondary-400 flex h-20 w-screen flex-row items-center justify-around gap-2 p-2 shadow-md">
      <NavIcon name="edit" icon={editIcon} cur={cur} setCur={setCur} />
      <NavIcon name="home" icon={homeIcon} cur={cur} setCur={setCur} />
    </div>
  );
}
