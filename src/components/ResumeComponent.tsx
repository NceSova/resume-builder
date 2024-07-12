import {Resume} from '../Resume';
import {HeaderItem} from './HeaderItem';
import {LearnItem} from './LearnItem';

export function ResumeComponent({resume}: {resume: Resume}) {
  const headerColor = resume.info.color;
  let learnHeader = undefined;
  if (resume.learn) {
    learnHeader = <h2 className="p-2 font-heading font-bold">Места учебы:</h2>;
  }
  return (
    <div className="h-full w-full">
      <HeaderItem
        name={resume.info.name}
        lastname={resume.info.lastname}
        email={resume.info.email}
        phone={resume.info.phone}
        color={resume.info.color}
      />
      <div>
        {learnHeader}
        {resume.learn.map((item) => (
          <LearnItem
            key={item.id}
            degree={item.degree}
            university={item.university}
            city={item.city}
            country={item.country}></LearnItem>
        ))}
      </div>
      <div></div>
    </div>
  );
}
