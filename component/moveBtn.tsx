export default function MoveBtn(props: { text: string }) {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
      {props.text}
    </button>
  );
}
