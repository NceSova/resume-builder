import {ReactElement} from 'react';

export function Button({
  className,
  children,
  onClick,
}: {
  className: string;
  children: string;
  onClick: Function;
}) {
  return (
    <button
      className={'bg-primary rounded-md p-2 text-white' + className}
      onClick={(e) => onClick(e)}>
      {children}
    </button>
  );
}
