interface IpropsData {
  name: string;
  type: string;
  placeholder: string;
}

export default function InputType(props: IpropsData) {
  return (
    <>
      <input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        className="border-2 rounded-md p-2 w-full h-16 bg-white text-black"
      />
    </>
  );
}
