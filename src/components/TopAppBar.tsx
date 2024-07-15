import editIcon from '../assets/icons/edit.svg';
import homeIcon from '../assets/icons/home.svg';
import {NavIcon} from '../components/NavIcon';

export function TopAppBar({cur, setCur}: {cur: string; setCur: Function}) {
  return (
    <div className="sticky top-0 z-30 flex h-20 w-screen flex-row items-center justify-around gap-2 bg-primary p-2 shadow-md lg:h-screen lg:w-28 lg:flex-col lg:justify-start">
      <NavIcon name="edit" icon={editIcon} cur={cur} setCur={setCur} />
      <NavIcon name="home" icon={homeIcon} cur={cur} setCur={setCur} />
    </div>
  );
}
