import {LearnPlace} from '../Resume';

export function LearnItem({
  degree,
  university,
  city,
  country,
}: {
  degree: string;
  university: string;
  city: string;
  country: string;
}) {
  return (
    <div className="mb-2 grid grid-cols-2 border-b-2 p-3">
      <span className="font-bold">{degree + ', ' + university}</span>
      <span className="text-right font-body font-normal">
        {city + ', ' + country}
      </span>
    </div>
  );
}
