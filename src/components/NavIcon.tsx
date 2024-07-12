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
  return (
    <button
      className={`${cur === name ? 'bg-accent-400' : ''} z-10 flex h-full min-w-20 flex-col items-center justify-center rounded-xl`}
      onClick={(e) => setCur(name)}>
      <img src={icon} alt="" />
      <span className="font-body text-white">{name}</span>
    </button>
  );
}
