export function Button(props) {
  return (
    <button
      className={'bg-primary rounded-xl p-2 text-white' + props.className}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
}
