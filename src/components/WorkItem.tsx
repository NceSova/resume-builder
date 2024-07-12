export function WorkItem({
  title,
  company,
  startDate,
  endDate,
  description,
}: {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}) {
  let desc = undefined;
  if (description) {
    desc = (
      <span className="col-span-2">{'Чем занимался: ' + description}</span>
    );
  }
  return (
    <div
      className={`grid grid-cols-2 gap-1 border-b-2 p-3 ${description === '' ? 'grid-rows-2' : 'grid-rows-[1fr_1fr_auto]'}`}>
      <span className="col-span-2 font-bold">{title + ', ' + company}</span>
      <span className="col-span-2">{startDate + ' — ' + endDate}</span>
      {desc}
    </div>
  );
}
