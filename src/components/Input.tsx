export function Input(props: any) {
  return (
    <input
      type={props.type}
      onChange={props.onChange}
      value={props.value}
      placeholder={props.placeholder}
      className={
        'rounded-md bg-secondary p-3 font-body text-lg text-text outline-2 outline-accent'
      }
    />
  );
}
