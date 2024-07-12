import {Info} from '../Resume';

export function HeaderItem({name, lastname, email, phone, color}: Info) {
  //Change font color for better visibility
  function getContrastYIQ(hexcolor: string) {
    let r = parseInt(hexcolor.substring(1, 3), 16);
    let g = parseInt(hexcolor.substring(3, 5), 16);
    let b = parseInt(hexcolor.substring(5, 7), 16);
    let yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? '#000' : '#fff';
  }
  const fontColor = getContrastYIQ(color);

  return (
    <div
      className="grid grid-cols-2 grid-rows-2 gap-1 p-2"
      style={{backgroundColor: color, color: fontColor}}>
      <span className="font-heading">{name}</span>
      <span className="row-start-2 font-heading">{lastname}</span>
      <span className="text-right font-body font-normal">{email}</span>
      <span className="text-right font-body font-normal">{phone}</span>
    </div>
  );
}
