export function Button(props: any) {
  return (
    <button
      className={'rounded-xl bg-primary p-2 text-white' + props.className}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
}
