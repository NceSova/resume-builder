export function NavIcon({
  name,
  icon,
  cur,
  setCur,
}: {
  name: string;
  icon: string;
  cur: string;
  setCur: Function;
}) {
  const isSelected = cur === name;
  return (
    <button
      className={`${isSelected ? 'bg-secondary' : ''} h-23 z-10 flex w-20 flex-col items-center justify-center rounded-xl p-3`}
      onClick={(e) => setCur(name)}>
      <img src={icon} alt="" />
      <span className="font-body text-white">{name}</span>
    </button>
  );
}
