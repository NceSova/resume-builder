import {Resume} from '../Resume';
import {HeaderItem} from './HeaderItem';
import {LearnItem} from './LearnItem';
import {WorkItem} from './WorkItem';

export function ResumeComponent({resume}: {resume: Resume}) {
  const headerColor = resume.info.color;
  let learnHeader = undefined;
  if (resume.learn.length != 0) {
    learnHeader = (
      <h2 className="p-2 font-heading font-semibold">Места учебы:</h2>
    );
  }
  let workHeader = undefined;
  if (resume.work.length != 0) {
    workHeader = (
      <h2 className="p-2 font-heading font-semibold">Места работы:</h2>
    );
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
      <div>
        {workHeader}
        {resume.work.map((item) => (
          <WorkItem
            key={item.id}
            title={item.title}
            company={item.company}
            startDate={item.startDate}
            endDate={item.endDate}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
