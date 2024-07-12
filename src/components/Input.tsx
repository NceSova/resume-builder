export function Input(props) {
  return (
    <input
      type={props.type}
      onChange={props.onChange}
      value={props.value}
      placeholder={props.placeholder}
      className={
        'outline-accent bg-secondary text-text rounded-md p-3 font-body text-lg outline-2'
      }
    />
  );
}
